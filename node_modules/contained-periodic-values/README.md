# contained-periodic-values.js
[![Travis build status](http://img.shields.io/travis/jmeas/contained-periodic-values.js.svg?style=flat)](https://travis-ci.org/jmeas/contained-periodic-values.js)
[![Code Climate](https://codeclimate.com/github/jmeas/contained-periodic-values.js/badges/gpa.svg)](https://codeclimate.com/github/jmeas/contained-periodic-values.js)
[![Test Coverage](https://codeclimate.com/github/jmeas/contained-periodic-values.js/badges/coverage.svg)](https://codeclimate.com/github/jmeas/contained-periodic-values.js)
[![Dependency Status](https://david-dm.org/jmeas/contained-periodic-values.js.svg)](https://david-dm.org/jmeas/contained-periodic-values.js) 
[![devDependency Status](https://david-dm.org/jmeas/contained-periodic-values.js/dev-status.svg)](https://david-dm.org/jmeas/contained-periodic-values.js#info=devDependencies)

Find how many values of a discrete periodic function contained in an interval.

### What are discrete periodic functions?

Periodic functions are functions that repeat. Discrete functions are functions whose values do not
connect. An example of a discrete periodic function is the function of "Wednesdays" on a calendar.
Wednesdays are discrete values along a timeline, and they repeat every 7 days.

### What might I use this library for?

Continuing the example from above, this library could be used to determine the number of Wednesdays between
two days. You could extend this to find the number of work days or week days between two days.

### Terminology

The members of a periodic function's output are the "values." A single member is a "value."

The distance that the function repeats itself along is the "period."

An interval is defined by a "start" and "end".

### API

##### `containedPeriodicValues(start, end, value, period)`

Find the number of values contained with the "start" and "end." This method works with
intervals with inclusive starts and exclusive ends. In math syntax, this would be written
as `[start, end)`.

The order that you specify the start and end does not matter.
