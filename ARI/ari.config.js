const config = require("config");
const URL = config.get('ari.url')
const PORT = config.get('ari.port')
const USER = config.get('ari.username')
const PASSWORD = config.get('ari.password')

module.exports = {
    URL,
    PORT,
    USER,
    PASSWORD
}