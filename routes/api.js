const trains = require("../data/trains");

module.exports = function (app) {
  app.get("/", (req, res) => {
    console.log("==== API / hit ====");
    res.json("This endpoint is no longer in service.")
  })

  app.post("/trains", (req, res) => {
    const TrainID = req.body.TrainID;
    const Times = req.body.Times;

    console.log("==== API /trains hit ====");
    trains[TrainID] = Times;

    res.json("We are not currently accepting new train lines.")
  })

  app.get("/trains/:id", (req, res) => {
    const id = req.params.id;

    if (id.length != 4) {
      res.status(400).json({error: "Invalid Train ID provided." });
    }
    res.status(400).json({error: "Invalid Train ID provided."})
  })

  app.get("/trains/next", (req, res) => {
    console.log("==== API /trains/next hit ====");
    res.json("Next train info coming soon.")
  })


}