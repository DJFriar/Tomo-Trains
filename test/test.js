const supertest = require("supertest");
const should = require("should");

const server = supertest.agent("http://localhost:5600");

describe("Unit Testing", function() {
  it("should add a train schedule", function(done) {
    server
      .post("/trains")
      .send({
        "TrainID":"TEST",
        "Times":["0700", "1700"]
      })
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err,res) {
        res.status.should.equal(200);
        done();
      }
    )
  })

  it("should contain no response when two trains will not be in the station at the same time", function(done) {
    server
      .get("/trains/next")
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err,res) {
        res.status.should.equal(200);
        res.body.should.be.empty();
        done();
      }
    )
  })

  it("should find a train", function(done) {
    server
      .get("/trains/test")
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err,res) {
        res.status.should.equal(200);
        done();
      }
    )
  })

  it("should load the sample data", function(done) {
    server
      .get("/sampledata/enable")
      .expect("Content-type",/json/)
      .expect(200)
      .end(function (err,res) { 
        res.status.should.equal(200);
        done();
      }
    )
  })

  it("should find a time where two trains are in the station", function(done) {
    server
      .get("/trains/next")
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err,res) {
        res.status.should.equal(200);
        done();
      }
    )
  })

  it("should find a time today for two trains (using 1330)", function(done) {
    server
      .get("/trains/next/1330")
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err,res) {
        res.status.should.equal(200);
        res.body.should.containEql("1500");
        done();
      }
    )
  })

  it("should find a time tomorrow for two trains (using 1700)", function(done) {
    server
      .get("/trains/next/1700")
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err,res) {
        res.status.should.equal(200);
        res.body.should.containEql("0700");
        done();
      }
    )
  })

  it("should unload the sample data", function(done) {
    server
      .get("/sampledata/disable")
      .expect("Content-type",/json/)
      .expect(200)
      .end(function (err,res) { 
        res.status.should.equal(200);
        done();
      }
    )
  })

})