(function () {
  'use strict';
  var problem = require('../src/problem.js');
  var totalNameScores = problem.totalNameScores;

  describe('totalNameScores',  function(){
    describe('for file content', function (){
      it('should return a total of 6837803474',  function(){
        expect(totalNameScores()).toBe(6837803474);
      });
    });
  });
})();
