const ari_config = require('./ari.config')
const axios = require('axios')

const postVariableChannel = async (count_channels) => {
    return await axios.post(`http://${ari_config.URL}:${ari_config.PORT}/ari/asterisk/variable?variable=COUNT_CHANNEL&value=${count_channels}&api_key=${ari_config.USER}:${ari_config.PASSWORD}`)
                .then(res => res.data)
                .catch(err => console.log(err))
}

const getVariableChannel = async () => {
    return await axios.get(`http://${ari_config.URL}:${ari_config.PORT}/ari/asterisk/variable?variable=COUNT_CHANNEL&api_key=${ari_config.USER}:${ari_config.PASSWORD}`)
                .then(res => res.data)
                .catch(err => console.log(err))
}

module.exports = {
    postVariableChannel,
    getVariableChannel
}