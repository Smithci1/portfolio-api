'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    
     await queryInterface.bulkInsert('Engineers', [{
    title:'CEO/CTO',
    name: 'Elon Musk',
    age: 49,
    yearsWithsx: 19,
    about: 'Elon Reeve Musk FRS is a business magnate, industrial designer, and engineer. He is the founder, CEO, CTO, and chief designer of SpaceX',
    createdAt: new Date(), 
    updatedAt: new Date()
      },
    {
      title:'Rocket engine engineer',
      name:'Tom Mueller',
      age: 57,
      yearsWithsx: 19,
      about:'Thomas Mueller is an American rocket engineer and rocket engine designer. He was a founding employee of SpaceX.',
    createdAt: new Date(), 
    updatedAt: new Date()
    },
    {
      title:'COO',
    name:'Gwynne Shotwell',
    age: 57,
    yearsWithsx: 18,
    about:'Gwynne Shotwell is an American businesswoman and engineer. She is the president and chief operating officer of SpaceX.',
      createdAt: new Date(), 
      updatedAt: new Date()
      },
      {
        title:'Director of Space Operations',
    name:'Garret Reisman',
    age: 53,
    yearsWithsx: 10, 
    about:'Garrett Erin Reisman is an American engineer and former NASA astronaut. He was a backup crew member for Expedition 15 and joined Expedition 16 aboard the International Space Station for a short time before becoming a member of Expedition 17.',
        createdAt: new Date(), 
        updatedAt: new Date()
        },
        {
          title:'Aerospace Engineer/Astronout',
          name:'Thomas Pesquet',
          age: 43,
          yearsWithsx: 10,
          about:'Thomas Gautier Pesquet is a French aerospace engineer, pilot, and European Space"Age"ncy astronaut. Pesquet was selected by ESA as a candidate in May 2009, and he successfully completed his basic training in November 2010',
          createdAt: new Date(), 
          updatedAt: new Date()
          },
          {
            title:'Astronaut',
            name:'Doug Hurley',
            age: 54,
            yearsWithsx:5,
            about:'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and current NASA astronaut. He piloted space shuttle missions STS-127 and STS-135, the final flight of the space shuttle program.',
            createdAt: new Date(), 
            updatedAt: new Date()
            },
            {
              title:'Astronaut',
              name:'Bob Behnken',
              age:50,
              yearsWithsx:5,
              about:'Robert Louis Behnken is a NASA astronaut, engineer, and former Chief of the Astronaut Office. Behnken holds a Ph.D in mechanical engineering and the rank of colonel in the U.S. Air Force, where he served before joining NASA in 2000.',
              createdAt: new Date(), 
              updatedAt: new Date()
              },
              {
                title:'Astronaut/Aeronautical Engineer',
   name:'Soichi Noguchi',
    age: 56,
    yearsWithsx: 5,
    about:'Soichi Noguchi is a Japanese aeronautical engineer and JAXA astronaut. His first spaceflight was as a Mission Specialist aboard STS-114 on 26 July 2005 for NASA\'s first "\return to flight\" Space Shuttle mission after the Columbia disaster',
                createdAt: new Date(), 
                updatedAt: new Date()
                },
                {
                  title:'Flight Engineer',
    name:'Sergey KudSverchkov',
    age: 37,
    yearsWithsx:5,
    about:'Sergey Vladimirovich Kud-Sverchkov is a Russian cosmonaut, selected in 2010 by Roscosmos. He made his first spaceflight in 2020 aboard the International Space Station as a flight engineer for ISS Expedition 63/64',
                createdAt: new Date(), 
                updatedAt: new Date()
                }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
