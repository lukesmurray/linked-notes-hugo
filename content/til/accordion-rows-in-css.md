---
description: TODO fill in a description
keywords: 
date: 2020-07-26

toc: false
markup: pandoc
title: accordion rows in css
---

# accordion rows in css

Cool trick from Eric Meyer which provides flexible grid based display of content on a blog page.

![example layout accomplished with this technique](/assets/example-eric-meyer-layout.png)

The basic idea is to create a grid with `min-content` rows at the top and bottom and a `1fr` row in the middle.
You can then place elements in the `min-content` rows and the rows will expand based on the size of those elements.
When there are no elements to place then the rows collapse.

Eric Meyer does a much better job of [explaining the technique](https://meyerweb.com/eric/thoughts/2020/07/01/accordion-rows-in-css-grid/) on his site.
