---
date: 2020-08-11
# keywords:
#   - TODO fill in keywords
# description: TODO fill in a description
# subtitle: TODO fill in a subtitle
# images:
#   - TODO fill in images
toc: true
markup: pandoc
title: conventions used in this blog
---

# conventions used in this blog

## Inserting Google Docs

Use the following code

`<iframe width="100%" height="790px" src="https://docs.google.com/document/d/1olPcf-F53NXmWRm1EfVFhcBCsVWNnUCedoZoKTncswI/preview"></iframe>`

In order to get the link to the google doc

1. copy a link which anyone on the internet can view.
For example `https://docs.google.com/document/d/1olPcf-F53NXmWRm1EfVFhcBCsVWNnUCedoZoKTncswI/edit?usp=sharing`
2. Replace the part after the final slash (`edit?usp=sharing`) with `/preview`.
3. Embed the final link in an iframe with `width=100%` and `height=790px`.
  - The height is based on the height of one page.


## Semantic Line Feeds

All the content is written using semantic line feeds.
The idea is copied from [Gwern](https://www.gwern.net/).

> The source files are written in Pandoc Markdown [...]. The Pandoc Markdown uses a number of extensions; pipe tables are preferred for anything but the simplest tables; and I use [semantic linefeeds](https://rhodesmill.org/brandon/2012/one-sentence-per-line/) (also called [“semantic line breaks”](https://sembr.org/) or [“ventilated prose”](https://vanemden.wordpress.com/2009/01/01/ventilated-prose/)) formatting.
> [@branwenThisWebsite2010]

## Citations

The citation format is `ieee-with-url`. 
Why?
Because I read a lot of engineering papers so I find the IEEE format to be the least distracting.
The [citation styles](/metadata/citation-styles/ieee-with-url.csl) is provided by the [citation styles organization](https://citationstyles.org/).

## Append to the Top

Most index pages are written in an append to the top fashion.
Meaning more recent pages are appended above less recent pages.
I find that in general I tend to care about things which occur more recently more than things which occur further in the past.
On the web the top of the page is what is displayed first so why not make the top of the page most recent.
This is in opposition to [[[single txt file todo list]]](single-txt-file-todo-list) which appends to the end.