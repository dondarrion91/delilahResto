# delilahResto
Proyecto Acamica Delilah Resto

# Instrucciones 

1) Instalar dependencias
```
npm install
```

2) Crear variables de entrono en un archivo llamado variables.env con el siguiente contenido:
```
BD_NOMBRE=acamica
BD_USER=root
BD_PASS=
BD_HOST=localhost
BD_PORT=3306
SECRETKEY=LLAVESECRETA
```
Los valores de las variables pueden ser las que necesites segun tu configuración.

3) Crear una base de datos MySQL o mariaDB en tu servidor local con el nombre que especificaste en la variable de entrono BD_NOMBRE.

4) Iniciar el servidor 
```
npm start
```

# Especificacion de la API

Endpoints:

1) Lista de productos
```
/api/v1/productos
```

2) Obtener un producto
```
/api/v1/productos/:id
```
donde id es el primary key del usuario.

3) Agregar producto al modelo de productos
```
/api/v1/productos
```
Enviar un formdata() con los siguientes valores: nombre,precio,imagen(archivo).


3) editar producto
```
/api/v1/productos
```