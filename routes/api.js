const trains = require("../data/trains");

module.exports = function (app) {

  app.post("/trains", (req, res) => {
    const TrainID = req.body.TrainID;
    const Times = req.body.Times;

    trains[TrainID] = Times;

    res.json({success: "Train schedule was added."})
  })

  app.get("/trains/:id", (req, res) => {
    const id = req.params.id;

    if (id.length != 4) {
      res.status(400).json({error: "Invalid Train ID provided." });
    }

    if (trains[id]) {
      schedule = trains[id]
      stringResponse = "Train " + id + " arrives at " + schedule;
      res.json({success: stringResponse})
    }

    if (!trains[id]) {
      res.status(400).json({error: "Invalid Train ID provided."})
    }
  })

  app.get("/trains/next", (req, res) => {
    console.log("==== API /trains/next hit ====");
    res.json("Next train info coming soon.")
  })

  app.get("/sampledata/:toggle", (req, res) => {
    const toggle = req.params.toggle;

    if (toggle === "enable") {
      trains["EUR6"] = ["1200", "1500", "1800", "2100"];
      trains["X88B"] = ["0930", "1030", "1130"];
      trains["TX77"] = ["0100", "1300"];
      res.json({success: "Sample Data has been loaded."})
    }
    if (toggle === "disable") {
      delete trains["EUR6"];
      delete trains["X88B"];
      delete trains["TX77"];
      res.json({success: "Sample Data has been removed."})
    }
    if (toggle != "enable" && toggle != "disable") {
      res.status(400).json({error: "Invalid request."});
    }
  })
}