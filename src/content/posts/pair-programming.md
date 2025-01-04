---
title: "Pair Programming"
date: '2023-10-20'
author: "Andrew 'AJ' Jones"
description: ""

tags: ['Extreme Programming', 'XP', 'Software Development']
categories: ['Extreme Programming']

image:
    url: '/images/OIG1.zQhAvqFgE7PXoGLFg6Os.jpeg'
    alt: 'two cute raccoons pair programming'
---

For me, pairing is a key practice of Extreme Programming (XP). Pair Programming is a practice where two engineers work together to implement software. When pairing we take up the roles of Driver, the person typing, and Navigator, who is observing so they can focus on the higher-level concerns like the requirements, code design etc. The Driver and Navigator should swap roles regularly.

These are what I expect to be the benefits of pairing:
- Increased code quality. By discussing the design, and the principles and standards we have in the team we should be able to improve the quality of code as its written.
- Improved understanding of product requirements and software design. Verbalising what you are doing and why you are doing it is one of the most important learning techniques. It can take an already experienced engineer to the next level and allow them to become a teacher of concepts as well as just an implementer.
- Knowledge sharing. Ideas and knowledge flow between the pair and then as the team rotates through pairs that knowledge is spread.
- Makes learning easier. Pairing allows you to learn from the verbal instruction and “doing” which work better than reading as learning techniques for a good amount of people.
- Builds redundancy into the team so that we are free to take a holiday or duvet day without fear that it will impact the team’s delivery.
- Can teach us to be more organised. To facilitate knowledge share and pair rotation, we are encouraged to use mini-kanbans, checklists, mind maps and napkin diagrams to communicate our intent and progress.

Pairing is my default technique on most programming tasks but that doesn’t mean I do it all the time. For example, when there are an odd number of people around, of course, there will be at least one person not pairing, and this is fine. Sometimes it’s good to get some time on your own to find out how much you have learnt from previous pairing sessions. Equally, in a workplace we don’t all start and finish work at the same time or go for lunch at the same time, this is all expected which means we have to have the flexibility and technique to facilitate pair rotation, swapping out one of your pair for a different team member, and for a single member of the pair to continue with the work without the other. Through good communication, driver swapping, TDD, and organisation techniques like making checklists for tasks within a story, we can make our pairs resilient to any one of the individuals leaving the pair.

I consider pairing to be a form of continuous code review and so don’t tend to enforce any further third-party code review, although depending on the risk of the change or focus on quality in a particular item of work I might seek might consider doing a code review in addition to pairing. I would recommend code reviews when programming work has not been paired on so that even when working alone you do get a feedback loop but given the feedback comes later than it would with pair programming, it often ends up resulting in rework or a feeling that going back and doing some of the recommended changes is somehow no longer worth the effort given the functional benefits of a given story might already have been met. 

While I love pairing you do need to make sure you are getting the benefits and it takes practice.

Here are a few things to watch out for when pairing to keep it constructive:
- Give your pair a little space, don’t jump on typos and syntax errors until they need help spotting them. You are there to be thinking about the problem and code quality, there is already a syntax highlighter in the IDE.
- When pairing you must remember to tell the other person when you need to take a break. It is common to need breaks at different times.
- Has your navigator gone quiet? Ask if they need a break, would like to take the keyboard or deal with any distraction they might have. We only get the benefits of pairing when both members of the pair are present physically and mentally.
- Pairing fatigue can set in if you have been doing full back-to-back working days of pairing, if you could do with some time to process what you have learnt and go at your own pace, call it out so the team knows that you could do having a pairing break.
- Not all tasks lend themselves to pairing. While work that involves design thinking, careful requirements checking or analysis/research often do, investigations or already well-thought configuration change might not. Investigations are particularly interesting because it is often a great idea to have several people going off to read, learn, and explore. It is normally not super valuable to pair by sharing a single screen and keyboard though, unless one individual has found something worth sharing with others.
- Be careful not to pair with the same person over and over again. If the same folks on a team gravitate to pair with each other rather than having diversity in your pairs then you are likely to be getting less knowledge share and might fall into the trap of creating in-team silos my mistake.

If you are considering bring pair programming into your workplace, [you might want to consider reading my reflection on change a workplace practice.](/posts/changing-workplace-practices/)
