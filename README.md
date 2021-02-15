# README

This is a proof of concept for developing my personal wiki using [linked-notes-vscode](https://github.com/lukesmurray/linked-notes-vscode), pandoc, and hugo.



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





