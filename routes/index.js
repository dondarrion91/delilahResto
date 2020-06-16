const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

module.exports = () => {

    /**
     * Productos
     */

    // lista de productos
    router.get('/productos',productosController.getProductos);

    // Agregar producto
    router.post('/productos',productosController.agregarProducto);

    // Modificar Producto
    router.put('/productos/:id',productosController.modificarProducto);

    // Borrar Producto
    router.delete('/productos/:id',productosController.eliminarProductos);


    return router;
}