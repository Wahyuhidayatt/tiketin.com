const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

describe('Login testing', function() {
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
describe('testing POST transaction ', function() {
  it('Harus berhasil masuk ke database', function(done) {
    chai.request('http://localhost:3000')
    .post('/api/transaction')
    .send({ username: 'wahyu', password: '12345' })
    .end(function (err, res) {
      res.should.have.status(200)
      done()
    })
  });
});
