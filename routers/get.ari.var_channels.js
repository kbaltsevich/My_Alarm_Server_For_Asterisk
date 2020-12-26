module.exports = async (req, res) => {
    try {
        const {getVariableChannel} = await require('../ARI/ari.variableChannels')
        const count = await getVariableChannel()
        res.send(count)
    } catch (err) {
        console.log(err)
    }
}