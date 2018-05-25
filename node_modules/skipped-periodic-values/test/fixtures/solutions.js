global.fixtures = global.fixtures || {};

// All fixtures have period = 5; start = 0

// The arrays provide our solutions. The index of the array is
// how far ahead we've gone. The key of the array is the number of
// skipped values. The diagrams above the arrays show the timelines.

// The value=0 and value=5 case are interesting. Two facts make it interesting:
// 1. The algorithm is inclusive
// 2. We start on a value that does not contribute to our distance.
// Accordingly, a distance of 0 means that we haven't skipped anything. But when
// add 1, we have actually skipped ahead two (the value itself, which doesn't count,
// and the next square).

// Value = 0
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 ...
// _ 1 2 3 4 _ 5 6 7 8 __ 9  10 11 12 __ 13 ...
global.fixtures.zero = [
// +0, 1, 2, 3
    0, 1, 1, 1,
// +4, 5, 6, 7...
    2, 2, 2, 2,
    3, 3, 3, 3,
    4, 4, 4, 4
  ];

// Value = 1
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 ...
// 0 _ 1 2 3 4 _ 6 6 7 8  __ 9  10 11 12 __ ...
global.fixtures.one = [
// +0, 1, 2, 3
    0, 1, 1, 1,
// +4, 5, 6, 7...
    1, 2, 2, 2,
    2, 3, 3, 3,
    3, 4, 4, 4,
    4, 5, 5, 5
  ];

// Value = 2
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 ...
// 0 1 _ 2 3 4 5 _ 6 7 8  9  __ 10 11 12 13 ...
global.fixtures.two = [
// +0, 1, 2, 3
    0, 0, 1, 1,
// +4, 5, 6, 7...
    1, 1, 2, 2,
    2, 2, 3, 3,
    3, 3, 4, 4,
    4, 4, 5, 5
  ];

// Value = 3
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 ...
// 0 1 2 _ 3 4 5 6 _ 7 8  9  10 __ 11 12 13 ...
global.fixtures.three = [
// +0, 1, 2, 3
    0, 0, 0, 1,
// +4, 5, 6, 7...
    1, 1, 1, 2,
    2, 2, 2, 3,
    3, 3, 3, 4,
    4, 4, 4, 5
  ];


// Value = 4
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 ...
// 0 1 2 3 _ 4 5 6 7 _ 8  9  10 11 __ 12 13 ...
global.fixtures.four = [
// +0, 1, 2, 3
    0, 0, 0, 0,
// +4, 5, 6, 7...
    1, 1, 1, 1,
    2, 2, 2, 2,
    3, 3, 3, 3,
    4, 4, 4, 4
  ];

// Value = 5
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 ...
// _ 1 2 3 4 _ 5 6 7 8 __ 9  10 11 12 __ 13 ...
global.fixtures.five = [
// +0, 1, 2, 3
    0, 1, 1, 1,
// +4, 5, 6, 7...
    2, 2, 2, 2,
    3, 3, 3, 3,
    4, 4, 4, 4
  ];
