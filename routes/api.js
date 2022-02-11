module.exports = function (app) {
  app.get("/", (req, res) => {
    console.log("==== API / hit ====");
  })

  app.get("/trains", (req, res) => {
    console.log("==== API /trains hit ====");
  })

  app.get("/trains/:id", (req, res) => {
    const id = req.params.id;
    console.log("==== API /trains/" + id + " hit ====");
  })

  app.get("/trains/next", (req, res) => {
    console.log("==== API /trains/next hit ====");
  })
}