import express from "express";
import usuarioRoutes from "./routes/usuarioRoutes.js";

const app = express();
/* app.use(express.json()) */

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