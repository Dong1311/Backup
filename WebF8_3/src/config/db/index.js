const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Web_Test1_Dev');

        console.log('Connect Successfully');
    } catch (error) {
        console.log('Connect Failed');
    }
}

module.exports = { connect };
