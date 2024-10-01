const mongoose = require('mongoose');

const connectDatabase = ()=>{
    mongoose.connect(process.env.MONGODB_URI).then(con=>{
        console.log(`Mongodb is connected to the host: ${con.connection.host}`)
    }).catch((err)=>{
        console.log(err);
})
}

module.exports = connectDatabase;