const express = require("express");
const next = require("next");
const cors = require("cors");
const mongoose = require("mongoose");

// const path = require("path");
// require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

// port
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

// handle requests
const handle = app.getRequestHandler();

// Mongoose
const uri = process.env.ATLAS_URI;
console.warn("-----");
console.log(uri);
uri ? console.log(uri) : console.log("uri could not be found.");
console.warn("-----");
const connection = mongoose.connection;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Routes

// Server
app
  .prepare()
  .then(() => {
    // all the server code is here
    const server = express();

    // CORS and parse JSON
    server.use(cors());
    server.use(express.json());

    // use routes
    // server.use("/exercises", exercisesRouter);
    // server.use("/users", usersRouter);

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log("Server started on port " + PORT);
    });
  })
  .catch((ex) => {
    console.log(ex.stack);
    process.exit(1);
  });
