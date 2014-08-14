
describe('substitute', function(){
  var assert = require('assert');
  var sub = require('substitute');

  describe('object', function(){
    it('should substitute :word', function(){
      var str = sub('replace some: :s', { s: 'stuff' });
      assert('replace some: stuff' == str);
    })

    it('should return the real placeholder if property was not found', function(){
      var str = sub(':stuff', {});
      assert(':stuff' == str);
    })
  })

  describe('array', function(){
    it('should substitute :word', function(){
      var str = sub('replace some: :s', ['stuff']);
      assert('replace some: stuff' == str);
    })

    it('should return the real placeholder if property was not found', function(){
      var str = sub(':stuff', []);
      assert(':stuff' == str);
    })
  })
});
