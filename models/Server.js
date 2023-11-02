const express = require('express');
const Connexion = require('../DB/database');
const cors = require('cors');

class Server{


constructor(){

    this.app = express();
    this.port = process.env.PORT;

   
    this.middlewares();
    this.path = {
        userJWT: '/api/userJWT'
    }

    this.routes()

    this.mongoDbConexion();


}



async mongoDbConexion(){
    await Connexion();
}


routes(){

        this.app.use(this.path.userJWT, require('../routes/userJWT.routes'));
}


middlewares(){


    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:false}));
    this.app.use(cors());

}





listen(){

    this.app.listen(this.port, ()=>{
        console.log(`Server running in port: ${this.port}`);
    })
}














};

module.exports = Server;