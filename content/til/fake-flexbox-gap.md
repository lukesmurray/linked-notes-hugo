---
description: TODO fill in a description
keywords: 
date: 2020-07-23

toc: false
markup: pandoc
title: fake flexbox gap
---

# fake flexbox gap

While building this site I wanted to lay out a set of tags from left to right.
The tags need to break when the page is too small.
But I only want space between the tags, not on the borders.

![breaking tags goal design](/assets/breaking-tags-design.png)

![no margin on the edges](/assets/flex-box-gap-goal.png)

To create the tags I used an unordered list.

```html
<div class="tagMenu">
  <ul>
    <li>tag 1</li>
    <li>tag 2</li>
    <li>tag 3 is long</li>
    <li>tag 4 is even longer</li>
    <li>tag 5 is long</li>
    <li>tag 6</li>
    <li>tag 7</li>
    <li>tag 8</li>
    <li>tag 9 is long</li>
  </ul>
</div>
```

For the rest of the tutorial the html is going to stay the same.
Only the CSS will be changed.

## First Attempt

<style>
.tagMenu {
  /*styling for the example*/
  resize: both;
  overflow: hidden;
  background: rgb(168,240,198);
  min-height: 12rem;
  border-radius: .25rem;
}

.tagMenu > ul {
  /*flex and flex wrap*/
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  /*row gap*/
  --row-gap: .5rem;

  /*column gap*/
  --column-gap: 1rem;

  /*override site styling*/
  padding-left: 0rem;
}

.tagMenu > ul > li {
  list-style-type: none;
  background-color: rgb(238,238,238);
  border: 1px solid rgb(85,85,85);
  border-radius: .25rem;
  padding: 0 .25rem;
  /*set the top and left margin*/
  margin: var(--row-gap) 0 0 var(--column-gap);
}
</style>

::: tagMenu :::

  - tag 1
  - tag 2
  - tag 3 is long
  - tag 4 is even longer
  - tag 5 is long
  - tag 6
  - tag 7
  - tag 8
  - tag 9 is long

:::

Try resizing the example.

Already this is pretty close.
Now lets get rid of the extra margins.
How?
By placing negative margins on the containing list.

<style>
.tagMenu2 {
}

.tagMenu2 > ul {
  margin: calc(-1 *var(--row-gap)) calc(-1* var(--column-gap)) 0;
}

.tagMenu2 > ul > li {
}
</style>

::: {.tagMenu .tagMenu2} :::

  - tag 1
  - tag 2
  - tag 3 is long
  - tag 4 is even longer
  - tag 5 is long
  - tag 6
  - tag 7
  - tag 8
  - tag 9 is long

:::

This is basically there.
The only issue remaining is the negative margin pushing elements over on the right hand side.
