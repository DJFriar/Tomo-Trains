const express = require("express");

// CONFIGURATION
const app = express();
const PORT = 5600;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
require("./routes/api")(app);

// LISTENER
app.listen(PORT, () => {
  console.log(
    "=== Listening on port %s.",
    PORT,
    PORT
  )
});