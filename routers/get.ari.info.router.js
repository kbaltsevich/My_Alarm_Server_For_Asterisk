module.exports = async (req, res) => {
    try {
        const {getInfoAsterisk} = await require('../ARI/ari.info')
        const info = await getInfoAsterisk()
        res.send(info)
    } catch (err) {
        console.log(err)
    }
}