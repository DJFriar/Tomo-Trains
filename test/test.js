const supertest = require("supertest");
const should = require("should");

const server = supertest.agent("http://localhost:5600");

describe("Unit Testing", () => {
  it("should add a train schedule", () => {
    server
      .post("/trains")
      .send({
        "TrainID":"TEST",
        "Times":["700", "1700"]
      })
      .expect("Content-type",/json/)
      .expect(200)
      .end((err,res) => {
        res.status.should.equal(200);
        res.body.error.should.equal(false);
        done();
      }
    )
  })

  it("should find a train", () => {
    server
      .get("/trains/TEST")
      .expect("Content-type",/json/)
      .expect(200)
      .end((err,res) => {
        res.status.should.equal(200);
        res.body.error.should.equal(false);
        done();
      }
    )
  })
})