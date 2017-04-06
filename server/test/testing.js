const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

describe('Login API', function() {
    it('Should success if credential is valid', function(done) {
        chai.request('http://localhost:3000')
           .post('/api/login')
           .send({ username: 'wahyu', password: '12345' })
           .end(function (err, res) {
             res.should.have.status(200)
             done()
           })

    });
});
