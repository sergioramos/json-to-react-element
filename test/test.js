var lab = require('lab').script();
var assert = require('assert');
var toElement = require('../');

lab.suite('test', function() {
  lab.test('test', function(done) {
    assert(true);

    done();
  });
});

module.exports.lab = lab;