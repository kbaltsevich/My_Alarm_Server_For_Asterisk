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

app.get('/api/asterisk-information', async (req, res) => {
    try {
        const {getInfoAsterisk} = await require('./ARI/ari.info.js')
        console.log(await getInfoAsterisk())
    } catch (err) {
        console.log(err)
    }
})

app.listen(PORT, () => console.log(`server has been started ${PORT}`));