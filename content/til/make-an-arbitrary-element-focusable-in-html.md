---
description: TODO fill in a description
keywords:
date: 2020-07-27

toc: false
markup: pandoc
title: make an arbitrary element focusable in html
---

# make an arbitrary element focusable in html

_TLDR_: Don't roll your own selections in lists.
Set a `tabIndex=0` attribute on html elements which you want to be keyboard focusable.
As a side effect you get `onBlur` and `onFocus` events which can be used for semantic styling.

## Use Case

While building a list recently I wanted elements in the list to be selectable.
I was using React so each list element had an `id` which I was using for the key and to set the focused element.
I used a simple `useState` to get the job done.

```tsx
const [focusedElementId, setFocusedElementId] = useState<string>(undefined);

return (
  <ul>
    {items.map((item) => (
      <li
        key={item.id}
        style={{
          backgroundColor: item.key === focusedElementId ? "#d8edf3" : "",
        }}
        onClick={() => setFocusedElementId(item.id)}
      >
        item.name
      </li>
    ))}
  </ul>
);
```

This solution isn't bad but I quickly ran into some issues.
What happens when we click away from the list?
Normally the selection would be removed but in this case the selection only changes if I click in the list.
How can I make the selection disappear if I click away?
The obvious answer is to use `onFocus` and `onBlur`.
But these events are only fired on input elements. Or are they?

The solution is to use the `tabindex` attribute to [make the elements in the list keyboard navigable](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets#Using_tabindex).

The following table showing tabindex attribute values is reproduced from MDN.

| tabindex attribute            | Focusable with mouse or JavaScript via element.focus()                               | Tab navigable                                                                                                                                                                                                                       |
| ----------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| not present                   | Follows the platform convention of the element (yes for form controls, links, etc.). | Follows the platform convention of the element.                                                                                                                                                                                     |
| Negative (i.e. tabindex="-1") | Yes                                                                                  | No; author must focus the element with focus() in response to arrow or other key presses.                                                                                                                                           |
| Zero (i.e. tabindex="0")      | Yes                                                                                  | In tab order relative to element's position in document (note that interactive elements like `<a>` have this behavior by default, they don't need the attribute).                                                                   |
| Positive (e.g. tabindex="33") | Yes                                                                                  | tabindex value determines where this element is positioned in the tab order: smaller values will position elements earlier in the tab order than larger values (for example, tabindex="7" will be positioned before tabindex="11"). |

If we give the elements in the list a `tabIndex` value of `0` then the elements will be selectable using built in browser semantics.
This is both simpler and more accessible, a win-win.

```tsx
const [focusedElementId, setFocusedElementId] = useState<string>(undefined);

return (
  <ul>
    {items.map((item) => (
      <li
        key={item.id}
        tabIndex={0}
        style={{
          backgroundColor: item.key === focusedElementId ? "#d8edf3" : "",
        }}
        onFocus={() => {
          setFocusedElementId(item.id);
        }}
        onBlur={() => {
          if (focusedElementId === item.id) {
            setFocusedElementId(undefined);
          }
        }}
      >
        item.name
      </li>
    ))}
  </ul>
);
```
