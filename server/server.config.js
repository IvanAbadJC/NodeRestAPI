const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/database.config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //DB connection
        this.connectionDB();

        //Middlewares
        this.middlewares();

        //Routes
        this.routes();
    }

    async connectionDB() {
        await dbConnection();
    }

    middlewares() {
        //Aquí podría ir una configuracion de CORS o páginas estáticas para SSR
        this.app.use( cors() )
        //Lectura y parseo del body
        this.app.use(express.json());
    }

    routes() {
        this.app.use(require('../routes/usuario.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor iniciado en puerto: ', this.port);
        });
    }


}

module.exports = Server;