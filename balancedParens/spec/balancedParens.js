describe('balancedParens', function() {
  it('should return the right answer', function() {
    expect(balancedParens('(')).to.equal(false);
  });
   it('should return the right answer', function() {
    expect(balancedParens('()')).to.equal(true);
  });
   it('should return the right answer', function() {
    expect(balancedParens(')(')).to.equal(false);
  });
   it('should return the right answer', function() {
    expect(balancedParens('(())')).to.equal(true);
  });
    it('should return the right answer', function() {
    expect( balancedParens('[](){}')).to.equal(true);
  });
     it('should return the right answer', function() {
    expect(balancedParens('[({})]')).to.equal(true);
  });
      it('should return the right answer', function() {
    expect(balancedParens('[(]{)}')).to.equal(false);
  });
 
  
});
