import nearestPeriodicValue from 'nearest-periodic-value';

function containedPeriodicValues(start, end, value, period) {

  // Inclusive start; exclusive end
  if (start === end) { return 0; }

  // Flip our interval if it isn't ordered properly
  if (start > end) {
    var newEnd = start;
    start = end;
    end = newEnd;
  }

  // Make our interval have an exclusive end
  end--;
  
  var nearest = nearestPeriodicValue(start, value, period);

  // Ensure that the nearest value is in front of the start
  // of the interval
  if (nearest - start < 0) {
    nearest += period;
  }

  // If we can't even reach the first value, then it is 0
  if ((nearest - start) > (end - start)) {
    return 0;
  }

  // Otherwise, we have reached it, so we start with 1.
  // Then we add one for every full period in our interval
  else {
    return 1 + parseInt((end - nearest) / period);
  }
}

export default containedPeriodicValues;
