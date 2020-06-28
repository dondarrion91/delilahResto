const express = require('express');
const router = express.Router();

// controladores
const productosController = require('../controllers/productosController');
const usuariosController = require('../controllers/usuariosController');
const pedidosController = require('../controllers/pedidosController');

// middlewares
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');

module.exports = () => {

    /**
     * Productos
     */

    // lista de productos
    router.get('/productos',
        auth,productosController.getProductos
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
    router.put('/admin/:user',auth,admin,usuariosController.adminUsuario);

    /**
     * Pedidos
     */
    // crea un nuevo pedido
    router.post('/pedidos/nuevo',auth,pedidosController.nuevoPedido);

    // Obtiene todos los pedidos si el usuario es admin , sino solamente los que le pertenecen
    router.get('/pedidos',auth,pedidosController.getPedidos);

    // Obtener un pedido
    router.get('/pedidos/:id',auth,admin,pedidosController.getPedido);    

    // Modificar pedido
    router.put('/pedidos/editar/:id',auth,admin,pedidosController.modificarPedido);

    // Borrar pedido
    router.delete('/pedidos/eliminar/:id',auth,admin,pedidosController.eliminarPedido);


    return router;
}