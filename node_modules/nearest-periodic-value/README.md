# nearest-periodic-value.js
[![Travis build status](http://img.shields.io/travis/jmeas/nearest-periodic-value.js.svg?style=flat)](https://travis-ci.org/jmeas/nearest-periodic-value.js)
[![Code Climate](https://codeclimate.com/github/jmeas/nearest-periodic-value.js/badges/gpa.svg)](https://codeclimate.com/github/jmeas/nearest-periodic-value.js)
[![Test Coverage](https://codeclimate.com/github/jmeas/nearest-periodic-value.js/badges/coverage.svg)](https://codeclimate.com/github/jmeas/nearest-periodic-value.js)
[![Dependency Status](https://david-dm.org/jmeas/nearest-periodic-value.js.svg)](https://david-dm.org/jmeas/nearest-periodic-value.js) 
[![devDependency Status](https://david-dm.org/jmeas/nearest-periodic-value.js/dev-status.svg)](https://david-dm.org/jmeas/nearest-periodic-value.js#info=devDependencies)

Find the nearest value of a discrete periodic function, given a point.

### What are discrete periodic functions?

Periodic functions are functions that repeat. Discrete functions are functions whose values do not
connect. An example of a discrete periodic function is the function of "Wednesdays" on a calendar.
Wednesdays are discrete values along a timeline, and they repeat every 7 days.

### Terminology

The members of a periodic function's output are the "values." A single member is a "value."

The interval that the function repeats along is the "period."

A "point" is any value in the domain of the function.

### API

##### `nearestPeriodicValue(point, value, period)`

Find the nearest value to `point`. Supply a `value` from the codomain of the function, and its `period`.

### FAQ

**What if my point is equidistant between two values?**

The value in front of your point will be chosen.
