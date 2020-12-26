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
//get
app.get('/api/asterisk-information', require('./routers/get.ari.info.router'))
app.get('/api/get-variable-channels', require('./routers/get.ari.var_channels'))

//post
app.post('/api/post-variable-channels', require('./routers/post.ari.var_channels'))

app.listen(PORT, () => console.log(`server has been started ${PORT}`));