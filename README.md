# README

[Live Demo](https://linked-notes-hugo.lsmurray.com/)

This is a proof of concept for developing a personal notebook using
[linked-notes-vscode](https://github.com/lukesmurray/linked-notes-vscode),
pandoc, and hugo. The goal was to make a beautiful site for sharing richly
linked notes which have been authored in markdown.
Although it was a short lived experiment here are some features I ended up implementing.

- sidenotes

![sidenotes](./static/assets/sidenotes.gif)

- bibliography

![bibliography](./static/assets/bibliography.gif)

- table of contents

![table of contents](./static/assets/table-of-contents.gif)

Any internal link can be hovered on to see a popup.
For example table of contents links can be hovered to see a specific section
and footnotes or sidenotes can be hovered to see that footnote or sidenote inline.

I ended up abandoning the experiment because getting hugo, pandoc, custom markdown
syntax, and moderately complex javascript features to work together leads to
an inherently fragile and opinionated design.
I do think the generated site is beautiful, for example the [about
page](https://linked-notes-hugo.lsmurray.com/posts/about/) and [inspirations
page](https://linked-notes-hugo.lsmurray.com/posts/inspirations/) are both
quite fun to play around on.

If anything the [css file](./themes/linked-notes/assets/css/1-main.css) may
be worth stealing.

## Changes from Custom Build

- css transforms using postcss happens outside of build
  I wrote a script `convertcss.sh` to do the conversion
- hugo does not pass any cli args to pandoc.
  Based on information from [this pr](https://github.com/gohugoio/hugo/pull/4060) on the hugo repo I added a `hugo` script and a `bin/pandoc` script to pass old command line arguments
- frontmatter is not passed to pandoc so things like TOC are set in `html.yaml` not per file
- metadata is now in the static directory
  - requires changing some paths in `html.yaml`
- all markdown files need `markup: pandoc` in their frontmatter
  - I used a regex to do the replace
  - find: `(title: .*)(\n---\n\n# )`, replace: `markup: pandoc\n$1$2`
- all `index.md` files need to be renamed to `_index.md`
  - use this script to do the rename `find content -type f -name 'index.md' -execdir mv {} _{} ";"`
  - then convert links to wikilinks and back
- the config is very straight forward

  ```toml
  # config.toml
  baseURL = "http://localhost:1313/"
  theme = "linked-notes"
  relativeURLs = "true"
  ```
- the content goes in `content` instead of `src`
- the assets go in `static/assets` instead of `src/assets`

Thats all ✨

## Theme

Current theme is super straightforward.
The theme is called `linked-notes`.
Simply renders the pandoc output.
Would be nice to eventually separate out the pandoc output from the rest of the site.





