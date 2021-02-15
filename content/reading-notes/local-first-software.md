---
description: TODO fill in a description
keywords:
date: 2020-07-26

toc: true
markup: pandoc
title: Local First Software
---

# Local First Software

- cloud apps enable collaboration but take away ownership and agency from users
  - when the cloud goes down the user cannot work or their data may be lost forever

## Motivation for Local Software

- Although cloud apps let you access data anywhere all data access must go via the server and you can only do things the server lets you do.
- you don't own the data the cloud does
- when you have data locally you can do anything you want with the data, including use it in separate programs
- can we have the best of both worlds?
  ownership of data and collaboration.

## Seven Ideals for Local First Software

- the paradigm shift in local first software is client data is the source of truth.
  normally the cloud is the source of truth.
  the cloud acts as the mediator of data modifications.
  in local first software the client data is the source of truth and the cloud is a cache for collaboration and multi device access.

### 1. No Spinners

- all data is read and written on local disk
- data synchronization happens asynchronously in the background

### 2. Your work is not trapped on one device

- you can do your work on any device
- data is synced to the cloud

### 3. Network is Optional

- because data is stored locally the user can always read and write
- data synchronization can occur over bluetooth or local wifi not necessarily the internet

### 4. Seamless Collaboration With Colleagues

- cloud apps do a tremendous job of enabling collaboration
- local first apps aim to support real time collaboration on par with the best cloud apps
- provide mechanisms for suggesting edits

### 5. Long Now

- Data access lasts beyond the lifetime of the cloud
- work continues to be available as long as you have a way of running the software, no need for third party connections.
- if we cannot access our data without third party services we may end up with a digital dark age where knowledge cannot be consumed by future generations because the technology to display it is gone

### 6. Security and Privacy by Default

- because cloud applications store all user data in one place hacks are catastrophic
- in local first data servers only hold encrypted data that cannot be read at all

### 7. User maintains Ownership and Control

- with cloud apps the service provider can lock out users
- in local first apps users own their own data

## Existing Data Storage and Sharing Models

This section basically offers a comparison of various forms of collaboration, cloud, and local software.
The main takeaway is that each piece of software fails in some way to accomplish the seven ideals of local first software.

Key: — means partially supported, ✓ means fully supported, ✗ means not supported.

| Service                   | Fast | Multi-device | Offline | Collaboration | Longevity | Privacy | User control |
| :------------------------ | :--: | :----------: | :-----: | :-----------: | :-------: | :-----: | :----------: |
| Dropbox                   |  ✓   |      —       |    —    |       ✗       |     ✓     |    —    |      ✓       |
| Google Docs               |  —   |      ✓       |    —    |       ✓       |     —     |    ✗    |      —       |
| Trello                    |  —   |      ✓       |    —    |       ✓       |     —     |    ✗    |      ✗       |
| Pinterest                 |  ✗   |      ✓       |    ✗    |       ✓       |     ✗     |    ✗    |      ✗       |
| Files + email attachments |  ✓   |      —       |    ✓    |       ✗       |     ✓     |    —    |      ✓       |
| Git+GitHub                |  ✓   |      —       |    ✓    |       —       |     ✓     |    —    |      ✓       |
| Web apps                  |  ✗   |      ✓       |    ✗    |       ✓       |     ✗     |    ✗    |      ✗       |
| Thick client              |  ✓   |      —       |    ✓    |       ✗       |     —     |    ✗    |      ✗       |
| Firebase, CloudKit, Realm |  —   |      ✓       |    ✓    |       —       |     ✗     |    ✗    |      ✗       |
| CouchDB                   |  —   |      —       |    ✓    |       ✗       |     —     |    —    |      —       |

### CRDTs

- Conflict Free Replicated Datatypes are multi user first datatypes for managing application data.
- can be used as drop in replacement for normal datastructures used while developing applications
- ink and switch built hypermerge a peer to peer JSON CRDT for building applications
- ink and switch built three applications to test the viability of CRDTs
  - trello clone
  - pixel based painting clone
  - pinboard application
- users can make slight modifications to avoid conflicts
- when conflicts do occur CRDTs are surprisingly robust
- CRDTs can provide mechanisms for time travel features
- asynchronous nature of changes can be confusing
  - what every user sees is a function of what they've accepted from other users and what they've dispatched to other users
  - there is not always a clear master branch, there is a kaleidoscope of data
- the accumulation of change history creates performance issues
  - hard to determine when everyone is connected so you have to keep character by character edits for a long time
- servers have a role to play as cloud peers which support client applications without being on the critical path

## What to do about it

> For centralized systems, there are ample examples in the field today of applications that indicate their “sync” state with a server. Decentralized systems have a whole host of interesting new opportunities to explore user interface challenges.
>
> We hope researchers will consider how to communicate online and offline states, or available and unavailable states for systems where any other user may hold a different copy of data. How should we think about connectivity when everyone is a peer? What does it mean to be “online” when we can collaborate directly with other nodes without access to the wider Internet?
>
> When every document can develop a complex version history, simply through daily operation, an acute problem arises: how do we communicate this version history to users? How should users think about versioning, share and accept changes, and understand how their documents came to be a certain way when there is no central source of truth? Today there are two mainstream models for change management: a source-code model of diffs and patches, and a Google Docs model of suggestions and comments. Are these the best we can do? How do we generalize these ideas to data formats that are not text? We are eager to see what can be discovered.
>
> While centralized systems rely heavily on access control and permissions, the same concepts do not directly apply in a local-first context. For example, any user who has a copy of some data cannot be prevented from locally modifying it; however, other users may choose whether or not to subscribe to those changes. How should users think about sharing, permissions, and feedback? If we can’t remove documents from others’ computers, what does it mean to “stop sharing” with someone?
>
> We believe that the assumption of centralization is deeply ingrained in our user experiences today, and we are only beginning to discover the consequences of changing that assumption. We hope these open questions will inspire researchers to explore what we believe is an untapped area.
>
> [@LocalfirstSoftwareYou]
