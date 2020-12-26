const ari_config = require('./ari.config')
const axios = require('axios')

const getInfoAsterisk = async () => {
    return await axios.get(`http://${ari_config.URL}:${ari_config.PORT}/ari/asterisk/info?api_key=${ari_config.USER}:${ari_config.PASSWORD}`)
                .then(res => res.data)
                .catch(err => console.log(err))
}

module.exports = {
    getInfoAsterisk
}