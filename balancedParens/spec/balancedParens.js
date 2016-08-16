describe('balancedParens', function() {
  it('should return the right answer', function() {
    expect(1).to.equal(1);
    expect(balancedParens('(')).to.equal(false);
    expect(balancedParens('()')).to.equal(true);
    expect(balancedParens(')(')).to.equal(false);
    expect(balancedParens('(())')).to.equal(true);
    expect(balancedParens('[](){}')).to.equal(true);
    expect(balancedParens('[({})]')).to.equal(true);
    expect(balancedParens('[(]{)}')).to.equal(false);
    expect(balancedParens(' var wow  = { yo: thisIsAwesome() }')).to.equal(true);
    expect(balancedParens(' var hubble = function() { telescopes.awesome();')).to.equal(false);
  });
});
