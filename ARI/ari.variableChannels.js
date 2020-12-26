const config = require("config");
const URL = config.get('ari.url')
const PORT = config.get('ari.port')
const USER = config.get('ari.username')
const PASSWORD = config.get('ari.password')
const axios = require('axios')

const postVariableChannel = async (count_channels) => {
    return await axios.post(`http://${URL}:${PORT}/ari/asterisk/variable?variable=COUNT_CHANNELS&value=${count_channels}&api_key=${USER}:${PASSWORD}`)
                .then(res => res.data)
                .catch(err => console.log(err))
}

const getVariableChannel = async () => {
    return await axios.get(`http://${URL}:${PORT}/ari/asterisk/variable?variable=COUNT_CHANNEL&api_key=${USER}:${PASSWORD}`)
                .then(res => res.data)
                .catch(err => console.log(err))
}

module.exports = {
    postVariableChannel,
    getVariableChannel
}