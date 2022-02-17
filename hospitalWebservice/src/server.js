const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const UserRoute = require("./routes/userRoutes");
const BookRoute = require("./routes/bookRoutes");
const jwt = require("jsonwebtoken");
// const create = require("./src/model/dbSetup");
// const errorlogger = require("./src/utility/errorLogger");
// const requestlogger = require(".src/utility/requestlogger");
require("./db/config");
// const routers = require("./src/routes/userRoutes");
const server = express();
// server.get("/setupDb", async (req, res, next) => {
//   try {
//     let data = await create.setupDb();
//     console.log(data);
//     res.send(data);
//   } catch (err) {
//     console.log(err);
//     res.send("Error occurred during insertion of data");
//   }
// });

// server.get("/test", async (req, res, next) => {
//   try {
//     let data = await tester();
//     console.log("--- Verification Completed ---");
//     res.send(data);
//   } catch (err) {
//     console.log(err.message);
//   }
// });
server.use(bodyParser.json());
server.use(cors());
server.use(function (req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Allow-Credentials", true);
  next();
});
server.use("/user", UserRoute);
server.use("/book", BookRoute);
// const createToken = async () => {
//   const token = await jwt.sign(
//     { _id: "620cd2440d2e29bbb7b5ad0a" },
//     "asdfghjklzxcvbnmqwertyuiopxdfgh"
//   );
//   console.log(token);
//   const userVerify = await jwt.verify(token, "asdfghjklzxcvbnmqwertyuiopxdfgh");
//   console.log(userVerify);
// };
// createToken();
// server.use(requestlogger);
// server.use(routers);
// server.use(errorlogger);
server.listen(8000);
console.log("sever listening to port 8000");

module.exports = server;
