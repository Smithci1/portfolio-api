const engineers = require('../spaceX.js')

const getEngineers = (req,res) => {
    return res.send(engineers)
}
module.exports = {getEngineers}