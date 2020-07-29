const app = require('../app.js')
const chai = require('chai')
const request = require('supertest')

var expect = chai.expect

describe('Test main app', function() {
    // START TESTS
    describe('POST /hello', function() { 
        it('should echo with sent payload', function(done) { 
          request(app).post('/hello').send('I cannot believe this is a string!').end(function(err, res) { 
            if(err)
              done(new Error(`${err.toString()}`))
            expect(res.statusCode).to.equal(200)
            expect(res.text).to.equal('I cannot believe this is a string!')
            done()
          }); 
        }); 
      }); 

      describe('POST /fakeuri', function() { 
        it('should fail with a 404', function(done) { 
          request(app).get('/fakeuri').end(function(err, res) { 
            if(err)
              done(new Error(`${err.toString()}`))
            expect(res.statusCode).to.equal(404)
            expect(res.text).to.equal('Not found!\n')
            done()
          }); 
        }); 
      }); 
      // END TESTS
});

