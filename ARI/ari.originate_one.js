const ari_config = require('./ari.config')
const axios = require('axios')

const user = {
    endpoint: `local/3933@prozvon-dialer`,
    extension: `ups`,
    context: `prozvon-informer`,
    priority: 1,
    timeout: -1,
    variables: {
        name_abonent: "Baltsevich",
        number: "3933",
        text_message: `Привет`,
        adress_ats: `10.17.88.1`,
        count_d: `2`,
        time_dial: `30`
    },
}

const postOriginateOne = async (obj) =>{
    return await axios.post(`http://${ari_config.URL}:${ari_config.PORT}/ari/channels?api_key=${ari_config.USER}:${ari_config.PASSWORD}`, obj)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
}

module.exports = {
    postOriginateOne,
    user
}