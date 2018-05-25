describe('Skipped; period = 5, start=0', function() {
  beforeEach(function() {
    this.period = 5;
    this.start = 0;
  });

  describe('value = 0', function() {
    beforeEach(function() {
      this.val = 0;
    });
    _.each(fixtures.zero, function(solution, distance) {
      it('should compute the correct solution for ' + distance + '.', function() {
        expect(skippedPeriodicValues(this.start, distance, this.val, this.period))
          .to.equal(solution);
      });
    }, this);
  });

  describe('value = 1', function() {
    beforeEach(function() {
      this.val = 1;
    });
    _.each(fixtures.one, function(solution, distance) {
      it('should compute the correct solution for ' + distance + '.', function() {
        expect(skippedPeriodicValues(this.start, distance, this.val, this.period))
          .to.equal(solution);
      });
    }, this);
  });

  describe('value = 2', function() {
    beforeEach(function() {
      this.val = 2;
    });
    _.each(fixtures.two, function(solution, distance) {
      it('should compute the correct solution for ' + distance + '.', function() {
        expect(skippedPeriodicValues(this.start, distance, this.val, this.period))
          .to.equal(solution);
      });
    }, this);
  });

  describe('value = 3', function() {
    beforeEach(function() {
      this.val = 3;
    });
    _.each(fixtures.three, function(solution, distance) {
      it('should compute the correct solution for ' + distance + '.', function() {
        expect(skippedPeriodicValues(this.start, distance, this.val, this.period))
          .to.equal(solution);
      });
    }, this);
  });

  describe('value = 4', function() {
    beforeEach(function() {
      this.val = 4;
    });
    _.each(fixtures.four, function(solution, distance) {
      it('should compute the correct solution for ' + distance + '.', function() {
        expect(skippedPeriodicValues(this.start, distance, this.val, this.period))
          .to.equal(solution);
      });
    }, this);
  });

  describe('value = 5', function() {
    beforeEach(function() {
      this.val = 5;
    });
    _.each(fixtures.five, function(solution, distance) {
      it('should compute the correct solution for ' + distance + '.', function() {
        expect(skippedPeriodicValues(this.start, distance, this.val, this.period))
          .to.equal(solution);
      });
    }, this);
  });
});
