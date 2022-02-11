const supertest = require("supertest");
const should = require("should");

const server = supertest.agent("http://localhost:5600");

describe("Unit Testing", function() {
  it("should add a train schedule", function(done) {
    server
      .post("/trains")
      .send({
        "TrainID":"TEST",
        "Times":["700", "1700"]
      })
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err,res) {
        res.status.should.equal(200);
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

  it("should find a time where two trains are in the station", function(done) {
    server
      .get("/trains/next")
      .expect("Content-type",/json/)
      .expect(200)
      .end(function(err,res) {
        res.status.should.equal(200);
        done();
      })
  })

})