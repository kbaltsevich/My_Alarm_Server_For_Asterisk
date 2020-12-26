module.exports = async (req, res) => {
    try {
        const {postVariableChannel} = await require('../ARI/ari.variableChannels')
        const count = await postVariableChannel(req.body.count_channels)
        res.send(count)
    } catch (err) {
        console.log(err)
    }
}