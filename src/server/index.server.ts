import express, { Application } from "express";
import mongoose from "mongoose";
import searchRoutes from "../routes/search.routes";
import bodyParser from "body-parser";

const app: Application = express();

// Conexión a la base de datos
mongoose.connect("mongodb://127.0.0.1:27017", {
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
app.use(bodyParser.json());

// Rutas
app.use("/api", searchRoutes);

export default app;
