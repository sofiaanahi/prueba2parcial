// Imports
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const path = require("path");

require("dotenv").config();
require("ejs");

//se conecta la base de datos
// Se importa la instancia de conexión a la base de datos - (debe ser después de leer las variables de entorno)
const { sequelize } = require("./database");

sequelize
  .authenticate()
  .then(() => console.log("Conexión a base de datos exitosa"))
  .catch((error) => console.log("Error al conectar a base de datos", error));

//inicializamos el puerto

const app = express();
const port = process.env.PORT || 7000;

// Middlewares
// TODO: Implementar middlewares

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use(require("./routes/reserva.routes"));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

app.use((req, res, next) => {
  return res.status(404).render("404");
});

// Starting the server
app.listen(port, () =>
  console.log(`el servidor funciona putamadre http://localhost:${port}`)
);
