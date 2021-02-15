---
description: TODO fill in a description
keywords: 
date: 2020-07-26

toc: false
markup: pandoc
title: Git from the Bottom Up
---

# Git from the Bottom Up

I started reading this but did not find it useful.
The book lists git commands very quickly, with some concepts explained and other concepts glossed over.
I was looking for an overview of how git works.
Instead I got a deep dive into arcane details which while interesting does not seem to increase my understanding very efficiently.

## Notes

- repository contains commits
- a commit is a snapshot of what the working tree looks like
- repository has a HEAD which identifies the branch or commit the current working tree stems from
- in git changes are registered in the index, then added to the working tree.
  some people call the index the *staging area*
- a commit is a snapshot of your working tree at a point in time.
the state fo the HEAD is the commit's parent
- a branch is a name for a commit
- a tag is a name for a commit.
a tag references one commit forever while a branch is a pointer to the latest commit in a *branch of development*
- HEAD refers to what is currently checked out.
if you checked out a branch the HEAD is the branch which is checked out.
if you checked out a commit the HEAD is the commit only.