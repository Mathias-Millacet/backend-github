import app from "../src/server/index.server";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });
// Definimos el puerto por el cual va a escuchar nuestro servidor
const port = process.env.PORT || 4001;
const connectionString = process.env.DB_CONNECTION || "";

// Conexión a la base de datos
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((error) => {
    console.log("Error al conectar a la base de datos: ", error);
  });

// levantando el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto ${port}`);
});
