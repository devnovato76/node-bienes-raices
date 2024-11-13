import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import db from "./config/db.js";

const app = express();
/* app.use(express.json()) */

// Habilitar lectura de datos de formularios 
app.use(express.urlencoded({ extended: true })); 
// Habilitar lectura de Json
app.use(express.json());

//Conexion a la base de datos
try {
    await db.authenticate();
    console.log('Conexión Correcta a la Base de datos');
     db.sync();
} catch (error) {
    console.log(error);
}

//Habilitar Pug
app.set('view engine', 'pug');
app.set('views', './views');

//Carpeta Publica
app.use(express.static('public'));

//Routing
app.use('/auth', usuarioRoutes);

const port = 3000;


app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`);
});