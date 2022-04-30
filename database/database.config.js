const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("database online");
    } catch (error) {
        throw new Error('Error al conectarse a la Base de Datos');
    }
}

module.exports = {
    dbConnection
}