describe('isSubsetOf', function() {
  it('should return the right answer', function() {
<<<<<<< HEAD
    expect([1].isSubsetOf[2,3,1]).to.equal(true);
    expect([5].isSubsetOf[2,3,1]).to.equal(false);
=======
    expect(['commit','push'].isSubsetOf(['commit','rebase','push','blame'])).to.equal(true);
   	expect(['merge','reset','reset'].isSubsetOf(['reset','merge','add','commit'])).to.equal(true);
   
  });
  it('should return the right answer', function() {
    
   	expect([{merge: 'merge'},'reset','reset'].isSubsetOf([{merge: 'merge'},'reset','merge','add','commit'])).to.equal(true);
  });
   it('should return the right answer', function() {
    
   	expect([{merge: 'merge'},'reset','reset'].isSubsetOf([{merge: 22222},'reset','merge','add','commit'])).to.equal(false);
>>>>>>> 694e90f1ecd5d5a4143bb5d21c59aadcf8b85a40
  });
});
