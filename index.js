const config = require("config");
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = config.get("server.port") || 5000;
const bodyParser = require("body-parser");
const path = require("path");

app.use(cors());
app.options("*", cors());
app.use(bodyParser());

app.get('/api/asterisk-information', require('./routers/get.ari.info.router'))

app.listen(PORT, () => console.log(`server has been started ${PORT}`));