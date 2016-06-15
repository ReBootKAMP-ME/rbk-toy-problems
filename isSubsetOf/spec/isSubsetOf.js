describe('isSubsetOf', function() {
  it('should return true for a Subset of primitives', function() {
	    var a = [1,2]
	    var b = ['a', 'b']
	    var c = [true]
	    var testArray = [1, 2, 'a', 'b', true]
	    var test1 = a.isSubsetOf(testArray)
	    var test2 = b.isSubsetOf(testArray)
	    var test3 = c.isSubsetOf(testArray) 
	    expect(test1).to.equal(true);
	    expect(test2).to.equal(true);
	    expect(test3).to.equal(true);
  });
    it('should disregard duplicates in the set', function() {
	    var a = [1, 2, 2]
	    var testArray = [1, 2, 'a', 'b', true]
	    var test1 = a.isSubsetOf(testArray)
	    expect(test1).to.equal(true);
  });

    it('should return true for a Subset or non-primitives i.e. Objects and Arrays', function() {
	    var a = [{a:1}, [1,2], [{a:[1]}]]
	    var testArray = [1, 2, 'a', 'b', {a:1}, [1,2], [{a:[1]}]]
	    var test1 = a.isSubsetOf(testArray)
	    expect(test1).to.equal(true);
  });

});
