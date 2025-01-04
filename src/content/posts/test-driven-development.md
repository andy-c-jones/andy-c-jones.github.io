---
title: "Test-Driven Development"
date: '2023-06-29'
author: "Andrew 'AJ' Jones"

tags: ['Extreme Programming', 'XP', 'Software Development']
categories: ['Extreme Programming']

image:
    url: '/blog-post.webp'
    alt: 'Post Thumbnail'
---


# Test-Driven Development (TDD)

[Martin Fowler](https://martinfowler.com/bliki/TestDrivenDevelopment.html) describes TDD as the following:
 - Write a test for the next bit of functionality you want to add.
 - Write the functional code until the test passes.
 - Refactor both new and old code to make it well structured.

You continue cycling through these three steps, one test at a time, building up the functionality of the system.

This cycle is known as "Red-Green-Refactor"


### Aiding high-quality design

Using TDD encourages you to think about the interface(s) to the code before implementing those interfaces. This then allows you to evolve the design as you implement it from the point of view of the user. In this case, the user is the programmer who is using the interface.

It is important to note that TDD doesn't replace design. When we test, we treat the code under test as a black box. If we don't think about the design within the black box it is easy to break other rules. For instance, you could end up putting too much in a single class and end up breaking the single responsibility principle.
By spending some time designing our code so we break up work into smaller pieces we can test drive our implementation but control the design of the end product at the same time.

For example, if we are making some code that handles file uploads, ahead of writing a test we can look at the requirements and decide that virus scanning a file and placing it in a storage location are two separate concerns so we might design 3 "components" to handle this. 

This allows you to write the individual components, starting from the File Uploader so that each component is designed from its interface.
When writing the tests for the File Upload component you will want to design the interfaces of the other two components to ensure that they are ideal for your use case. As a result, we may well create fakes or mocks for those two components when you write the File Uploader tests.

This approach to designing the interfaces and driving the implementation of predefined interfaces is called “Outside-in” or London-school TDD.

While there is no correct style I would encourage talking through problems and diagramming out the interfaces to the different actions or domain methods you need for your functionality and driving out the implementation using the outside in approach. As well as forcing you to think about design, it creates a good number of well tested units with tests around a tight scope of implementation. The downside of this can be brittle tests when trying to refactor but I find this can often be worked around by applying the Open/Closed principle or making sure that classes don’t have too many dependencies.

### Meeting requirements safely

TDD forces you to target your requirements upfront. When writing code, it is easy to get bogged down in the detail of implementation, as well as things like code quality - this is no bad thing, however it can be easy to lose sight of what you are trying to achieve. TDD protects against this - by translating each requirement to a test, or a set of tests, you are ensuring that your code will actually do what you want it to do. In the same vein, it is then easy to refactor, or add functionality, safely, once you have green tests.

### Self-documenting

A good test helps to describe the functionality of the implementing code. If we name our tests well it can help explain why certain requirements exist. This is not unique to TDD, but writing tests upfront means that you have more incentive to actually write the tests in the first place, and encourages you to write clear, concise tests that are based around requirements. Often I find the "why" behind my requirements can be captured in the tests in a way that means my implement can have less comments in it.

### TDD-first approach

Engineers will have totally valid ways of working that don’t involve TDD. While this is to be expected it isn’t particularly useful in a team that practices TDD. If only some engineers in a team are TDDing then you lose some of the benefits like all code being built in a modular testable way to begin with and having test coverage you can be confident in. While it is possible, and sometimes necessary, to apply the practice in a code base which has not been Test-driven from the beginning it is hard work and can often feel like you are fighting against the codebase. I would recommend making sure other engineers working on the codebase a following the same practice if possible.

### What TDD isn't

TDD is not writing many tests up front, and implementing them all in one go, or even in batches - it is an iterative process. If we start with writing a whole suite of tests, before starting to implement any functionality, we risk losing the benefits that TDD can bring, such as the flexibility to adapt to changing requirements, or if assumptions that were made upfront turn out to be wrong. Iterating through each requirement in the red-green-refactor cycle outlined above enables you to be more adaptive to change, or break down stories further if you realise that the scope is too large for a single story.


#### More TDD resources...

If you are interested in learning more about TDD, I recommend watching some videos from [Dave Farley on his YouTube channel "Continuous Delivery".](https://www.youtube.com/watch?v=llaUBH5oayw&list=PLwLLcwQlnXByqD3a13UPeT4SMhc3rdZ8q)