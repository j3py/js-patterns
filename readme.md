js-patterns
=========================

This is an NPM package of example code from [Learning JavaScript Design Patterns by Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

Because the package is still in it's infancy, I have not made it available publicly via NPM, but you can clone the repo and use it locally (see "Running the things" below).

The Project
------------

All the things:
- Index contains an ES6 class which on instantiation (importing the module) has methods which are the examples from Osmani's book.
- The idea is that as I go through the book I will update this class with new methods.
- I intend to create additional classes to organize the examples so they can be imported as smaller, more organized objects.
- Each method that I add will also have tests written using Jest (which eventually will be separated out into a test folder).

Running the things:
- tests: ```npm test```
- import the module after cloning the repo:
``` cd <repo root>
    npm link
    cd <your project to import into>
    npm link js-patterns ```
