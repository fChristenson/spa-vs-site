# SPA vs website 

## What we will cover

- When do we build a SPA?
- When do we build a website?
- How to think about the tradeoffs

## Notes

SPA's are quickly becoming an industry standard.
However it is important to understand when we are better off with a simple website.

Sometimes all we need is a static website.
Sometimes we need to add some dynamic information to our website with html templates.
Sometimes we want to enrich our website with Javascript components.
Sometimes, but only sometimes, do we want to build an SPA.


## The static website

The fully static site is by far the simplest.
There is no dynamic content.
No need to change the information on the page between user visits.

Perfect use cases for this options are:

* A blog
* A event website
* A wiki website
* An image gallery

## Html templating (server side rendering)

Sometimes we can't show the same information to every user.
When this happens we need to consider if we can use the same html and just update the information on the page.

Perfect use cases for this options are:

* A web shop
* A learning platform
* A video streaming platform

## Website with Javascript components

An often overlooked option is to use a static website with Javascript components.
This option is what used to be the norm before SPA's became popular.

This is a perfect option for websites that mostly serves static content but has components that are too complex to build using only html and css.

Remember that you don't have to use vanilla Javascript to make these components.
React even tells you that this option is what it was designed for.

> React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. - [1]

This option is perfect for all websites that need to enrich the experience but do not need to become a full SPA.

## SPA

The full SPA is the last option we want to consider.
The SPA gives us a lot of power over our user experience.
This power comes at the expense of added complexity and performance costs.

Perfect use cases for this option are:

* A email client
* A analytics platform
* A online IDE

## References

[1] https://reactjs.org/docs/getting-started.html
