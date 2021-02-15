---
date: 2020-08-07
# keywords:
#   - TODO fill in keywords
# description: TODO fill in a description
# subtitle: TODO fill in a subtitle
images: 
  - /assets/gulf-of-user-behavior-novice-to-expert.png
toc: true 
markup: pandoc
title: gulf of user behavior
---

# gulf of user behavior

There seems to be a large gulf in how programmers expect users to behave and how users actually behave.
Namely programmers seem to expect users to exhibit far more expert behavior and acquire far more expert skills than they actually do.

![Graphical depiction of programmers' expectations of user ability vs. the reality of user ability charted over time](/assets/gulf-of-user-behavior-novice-to-expert.png)

Novice Users (reality)
: Use the mouse for everything.
: Take time to find elements on the page and are unaware of common page design paradigms [^loginLocation]
: Do not know how to recover from errors without explicit instruction or feedback
: Do not know how to seek help when they fail to accomplish a task

Expert Users (expectation)
: Use keyboard shortcuts for everything
: Rapidly recover from errors
: Understand how and where to seek help and solutions


[^loginLocation]:
  An example of understanding page design paradigms is my inner monologue while finding a login button.

    - check the upper right corner for `log in` or `sign up`
    - ok no button there, maybe check the hamburger menu on the upper left?
    - no hamburger menu, but there is a avatar-ish icon which usually has user settings
    - nice found the log in

## Examples From the Real World

### Logging in is hard

During quarantine I've been helping my relatives organize their digital lives.
Because I study computer science I'm often called upon to help my relatives with technology issues.
Although I haven't recorded any statistics I would guess that about 75% of the time that my relatives have ask for help its because they cannot log into something. 
Why?
It is usually one of the following reasons, listed in decreasing order of frequency.

- They forgot their password
- They forgot their username
- They cannot find the login button on the website
- They successfully logged in but the website did not redirect them to an expected location so they think it failed
- The login form failed due to a missing field or incorrect input but they are unable to recognize the error or recover from it

If programmers universally recognized that logging onto arbitrary services is essentially an annoying time sink and obstacle for many users how would programmers change their designs?

One idea is to use the slack model for logging in.

![Slack gets rid of passwords in favor of emailed magic links](/assets/slack-login-screen.png)

Even though my relatives have trouble logging into various services, they do not have trouble getting into their email.
Accessing email and clicking on links are such common tasks that even novice users can accomplish this without getting stuck.

The primary assumption of the slack model is that email is the point of entry for all services.
Usernames can be discarded in favor of emails, and passwords can be discarded in favor of magic links.
There is some danger here that email becomes a primary attack vector, but many email services offer [two factor authentication](https://support.google.com/accounts/answer/185839?co=GENIE.Platform%3DDesktop&hl=en).

Another idea is to teach people common computer skills.
Could we automatically recognize when people are performing actions which are slow or unoptimized.
For example copying and pasting with the mouse rather than with keyboard shortcuts.

### Physical Therapy in COVID

My relative who I'll refer to as Jack is doing physical therapy over zoom during COVID.
In order to access the session Jack has to

1. log into a hospital app
2. navigate through the website, 
3. find a button which says `JOIN`
4. click the button to open a zoom physical therapy session
5. enable audio on zoom

Jack often gets stuck on the first step.

The other day I was out of the house and I asked Jack how they accessed their physical therapy session.
"Oh it was easy, I emailed the physical therapist, and they emailed me a zoom link".
Why couldn't the original programmers just email the magic link to the zoom session at a scheduled time?
The email would serve as a reminder and a means of privately accessing the session.

### Finding Ctrl-F

> About 90 per cent of computer users don't use CTRL-F to search for a word - as they don't know such a keyboard shortcut exists, a Google survey found.
> 
> The results stunned Google's Uber Tech Lead for Search Quality and User Happiness, Dan Russell.
> [@kwekOnlyOne102011]

This article from 2011 cites some pretty astounding facts about how novice most users are.
The article claims that users remain novices because "people are habitually trained by what they always do on computers and they don't go beyond that" [@kwekOnlyOne102011].
The article proposes education as a solution, and then lists 20 common keyboard shortcuts.
These lists of keyboard shortcuts may be part of the problem. 
Shortcuts need to be proposed at the moment they can be used, and proposed multiple times, not just once in a massive list which is impossible to remember.

### Silent Logout and Loud Logout

I had these two remarkably similar yet different situations occur within a week of each other recently.

My relative Jack opened their mac and they had been logged out of icloud.
Jack was trying to access their browser which does not need to use icloud, but a notification which said "sign in to icloud" popped up.
Jack closed the notification and within a second the notification popped up again.
Jack repeatedly closed the notification with increasing frustration over the next minute or so until they finally gave up and called me. [Other users report this same message essentially disabling their devices](https://discussions.apple.com/thread/6484998) which is absolutely insane.
Jack doesn't use icloud, doesn't know what icloud is, and doesn't know how to diagnose the error.
Jack is a novice and just wants to use their browser.

My other relative Jill opened their iphone the other day I found their email had stopped syncing.
Jill uses the iOS mail app to read their gmail.
We had reset Jill's gmail password the day before to something a bit more secure.
So iOS could not authorize with Jill's gmail account.
In this scenario iOS just silently failed in the background.
There was no diagnostic information displayed in the mail app or in the calendar.

What is the solution here?

Jack was getting spammed by icloud notifications when Jack does not use icloud for anything at all.
Jill silently failed to receive email for 3 days because the mail app does not have any error message when an email account is logged out.

Going forward we can display diagnostic information when it is needed, but display it in a way that it does not prevent the user from accomplishing their tasks.
Jack and Jill are both very competent people with advanced degrees and successful careers.
They are normal users and their failure to recover from errors and diagnose errors is a design issue, not a user issue.