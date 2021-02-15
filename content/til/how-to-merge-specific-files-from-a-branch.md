---
description: TODO fill in a description
keywords: 
date: 2020-07-26

toc: false
markup: pandoc
title: how to merge specific files from a branch
---

# how to merge specific files from a branch

I ran into a problem while developing this website.
I am using this website as a general knowledge base and repository for writing.
There are certain files I'm comfortable publishing but there are many files that are much more private.

Lets say I have a file `fun-css-features.md`  that I want to publish.
In order to publish that feature I want to merge the file into master.
But the file is on a branch with the rest of my private writings.

Because I'm developing this site by myself I don't want to have a branch per feature or adopt a model like [git flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), the overhead is not worth the benefits.

I found the solution in [Jason Rudolph's excellent post](https://jasonrudolph.com/blog/2009/02/25/git-tip-how-to-merge-specific-files-from-another-branch/).

1. Check out the branch you want to merge changes into. In my case I want to publish files on master. `git checkout master`.
2. Checkout the file from the branch you have changes on. For example my dev branch. `git checkout dev fun-css-feature.md`
3. Commit the new files. `git commit`

