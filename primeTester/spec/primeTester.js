describe('primeTester', function() {
  it('should return the right answer', function() {
    expect(primeTester(11)).to.equal(true);
  });
  it('should return the right answer', function() {
expect(primeTester(15)).to.equal(false);  
 });
  it('should return the right answer', function() {
expect(primeTester(20)).to.equal(false);  
 });
});

describe('primeSieve', function() {
  it('should return the right answer', function() {
    expect(primeSieve(5,20)).to.equal("5,7,11,13,17,19");
  });
});
