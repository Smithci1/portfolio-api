const express = require('express')
const spaceX = require('./spaceX')
const {getEngineers,getTeam, addengineer} = require('./controller/engineers')
const path = require('path')
const app = express()
app.use(express.static('public'))
app.set('view engine', 'pug')
app.get('/theteam',getTeam)
app.get('/spaceX', getEngineers)
app.use(express.json())
app.post('theteam',addengineer)
app.all('*', (req,res) => {
    return res.status(404)
})
app.listen(2026, () => {
    console.log('it is 2026')
})