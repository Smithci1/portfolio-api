const engineers = require('../spaceX.js')

const getEngineers = (req,res) => {
    return res.render('index')
}
const getTeam = (req,res) => {
 const team = req.params.name
    return res.render('theteam', {team,engineers}) 
}

const donotEnter =  (req,res) => {
    return res.status(404)
}
const addengineer = (req,res) => {
    const {title, name, age, 
        yearsWithsx, about} = req.body
 if (!title || !name || !age || !yearsWithsx
    || !about){
        return res.sendStatus(400)
        .send('You have not presented the required fields')
    }
    const recentlyAdded = {
        title, name, about,
     age, yearsWithsx}
        engineers.push(recentlyAdded)
         return res.status(201)
         .send(recentlyAdded)
}

module.exports = {getEngineers, donotEnter, getTeam,addengineer }