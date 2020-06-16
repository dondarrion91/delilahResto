// TabladeProductos
const Productos = require('../models/Productos');
const shortid = require('shortid');

// lista de productos
exports.getProductos = async(req,res) => {
    try{
        const productos = await Productos.findAll();
        res.json(productos);
    }catch(error){
        console.log(error);
        res.status(404).json({
            message: "Error"
        });
    }    
}

// agregar producto
exports.agregarProducto = async (req,res) => {
    
    try{
        const {nombre,precio} = req.body;    
        const productos = await Productos.create({
            id: shortid.generate(),
            nombre,
            precio
        });
    
        res.json({
            message: "added product"
        });
    }catch(error){
        
        if(error.name === "SequelizeUniqueConstraintError"){
            if(error.errors[0].type === "unique violation"){
                res.status(500).json({
                    message: "Producto Repetido"
                });
            }            
        }else{
            res.status(500).json({
                message: "Error"
            });
        }
                
    }    

}

// modificar productos
exports.modificarProducto = async (req,res) => {
    try{
        const {nombre,precio} = req.body;

        // obtengo el objeto de la bbdd
        await Productos.update(
            {
                nombre,
                precio
            },
            {where:{
                id: req.params.id
            }}
        );
                
        res.json({
            message: "Producto editado"
        });
    }catch(error){
        if(error.name === "SequelizeUniqueConstraintError"){
            if(error.errors[0].type === "unique violation"){
                res.status(500).json({
                    message: "Producto Repetido"
                });
            }            
        }else{
            res.status(500).json({
                message: "Error"
            });
        }
    }    
    
}

// Eliminar Productos
exports.eliminarProductos = async (req,res,next) => {
    try{
        const producto = await Productos.destroy({
            where: {
                id: req.params.id
            }
        });

        if(!producto){
            res.status(404).json({
                message: "Producto no encontrado"
            });  
            next();
        }

        res.json({            
            message: "Producto eliminado"
        });
    }catch(error){
        res.status(500).json({
            message: "Error"
        });          
    }
} 