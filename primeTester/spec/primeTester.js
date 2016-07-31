describe('primeTester', function() {
  it('should return the right answer', function() {
    expect(1).to.equal(1);
  });

  it('should return the right answer', function() {
    expect(2).to.equal(true);
  });

  it('should return the right answer', function() {
    expect(4).to.equal(false);
  });

  it('should return the right answer', function() {
    expect(2,7).to.equal([2,3,7]);
  });

  it('should return the right answer', function() {
    expect(19).to.equal(true);
  });

  it('should return the right answer', function() {
    expect(8,1).to.equal(flase);
  });

  it('should return the right answer', function() {
    expect(0).to.equal(false);
  });
});
