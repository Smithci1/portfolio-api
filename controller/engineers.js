const models = require('../database/models')

 const getTeam = async(req,res) => {
     const allEngineers = await models.Engineers.findAll()

     return res.send(allEngineers)
 }
  
 const getByName = async(req,res) => {
  
     const { identifier } = req.params

     const reqEngineer = await models.Engineers.findOne({
         where: {
            [models.Sequelize.Op.or]: [{id:identifier},
            {name: { [models.Sequelize.Op.like]: `%${identifier}%`}}, 
            {title: { [models.Sequelize.Op.like]: `%${identifier}%`},
        },]}
    })
    return res.send(reqEngineer)
    
    }



 const donotEnter =  (req,res) => {
     return res.status(404)
 }
 const addengineer = async (req,res) => {
     const {title, name, age, 
         yearsWithsx, about} = req.body
         
  if (!title || !name || !age || !yearsWithsx
     || !about){
         return res.sendStatus(400)
         .send('You have not presented the required fields')
     }
     const newMember = {
         title, name, about,
      age, yearsWithsx}

         await models.Engineers.push(newMember)
          return res.status(201)
          .send(newMember)
 }

 module.exports = { donotEnter, getTeam,addengineer,getByName}