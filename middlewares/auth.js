const jwt = require("jsonwebtoken");

module.exports = async (req,res,next) => {

    // Trae el token desde el header del request
    const header = req.get("Authorization");

    // si no hay header instancia un error de autenticacion con un mensaje
    if(!header){
        const error = new Error('No autenticado, no hay JWT');
        error.statusCode = 401;
        res.json(error);
    }

    // filtra el token del header
    const token = header.split(' ')[1];
    let revisarToken;
    // Si el token verifica entonces pasa al middlaware siguiente sino error
    try{
        revisarToken = jwt.verify(token,process.env.SECRETKEY);             
    }catch(error){
        error.statusCode = 500;
        res.json(error);
    }

    // Instancia error en caso de no existir el token en el header
    if(!revisarToken){
        const error = new Error('No autenticado');
        error.statusCode = 401;
        res.json(error);
    }

    next(); 

};