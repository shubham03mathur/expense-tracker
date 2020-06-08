const moogose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = moogose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
    } catch (err) {
        console.log("Couldn't Connect MongoDB "+ err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
