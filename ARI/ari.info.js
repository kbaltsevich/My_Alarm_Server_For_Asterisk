const ari_config = require('./ari.config')
const config = require("config");
const URL = config.get('ari.url')
const PORT = config.get('ari.port')
const USER = config.get('ari.username')
const PASSWORD = config.get('ari.password')
const axios = require('axios')

const getInfoAsterisk = async () => {
    return await axios.get(`http://${URL}:${PORT}/ari/asterisk/info?api_key=${USER}:${PASSWORD}`)
                .then(res => res.data)
                .catch(err => console.log(err))
}

module.exports = {
    getInfoAsterisk
}