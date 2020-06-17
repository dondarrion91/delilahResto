const express = require('express');
const router = express.Router();

// controladores
const productosController = require('../controllers/productosController');
const usuariosController = require('../controllers/usuariosController');

// middlewares
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');

module.exports = () => {

    /**
     * Productos
     */

    // lista de productos
    router.get('/productos',
        auth,admin,productosController.getProductos
    );

    // Obtener un producto
    router.get('/productos/:id',auth,admin,productosController.getProducto);

    // Agregar producto
    router.post('/productos',auth,admin,productosController.agregarProducto);

    // Modificar Producto
    router.put('/productos/:id',auth,admin,productosController.modificarProducto);

    // Borrar Producto
    router.delete('/productos/:id',auth,admin,productosController.eliminarProductos);

    /**
     * Usuarios
     */
    // registrar
    router.post('/register',usuariosController.registrarUsuario);
    //login
    router.post('/login',usuariosController.loginUsuario);
    // hacer admin
    router.put('/admin/:user',auth,usuariosController.adminUsuario);


    return router;
}