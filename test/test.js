var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with correct text', function(done) {
    request(app).get('/').expect('jenkins build and deploy', done);
  });
});