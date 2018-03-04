try-these(function...)
======================

[![Build Status](https://travis-ci.org/ramumb/try-these.svg?branch=master)](https://travis-ci.org/ramumb/try-these)
[![Coverage Status](https://coveralls.io/repos/github/ramumb/try-these/badge.svg?branch=master)](https://coveralls.io/github/ramumb/try-these?branch=master)

This is a port of the [PrototypeJS](http://prototypejs.org/) method `Try.these`.
It accepts an arbitrary number of functions and returns the result of the first
one that doesn't throw an error.  `try-these` provides a simple idiom for trying
out blocks of code in sequence.  Such a sequence of attempts usually represents
a downgrading approach to obtaining a given feature.

## Installation

  `npm install try-these`

## Usage

    var tryThese = require('try-these');

    var XHR = tryThese(
        function() { return new XMLHttpRequest() },
        function() { return new ActiveXObject('Msxml2.XMLHTTP') },
        function() { return new ActiveXObject('Microsoft.XMLHTTP') }
    ) || false;

  In the above example, we want to get an `XMLHttpRequest` object.
  
  `try-these` will try several ways in sequence, from the best (and,
  theoretically, most widespread) one to the oldest and rarest way, returning
  the result of the first successful function.
  
  If none of the blocks succeeded, `try-these` will return `undefined`, which
  will cause the `XHR` variable in the example above to return `false`, provided
  as a fallback result value.

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding
style. Add unit tests for any new or changed functionality. Lint and test your
code.  See the [CONTRIBUTING](CONTRIBUTING.md) file for more detailed information.
