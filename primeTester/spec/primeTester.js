describe('primeTester', function() {
  it('should return true if the number is prime', function() {
    expect(primeTester(5)).to.equal(true);
    expect(primeTester(13)).to.equal(true);
    expect(primeTester(29)).to.equal(true);
  });
  it('should return false if the number is not prime', function() {
    expect(primeTester(6)).to.equal(false);
    expect(primeTester(14)).to.equal(false);
    expect(primeTester(28)).to.equal(false);
  });  
describe('primeSieve', function() {
  it('should return of all prime numbers in a chosen range', function() {
    expect(primeSieve(2,10)).to.equal([2, 3, 5, 7]);
    expect(primeSieve(20,30)).to.equal([23,29]);
    expect(primeSieve(5,25)).to.equal([5,7,11,13,17,19,23]);
  });
})
});
