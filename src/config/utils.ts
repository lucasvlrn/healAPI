import express from "express";
import helmet from "helmet";
const app = express();
const router = require("./router");
const cors = require("cors");

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(router);

module.exports = app;
