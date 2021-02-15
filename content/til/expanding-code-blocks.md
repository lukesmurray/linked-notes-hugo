---
date: 2020-08-07
# keywords:
#   - TODO fill in keywords
# description: TODO fill in a description
# subtitle: TODO fill in a subtitle
images: 
  - /assets/long-code-hover.png
toc: false
markup: pandoc
title: expanding code blocks
---

# expanding code blocks

I recently came across a website which has code blocks which expand on hover.
I think its a really clever solution for reading code blocks so I implemented it myself.
This is a little write up of how I did it and what I learned along the way.

## Context 

Web typographers often recommended to keep line length constrained.
When reading a line of text our eyes constantly scan from the end of one line to the beginning of the next line.
If the line is too long then our eyes cannot easily track where the beginning of the next line is.
We find ourselves mentally tired, rereading the same lines over and over again. [@RefactoringUIBook; @ButterickPracticalTypography]

To avoid the problem of long and hard to scan lines web typographers recommend choosing a reasonable [measure](https://en.wikipedia.org/wiki/Line_length) for all text. [@Axioms] *The Elements of Typographic Style* recommend a line length of between 45 and 75 characters. [@ChooseComfortableMeasure].

A reasonable measure can be code blocks hard to read.
It is fairly common practice on the web for code blocks to have a max width of a line length.
However, due to historical reasons [^punchcard] it is also common practice to break lines of code at 80 characters, which is larger than most reasonable line measures.

[^punchcard]:
  The IBM punchcard was 12 rows by 80 columns. 
  80 characters per row became a common choice in the design of terminals due to this historical decision. [@PunchedCard2020]

## Design Goal

I sketched out a prototype of what I wanted in [Excalidraw](https://excalidraw.com).
The code blocks are dark grey with black lines.
The normal text is just Lorem Ipsum below the code blocks.

![In the default state code blocks are limited to the size of the measure even if there is enough space on the screen to display the code block without horizontal scrolling](/assets/code-in-normal-situation.png)

![When the user hovers on a code block which requires horizontal scrolling the codeblock expands to fill the available space, using scrolling only if the screen is not wide enough to display the full lines.](/assets/long-code-hover.png)

![When the user hovers on a code block which does not require horizontal scrolling the codeblock retains the size of the measure.](/assets/small-code-block-hover.png)

One small detail I wanted in the final implementation was animated width changes for [a bit of juice](https://www.youtube.com/watch?v=Fy0aCDmgnxg). 

## Implementation

### Background

The trick to implementing this idea was actually in understanding how CSS calculates width based on `width`, `min-width`, and `max-width`.

For example what is the width of a `div` if we have the following CSS code.

```css
div {
  width: 100px;
  min-width: 120px;
  max-width: 80px;
}
```

Spoiler Below

...

...

...

...

...

The width is `120px`. But why?

When the browser calculates the width of an element it starts by looking at the `width` property.

In this case the width property is `100px` so the calculated width is set to `100px`.

Next the browser checks to see if the calculated width is greater than the `max-width` property. If the calculated width is larger than the max-width property is then the element's calculated width is set to the `max-width`.

In this case the calculated width of `100px` is larger than the `max-width` of `80px` so the calculated width is set to `80px`.

Finally CSS checks to see if the calculated width is less than the `min-width` property. If the calculated width is less than the `min-width` property the calculated width is set to the `min-width`.

In this case the calculated width of `80px` is smaller than the `min-width` of `120px` so the calculated width is set to `120px`.

### How its done


I start with the following CSS.
These three lines make sure that the `pre` element fills the available horizontal space which is assumed to be a measure.
The `max-width` is set to overcome the measure axiom which sets the `max-width` of all elements to one measure. [^measureAxiom]

```css
pre {
  min-width: 100%;
  max-width: max-content;
  width: 100%;
}
```


With these three lines we have achieved the first image.
Now the hover effect.

```css
pre:hover {
  width: calc(100% + var(--side-measure));
}
```

The `--side-measure` is assumed to be the amount you want to expand the width, for example the width of a sidebar in a [holy grail layout](https://en.wikipedia.org/wiki/Holy_grail_(web_design)).

For elements where the width does not need to be expanded the `max-width: max-content` will constraint the width to be less than `100%`.
The `min-width` of `100%` will then override the `max-width` and set the final width to `100%`.
This makes it look like nothing happened.

For elements where the width does need to expand the element will expand to fill the sidebar, then resize back down to `max-content` if less space is needed.

### Final Effect

In the end the code is fairly simple, just 6 lines of CSS but I learned about `max-content` and the interplay of `width`, `max-width`, and `min-width` while implementing it.

Here is a demo although the code may or may not still be in use on this site!

![Demo of scrolling and expanding code blocks](/assets/scrolling-expanded-codeblocks.mp4){.gif}

[^measureAxiom]:
    I use the following rules to set a measure axiom. [@Axioms]
    All elements on the page are given a `max-width` specified by the `--measure` variable.

    ```css
    :root {
      --measure: 60ch; /* measure of 60ch */
    }

    * {
      max-width: var(--measure); /* measure applied to all elements */
    }

    html,
    body,
    div,
    header,
    nav,
    main,
    footer {
      max-width: none; /* with some exceptions */
    }
    ```

    The preset max width makes sure that the code block takes up at most a measure.

