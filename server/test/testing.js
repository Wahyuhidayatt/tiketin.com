const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

describe('testing', function() {
  it('Should success if credential is valid', function(done) {
    chai.request('http://localhost:3000')
    .post('/api/login')
    .send({ username: 'wahyu', password: '12345' })
    .end(function (err, res) {
      res.should.have.status(200)
      done()
    })
  });
  it('testing register', function(done) {
    chai.request('http://localhost:3000')
    .post('/api/register')
    .send({username : "wahyu"})
    .end(function (err, res) {
      // res.should.have.status(200)
      res.should.have.be.a('object')
      // res.body.username.should.be.equal.to("wahyu")
      done()
    })
  });
  it('testing method GET user', function(done) {
    chai.request('http://localhost:3000')
    .get('/api/user')
    .end(function (err, res) {
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      res.body[0].should.have.property('username');
      res.body[0].should.have.property('email');
      res.body[0].should.have.property('password');
      done()
    })
  });
  it('testing methohd POST transaction', function(done) {
    let transaction = {

    }
    chai.request('http://localhost:3000')
    .post('/api/transaction')
    .end(function (err, res) {
      res.should.have.status(200)
      res.should.be.json;
      res.body.should.be.a('object');
      done()
    })
  });
  it('testing method GET user', function(done) {
    chai.request('http://localhost:3000')
    .get('/api/transaction')
    .end(function (err, res) {
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('array');
      res.body[0].should.have.property('userId');
      res.body[0].should.have.property('tanggalPemesanan');
      res.body[0].should.have.property('tickets');
      done()
    })
  });
});
