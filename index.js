const express = require("express");
const path = require("path");
const flightsRoutes = require("./routes/flights.routes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use("/api", flightsRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
