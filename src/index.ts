import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 8080; // default port to listen

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Welcome to my personal API! Please be kind.");
});

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
