const db = require('../config/connection');
const { Parent, Event, Weekly } = require("../models");
const eventData = require('./eventSeeds.json');


db.once('open', async () => {

    await Event.deleteMany({});


    const event = await Event.insertMany(eventData);

    console.log("Data has been seeded")
});