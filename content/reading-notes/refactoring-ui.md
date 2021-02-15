---
description: TODO fill in a description
keywords:
  - reading notes
date: 2020-07-25
toc: true
markup: pandoc
title: Refactoring UI
---

# Refactoring UI

Reference
: [@RefactoringUIBook]

This book is full of simple practical advice for web designers.
The highlight of the book is the beautiful examples.
Each example shows a design with some flaws in it, then a design which has been made beautiful by applying the advice which has just been presented.
The examples are beautifully designed and could easily be inspiration for a UI Hall of Fame.

Web design is a new field, and the goalposts for what defines modern web design are constantly moving.
This book is definitely tied to what is currently fashionable in modern web design but provides advice which will most likely transcend fads.
The examples may end up looking dated but the concepts are fantastic.

My personal favorite sections were about color usage and light.
However the book is filled with design workflow tips which will probably make me much more efficient.

I often find that there is a dearth of practical and applied materials in web design.
For example in many web design courses the suggested reading is The Design of Everyday Things [@normanDesignEverydayThings2013]
or Don't Make me Think [@krugDonMakeMe2014].
Both books are excellent but tend not to provide much immediate practical advice for the nitty gritty details of creating a website.
Usability engineering is incredibly important but there is a [gulf of execution](https://en.wikipedia.org/wiki/Gulf_of_execution) between designer's knowledge of usability engineering and designer's ability to create beautiful interfaces.

Designers can always pick and choose examples of good and bad web design but its difficult to think about Norman doors when you're trying to choose if there should be "14px between those buttons or 16px".
This book in contrast focuses completely on applied and nitty gritty decision making, and can be immediately used for resolving issues in every day design.

9/10

## Basic Design Behavior Guidelines

- start with a feature not a layout
  - instead of starting with the app bar, design the core features.
    The layout is simply the chrome or boilerplate around the features.
- wait on details
  - [[[work expands to fill the time allotted]]](../slipbox/work-expands-to-fill-the-time-allotted) and [[[members of an organization give disproportionate weight to trivial issues]]](../slipbox/members-of-an-organization-give-disproportionate-weight-to-trivial-issues)
- hold off on color
  - by designing on gray scale we keep low fidelity and we rely on layout, whitespace, and typography to do the heavy lifting.
  - Leads to cleaner user interfaces.
- be a pessimist when you design
  - always design the most minimal feature at first
  - anything that is nice to have can be added later

## Adding Personality

### Fonts

| personality        | font              |
| :----------------- | :---------------- |
| playful            | rounded san serif |
| elegant or classic | serif             |
| plain              | neutral san serif |

### Color

| personality                | color |
| :------------------------- | :---- |
| safe and familiar          | blue  |
| expensive or sophisticated | gold  |
| fun and not serious        | pink  |

### Border Radius

| personality       | style |
| :---------------- | :---- |
| neutral           | small |
| playful           | large |
| serious or formal | none  |

## Design Systems

- What is the benefit of a design system?
  - provides constraints.
    there are many possible good choices.
    a design system makes it much easier to choose.
- how do you make choices in a design system?
  - go with your gut, then compare with your second and third choices.
    keep a/b testing until you have one value which beats the two values next to it.

### Visual Clutter and Hierarchies

- maintaining a hierarchy

  - when all elements are equal the interface is cluttered and confusing.
    instead, highlight important elements and the result is more pleasing.

- avoid emphasis through font size

  - use bold text to communicate importance
  - use softer color for supporting text instead of a smaller font size
  - use dark color for primary content, grey color for secondary content, lighter grey for tertiary content
  - use two font weights, normal for normal text and bold for emphasized text

- deemphasizing text on a background color

  - instead of making deemphasized text grey or opaque choose a color with the same hue and adjust the saturation and lightness

- emphasis by deemphasis

  - sometimes its difficult to make ui elements stand out by highlighting them.
    In those cases try to deemphasize the UI elements which are drawing attention away from the UI element you are trying to highlight.

- remove labels from elements

  - labels are often used to indicate what data is, but sometimes labels are redundant. i.e. `email: myemail@example.com`.
  - data can often be understood based on contents or formatting i.e. `$100`
  - clarify values instead of providing a label. `In Stock: 12` => `12 left in stock`
  - when you do need labels deemphasize them

- when to emphasize labels

  - when users are looking for the labels not the value.
    For example when users are looking for screen size while buying a monitor.

- do not feel forced to emphasize h1 tags

  - even if the h1 tag is semantically meaningful there are times when the focus is on the content, not the title.
  - in general semantic choices have nothing to do with design choices
    An h1 tag could be visually hidden but left in for accessibility or semantics.

- use contrast to compensate for weight

  - certain elements like icons have a lot of weight, especially compared to text.
  - to prevent icons from dominating text reduce their contrast

- use weight to compensate for contrast

  - some elements have vry little wight, for example horizontal rules.
    To kep a soft look increase th weight of the border instead of making it darker

- hierarchy comes before semantics
  - instead of making all buttons look like buttons, only make primary buttons look like buttons.
    Giving all actions the same appearance makes it harder to parse the user interface
  - split actions into primary, secondary, and tertiary.
    assign styling based on this hierarchy rather than on semantics of the element types.
  - it is not necessary to highlight destructive actions.
    place destructive actions in the hierarchy and provide a confirmation.

## Layout and Spacing

- start with too much whitespace
- remove whitespace instead of adding it
- establish a system for spacing and sizing
  - the sizing system should focus on percentage difference.
    values at the low end are packed closer together.
    values at the upper end are spread farther apart.
- do not feel pressured to fill the whole screen, screens are large.
  create your designs then place them on the screen.
  Whitespace around your designs is fine.
- one hack is to start with a smaller layout.
  create as many constraints for yourself as possible.
  limit your design space.
  once you have something you like transfer the design to a larger layout.
- file extra horizontal space with columns instead of making your ui wider
- embrace fixed widths in responsive designs
  - some elements should not scale, for example avatar photos or sidebars.
  - only assign percentage widths to elements which are meant to scale.
- do not rely on relative sizing across large and small screens
  - often times larger text needs to be scaled down on smaller screens
- do not rely on relative sizing for large and small elements
  - padding on smaller elements can be tighter than padding on larger elements.
    relative sizing makes it difficult to bring out these differences.
- avoid ambiguous whitespace
  - reduce whitespace between elements which are related to each other.
    increase whitespace between elements which are unrelated to each other.

## Designing Text

- choose a type scale
  - no need to use a modular scale
  - they recommend the following scale.

| font size |
| :-------- |
| 12px      |
| 14px      |
| 16px      |
| 18px      |
| 20px      |
| 24px      |
| 30px      |
| 36px      |
| 48px      |
| 60px      |
| 72px      |

- avoid em units
  - instead assign px or rem units

- picking a typeface
  - filter by the number of styles.
  a lot of good fonts have many possible styles and weights.
  - choose popular fonts, they're popular for a reason
  - steal from sites you like
  - choose the correct font for the content.
  some fonts are meant for headline content.
  other fonts are meant for long form content.
  you can tell because headline fonts have shorter lowercase letters and tighter letter spacing.
- keeping line length tight
  - line length can be short even when content displayed between lines needs to be wider
  - stick to `20-35em` per line and 45 to 75 characters per line
- align various sized fonts by their baseline
- lineheight
  - you can use a smaller line height for shorter lines because finding the next line is easier.
  - you can use a smaller line height for larger text because your eyes don't need to work as hard to find the next line.
- coloring links
  - when everything is a link there is no need to color it
  - instead underline the link on hover or use a slightly higher weight for the link
- aligning text
  - left align most text
  - right align numbers
  - when you center text and its too long rewrite the content
  - hyphenate justified text
- when to use letter spacing
  - as a general rule do not touch letter spacing, instead trust the typeface designer.
    but there are certain times when its useful
  - increase letter spacing for all caps text
  - decrease letter spacing for headlines

## Colors

- you need a lot of colors
various shades of each color. Colors for notifications, warnings, highlights, and subtleties.

- designing a color scheme
  - choose 8-10 shades of gray
  - choose one or two colors for primary actions.
  each color will have multiple shades.
  lighter shades can be used for backgrounds or alerts.
  darker shades can be used for text.
  - choose accent colors.
  accent colors can be used to draw attention to parts of the page or to communicate semantic states like *error* or *warning*.
- defining shades in a color palette
  - first define the middle shade, for example the background of a button.
  then define the darkest and lightest shades, for example text and the background of an alert respectively.
  find the shades between the darkest and the middle, and the lightest and the middle.
  lastly fill in the remaining gaps.

  ![example of picking color shades](/assets/example-color-shade-picking.png)

- in hsl color space you need to increase saturation as lightness gets closer to 0% or 100%

- take advantage of perceived brightness to highlight aspects of the UI
  ![perceived brightness chart](/assets/perceived-brightness-chart.png "Notice the local minima in red, then green, the blue. The local minima loosely correspond to 0 degrees, 120 degrees, and 240 degrees hue.")
  - the luminosity minimums are located at the hues 0°, 120° and 240°
  - the luminosity maximums are located at 60° offsets from the minimums. 60°, 180°, and 300°.
  - don't rotate hues too much or it will start to look like a different color

- choosing greys
  - you can control the *temperature* of greys by saturating them with color
  - blue saturation creates a cooler feeling
  - yellow or orange saturation creates a warmer feeling

### Maintaining Accessibility

- light text on a colored background
  - to make the design accessible you often need to make the background very dark
  - one way to fix this is to provide dark color text on a light color background.
  If the text color is a darker shade of the background color the overall effect is subtle.

  ![darker colored text on a lighter background](/assets/darker-color-text-on-lighter-color-background.png)
- colored text on a colored background
  - make the text accessible by rotating the hue to a lighter or brighter color
- do not only indicate things with color
  - add supporting text or icons to help people who are color blind
  - differentiate with various shades

### Playing with Light

- light comes from above
  - create elevation by adding a shadow below an element
  - create depth by adding a shadow on the top lip of an element

  ![shadows on this cabinetry show depth](/assets/depth-cabinetry-example.png)

  ![shadows on this door show elevation](/assets/elevation-door-example.png)

- using elevation to control attention
  - people pay closer attention to things that are closer to them.
  you can highlight dropdowns or modals by using larger shadows on those elements.

- using elevation to simulate interaction
  - if you can reorder a list, increase the elevation when the user grabs an element.
  the elevation makes the element feel separate from the rest of the list
  - if you can press a button decrease the elevation when the user presses the button
- combining shadows
  - use a small tight shadow to indicate the shadow cast by ambient light.
  - use a larger subtle shadow with a large blur radius to indicate the shadow case by direct light.

  ![direct vs indirect shadows](/assets/direct-and-indirect-shadow-example.png)

  - the small dark ambient light shadow indicates how close an object is to a surface.
  as an object moves away from the surface the ambient light shadow disappears.

- using color to create depth
  - lighter colors feel closer than darker colors
  - make form boxes darker
  - make buttons lighter
  - use lighter colors to draw attention to parts of the user interface
  - use darker colors to make elements sink into the background

- use overlapping to create depth
  - use offsets to make elements cross boundaries between elements
  - to create spacing between overlapping elements use an invisible border which is the same color as the background

## Finishing Touches

- use colorful borders to make elements feel more designed
- customize bullets, form inputs, and links
- use colored backgrounds
  - potentially use gradients which are no more than 30° apart
- don't overlook states wheen there is no data
  - the default state is not data, making that state pretty is welcoming to users and avoids confusion
  - don't display supporting UI if there is nothing for the user to do with it
- reduce usage of borders
  - instead use box shadows, various background colors, or extra spacing
- do not be constrained by existing design.
think outside the box.
