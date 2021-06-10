const express = require("express");
const app = express();
const morgan = require("morgan");

//Settings
app.set("port", process.env.PORT || 3001);
//(Le decimos que use ese puerto si esta disponible)
app.set("json spaces", 2);
//Espaciado - formato para la respuesta json en pantalla

//Routes
app.use(require("./routes/index"));
app.use(require("./routes/movies"));

//prueba para chequear el envio
// app.get("/", (req, res) => {
//   res.json({ hola: "hola" });
// });

//Middlewares... muestra por consola lo q llega el servidor
app.use(morgan("dev"));
//entiende datos q vienen desde los formularios
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Arranca el server
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en puerto ${app.get("port")}`);
});
