//TODO: Archivo de configuracion basico

//Modulos
const path = require("path"); //resuelve problemas del / en otros SO
const express = require("express");
const session = require("express-session");

//Inicializadores
const app = express();

//Configuraciones
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Middleware (procesan algo antes de que lleguen a las rutas)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//configuraciond e las sesiones
app.use(
  session({
    secret: "packman", //cada sesion se guarda de manera unica
    resave: false, //evitar que se vuelva a guardar
    saveUninitialized: false //evitar que sea inicializado
  })
);

//Rutas
app.use(require("./routes/rutas"));

//Exportar modulo
module.exports = app;
