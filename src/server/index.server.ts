import express, { Application } from "express";
import mongoose from "mongoose";
import searchRoutes from "../routes/search.routes";

const app: Application = express();
const PORT = process.env.PORT || 4000;

// Conexión a la base de datos
mongoose.connect("mongodb://localhost:27017", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  serverSelectionTimeoutMS: 5000,
} as mongoose.ConnectOptions);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));
db.once("open", () => {
  console.log("Conexion exitosa a MongoDB");
});

app.use(express.json());

// Rutas
app.use("/api", searchRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
export default app;
