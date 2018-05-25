describe('Contained', function() {
  describe('when there are no contained values', function() {
    beforeEach(function() {
      this.contained = containedPeriodicValues(0, 10, 12, 24);
    });

    it('should be 0', function() {
      expect(this.contained).to.equal(0);
    });
  });

  describe('when there is 1 contained value, and it is within the endpoints of the interval', function() {
    beforeEach(function() {
      this.contained = containedPeriodicValues(0, 10, 5, 10);
    });

    it('should be 1', function() {
      expect(this.contained).to.equal(1);
    });
  });

  describe('when there is 1 contained value, and it is on the start of the interval', function() {
    beforeEach(function() {
      this.contained = containedPeriodicValues(0, 10, 0, 20);
    });

    it('should be 1', function() {
      expect(this.contained).to.equal(1);
    });
  });

  describe('when there is 1 contained value, and it is on the end of the interval', function() {
    beforeEach(function() {
      this.contained = containedPeriodicValues(0, 10, 10, 20);
    });

    it('should be 0', function() {
      expect(this.contained).to.equal(0);
    });
  });

  describe('When the contained values land on the start and end', function() {
    beforeEach(function() {
      this.contained = containedPeriodicValues(0, 10, 4, 2);
    });

    it('should include only the first', function() {
      expect(this.contained).to.equal(5);
    });
  });

  describe('When several values exist within the intervals, none of them on endpoints', function() {
    describe('and the interval endpoints are swapped', function() {
      beforeEach(function() {
        this.contained = containedPeriodicValues(10, 0, 4, 5);
      });

      it('should include them all', function() {
        expect(this.contained).to.equal(2);
      });
    });

    describe('and the intervals are in order', function() {
      beforeEach(function() {
        this.contained = containedPeriodicValues(0, 10, 4, 5);
      });

      it('should include them all', function() {
        expect(this.contained).to.equal(2);
      });
    });
    
  });

  describe('When the value is behind the start', function() {
    describe('and the interval endpoints are swapped', function() {
      beforeEach(function() {
        this.contained = containedPeriodicValues(10, 0, -1, 5);
      });

      it('should still work', function() {
        expect(this.contained).to.equal(2);
      });
    });
    
    describe('and the interval endpoints are in order', function() {
      beforeEach(function() {
        this.contained = containedPeriodicValues(0, 10, -1, 5);
      });

      it('should still work', function() {
        expect(this.contained).to.equal(2);
      });
    });
  });

  describe('when the interval is of length 0', function() {
    beforeEach(function() {
      this.contained = containedPeriodicValues(0, 0, 0, 5);
    });

    it('should be 0', function() {
      expect(this.contained).to.equal(0);
    });
  });
});
