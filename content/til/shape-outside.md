---
date: 2020-08-04
# keywords:
#   - TODO fill in keywords
# description: TODO fill in a description
# subtitle: TODO fill in a subtitle
# images:
#   - TODO fill in images
toc: false
markup: pandoc
title: Shape Outside
---

# Shape Outside

Today I learned about the `shape-outside` property in CSS while reading Andy Matuschak and Michael Nielsen's most recent essay Timeful Texts [@matuschakTimefulTexts2020] with illustrations by Maggie Appleton.

The text is interspersed with beautiful illustrations by Maggie Appleton of papers falling down the page.

![Example of papers falling down the page interspersed with text.](/assets/text-interspersed-with-papers.png)

Normally when I see a nice design I think to myself "oh thats nice" and move on. But I want to follow the advice from Refactoring UI [@RefactoringUIBook] and

- [[[Look for decisions you wouldn’t have made]]](../slipbox/look-for-decisions-you-wouldnt-have-made)
- [[[Rebuild your favorite interfaces]]](../slipbox/rebuild-your-favorite-interfaces)

I checked the image to see if it was not a rectangle, but the image is clearly a rectangle, even if parts of it are transparent.

![Maggie Appleton drawing of a falling piece of paper](/assets/page-falling-down-the-screen.png)

Next I looked at the paragraph to see if whitespace was used to somehow avoid the image.
The paragraph seemed to have no special styles associated with it.
Finally I found a mysterious `shape-outside` property on the image.
Since I had never seen the `shape-outside` property I was fairly sure this was what I was looking for.

```css
.leftFloat {
		float: left;
		position: relative;
		left: -170px;
		top: 0px;
		shape-outside: polygon(0 50px, 80px 50px, 0px 140px);
    background-color: hsla(0, 100%, 50%, 10%);
}
```

```html
<p>
Esse do minim Lorem sit cillum deserunt consectetur officia dolor sint enim quis. Velit minim aliquip quis culpa adipisicing. Laboris veniam deserunt pariatur consequat est labore qui ut ea deserunt.
<img src="/assets/page-falling-down-the-screen.png" class="leftFloat"/>
</p>
```

The `shape-outside` combined with `float` is the trick.
`float` by itself places an element on the left or right side of its container allowing text and inline elements to wrap around it.
Normally content wraps around a floated element's margin box.
With `shape-outside` this wrapping can be customized.

In Timeful Texts Maggie wraps the text using a simple `polygon` forming a triangle.
The `polygon` is placed on the left side of the image.
But the image is then translated left as well so the polygon appears on the right.

Here is the effect reproduced with a background image so the bounds of the image are more obvious.

--- 

## Example

<style>
.leftFloat {
		float: left;
		position: relative;
		left: -170px;
		top: 0px;
		shape-outside: polygon(0 50px, 80px 50px, 0px 140px);
    border: none;
    background-color: hsla(0, 100%, 50%, 10%);
}
</style>

<div>
  <p>
  <img src="/assets/page-falling-down-the-screen.png" class="leftFloat"/>
  Esse do minim Lorem sit cillum deserunt consectetur officia dolor sint enim quis. Velit minim aliquip quis culpa adipisicing. Laboris veniam deserunt pariatur consequat est labore qui ut ea deserunt.
  Esse do minim Lorem sit cillum deserunt consectetur officia dolor sint enim quis. Velit minim aliquip quis culpa adipisicing. Laboris veniam deserunt pariatur consequat est labore qui ut ea deserunt.
  </p>
</div>

---