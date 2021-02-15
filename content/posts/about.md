---
description: Meta essay about the goals and design of my notes.
keywords: 
  - meta
date: 2020-06-25

toc: true
markup: pandoc
title: about
---

# about

## Design Principles

The design principles are shamelessly inspired by [Gwern's design principles](https://www.gwern.net/About#design).

1. Accessibility and Progressive Enhancement
2. Minimalism
3. Efficiency

For accessibility I evaluate the site using the [web accessibility evaluation tool](https://wave.webaim.org/),
the built in chrome lighthouse score,
and with javascript disabled.

Progressive enhancement is a work in progress.
I would like to only load javascript scripts when features are necessary.
For example the [sidenote script](/metadata/scripts/sidenote.js) only needs to be loaded when footnotes are visible.
Gwern adopts this strategy and uses the [intersection observer api](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to detect when elements which can be augmented by scripts are visible.

I think I have achieved a nice minimalist design.
The one outstanding task is to add a dark theme.

Overall the site is fairly efficient but the efficiency is a work in progress.
I would like to progressively load and render assets such as images and video, and have fallback from `webm` to `mp4`.

---

## Color

The color scheme is minimalist and readable.
The primary content on this site is text so if it is not readable then the design needs to be improved.
The color scheme is mainly greys and whites in order to avoid distractions from the content. [^gwernColor]
I use a white background because Google uses a white background and I assume Google makes an effort to have readable content. [^googleLegibility]
Eventually if I find research on how color and contrast effect readability I will try to incorporate it into the site.
For now I use web accessibility warnings as my barometer for when the color is sufficient.

[^gwernColor]:
  Gwern also uses gray scale in his site.
  Unlike Gwern I do not limit myself to grayscale.
  I think limitations can be an interesting exercise.
  However we have color monitors and we are ocular creatures.
  Color is one of Bertin's seven visual variables. [@bertinSemiologyGraphicsDiagrams2010]
  Why not use it?

    > The palette is deliberately kept to grayscale as an experiment in consistency and whether this constraint permits a readable aesthetically-pleasing website.
    > Various classic typographical tools, like drop caps and small caps are used for emphasis.
    > [@branwenThisWebsite2010]

[^googleLegibility]:
  Although Google's extension documentation leaves something to be desired.
  The light grey text on a light grey background is particularly painful to read.

    ![chrome extension documentation](/assets/chrome-extension-documentation.png)

I try to use color sparingly but I do use color to draw attention towards or away from different parts of the document.
Links are [highlighted]{style="color: var(--text-link-color);"} in order to distinguish them from regular text. [^linkColors]
Figure captions are [dimmed]{ style="color: var(--text-secondary-color);" } in order to reduce emphases on captions from the main text content.
Code is given a [unique background color]{style="background-color: var(--code-background-color)"} to distinguish code from the surrounding text.
The text is dark gray rather than black to account for the higher contrast ratios of screens. [^contrastRatio]

[^linkColors]:
  Butterick is very opinionated about links in *Practical Typography*.
  He is adamant that links should not be underlined.

    > Yes, I’m aware that web hyperlinks have typically been underlined.
    > But underlining is nothing more than an odious typewriter habit,
    > held over on websites because of inertia.
    > It was tolerable in 1994 when web browsers could do so little.
    > But not today, when they can do so much.
    > [@ButterickPracticalTypography]

    But Butterick concedes that color is a reasonable way to denote clickability.

    > Color remains the idiomatic way to denote clickability on the web.
    > So feel free to use color (with or without underlining) for hyperlinks.
    > [@ColorButterickPractical]

[^contrastRatio]:
  Butterick on the effects of high contrast screens on readability.

    > Consider making your text dark gray rather than black.
    > Unlike a piece of paper—which reflects ambient light—a computer screen projects its own light and tends to have more severe contrast.
    > Therefore, on screen, dark-gray text can be more comfortable to read than black text.
    > That’s why many digital-book readers let you reduce the screen brightness or change the text color.
    > [@ColorButterickPractical]

Butterick points out that thicker lines are perceived to be darker than thinner lines.[^sizeAndColor]
I use the illusion of darked text to increase the contrast of my headers.
The h2 and h3 headers in the body are slightly bolder to stand out from the rest of the text in a subtle way.

[^sizeAndColor]:
  Butterick on the relationship between size, weight, and color in typography.

    > The perceived intensity of colored type depends not just on the color,
    > but also the size and weight of the font.
    > So a thin or small font can carry a more intense color than a heavy or large font.
    > [@ColorButterickPractical]

---

## Typography

The font used in the main text is [source serif pro](https://github.com/adobe-fonts/source-serif-pro).
The font used for monospace text is [source code pro](https://github.com/adobe-fonts/source-code-pro).
I chose these fonts because they are free, they work together, and I like the look. [^ButterickFreeFontRecommendation]

[^ButterickFreeFontRecommendation]:
  They are also both recommended by Butterick in the [Free Font Chapter](https://practicaltypography.com/free-fonts.html) from *Practical Typography*.

The size of the text is not very rigid.
I started with a modular scale to get something reasonable, and tried to stick to a [vertical grid](https://24ways.org/2006/compose-to-a-vertical-rhythm).
The theory of modular scales is nice.
But in practice the results are usually too large or too small.
Also maintaining a vertical grid and modular scale takes so much time and is boring.
Its much more fun to play around with sizes and slowly iterate until you find something you enjoy reading and looking at.

I benefit from using very few html elements.
In general the text sizes only need to be defined for `p`, `blockquote`, `h2`, `h3`.
I use one `h1` element per page which is the title.
I only use two levels of headings, if I need more I restructure my writing.
Because there is so little variability in my html, a small number of css rules can go a long way to define the style of the document.

One very fast method for maintaining a vertical grid is to use [the stack layout](https://every-layout.dev/layouts/stack/) from *Every Layout*.
I use a nested stack.
The `article` element contains a stack of `section` elements with `1.5rem` spacing.
Each `section` element contains a stack of `p` elements with `1rem` spacing.
I tweak this a little bit to provide extra padding around unique elements such as `figure` and `blockquote` but the stack does 90% of the work.
The main tool used in the stack is the [css owl selector](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/) which everyone could benefit from learning.

### Links

A lot of thought went into link styling.
The styling is very inspired by *Butterick's Practical Typography* [@ButterickPracticalTypography].
The rising popularity of tools and sites which rely heavily on links indicates the important of links for both readers and writers. [^hypertextTools]

[^hypertextTools]: Examples of tools heavily based on links are
[Roam Research](https://roamresearch.com/);
[HyperCard](https://en.wikipedia.org/wiki/HyperCard);
the many tools designed for authoring [Zettelkasten](https://en.wikipedia.org/wiki/Zettelkasten);
popularity of link aggregators such as [Reddit](https://reddit.com), [Hacker News](https://news.ycombinator.com);
small sites which are personally inspiring to me such as [Andy Matuschak's Notes](https://notes.andymatuschak.org/About_these_notes).

I looked at many different examples of link styling from around the web for inspiration.

![Interaction with external links in *Butterick's Practical Typography* [@ButterickPracticalTypography]](/assets/butterickPracticalTypographyExternalLink.mp4){.gif}

![Interaction with internal links in *Butterick's Practical Typography* [@ButterickPracticalTypography]](/assets/butterickPracticalTypographyInternalLink.mp4){.gif}

![Interaction with links in the NYTimes [@timesCoronavirusLatestMap]](/assets/nytimesLink.mp4){.gif}

![Interaction with links on Wikipedia [@BlackMoshannonState2020]](/assets/wikipediaLink.mp4){.gif}

![Interaction with links on Gwern.net [@branwenThisWebsite2010]](/assets/gwernLink.mp4){.gif}

Many of these examples are similar but the subtle differences are important and enjoyable to examine once you notice them.
Of all the examples the wikipedia links are my favorite.
The wikipedia links use a separate color to distinguish themselves from the text;
they have no underline until the user hovers [^underlineLinks].
However, I am also partial to the use of icons to indicate the location of the link.
Icons are used in *Butterick's Practical Typography* as well as Gwern's notes [@ButterickPracticalTypography; @branwenThisWebsite2010].

[^underlineLinks]:
  Butterick has a lot to say about links in *Practical Typography*.
  The summary is links in general are over emphasized to encourage clicks, and underlines are unnecessary and an outdated holdover from typewriters.

    > Yes, I’m aware that web hyperlinks have typically been underlined.
    > But underlining is nothing more than an odious typewriter habit,
    > held over on websites because of inertia.
    > It was tolerable in 1994 when web browsers could do so little.
    > But not today, when they can do so much.
    > [@ButterickPracticalTypography]

    <!--  -->

    > Of course, the main reason hyperlinks have historically been overstyled is because generating clicks on those links is essential to internet advertising.
    > Here, you will find no advertising—just us readers.
    > The design is tailored accordingly.
    > [@ButterickPracticalTypography]

I use icons to indicate internal references, external references, and certain special sites. For example.

- [internal reference](about.md)
- [external reference](https://example.com)
- [wikipedia reference](https://en.wikipedia.org/wiki/Main_Page)

---

## Layout

The layout is inspired by [Gwern](https://www.gwern.net) as well as [Ink and Switch](https://www.inkandswitch.com/end-user-programming.html).
I really like how Ink and Switch uses symmetry with the combined body text and sidenotes.

![The Ink and Switch Layout looks asymmetrical at first since the sidenotes are not always visible. But when the sidenotes are visible the layout feels very clean.](/assets/ink-and-switch-layout.png "")

Gwern's layout does not have symmetry, but adopts footnotes on both sides of the page.

![The Gwern layout looks asymmetrical and is asymmetrical. I find the Ink and Switch page much easier to read.](/assets/gwern-assymetrical-layout.png)

I like the idea of providing content in the margins and I want to move more content into the margins going forward.
I really like Ink and Switch's placement of figure captions in the sidebar when there is enough space.

![Ink and Switch places figure captions in the sidebar](/assets/ink-and-switch-sidebar-figure-captions.png)

To get the layout I want I use two [measures](https://en.wikipedia.org/wiki/Line_length).
The measures define the size of the center content and the size of the sidebars.
Because the sidebars are the same size the entire page has symmetry.
I use a css grid inspired by the [CSS Grid:Holy Grail Layout](https://alligator.io/css/css-grid-holy-grail-layout/) to layout the page.
Instead of displaying navigation, content, and advertisements, I display navigation, content, and sidenotes.
I have three *break points* in the grid for responsive design.

1. *Large*: table of contents, content, and sidenotes next to each other.
2. *Medium*: table of contents above the content. Content and sidenotes next to each other
3. *Small*: table of contents above the content. Sidenotes removed and only footnotes visible.

---

## CSS

The CSS is completely handrolled and [is publicly available](/metadata/styles/site.css).
I use two processors on the CSS
[autoprefixer](https://github.com/postcss/autoprefixer) for vendor prefixes and
[postcss-nesting](https://github.com/jonathantneal/postcss-nesting) for writing nested css following the [CSS Nesting draft](https://drafts.csswg.org/css-nesting-1/).

---

## Tools

The site is deployed using a simple [build script](/build.sh).
Basically the build converts markdown files to html,
uses rsync to copy assets and the converted files to a temporary directory,
and then atomically uses rsync to copy the assets and converted files to a directory for distribution.
Every time the build is run the entire site is created from scratch.
There is no caching since there are only two hard things in computer science. [^twoHardThings]

[^twoHardThings]:

  > There are only two hard things in Computer Science: cache invalidation and naming things.
  > [@fowlerBlikiTwoHardThings]

The only tools used to build the site are `pandoc`, `pandoc-citeproc` and a couple of node packages listed in [package.json](/package.json).

---

## Optimization and Performance

[Web Performance 101](https://3perf.com/talks/web-perf-101/) by Ivan Akulov at 3perf is an excellent overview of performance optimizations.
Overtime I will gradually integrate the recommended optimizations into the build process and code supporting this site.

I am using [videos instead of gifs](https://web.dev/replace-gifs-with-videos/) so my videos have the attributes `autoplay loop muted playsinline`.

---

## Web Annotations

TODO <https://web.hypothes.is/blog/guidance-for-web-publishers/>

---

## Goals

TODO

- long now
