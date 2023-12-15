import express from "express";
import cors from "cors";
import searchRoutes from "../routes/search.routes";

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

// Rutas
app.use("/api", searchRoutes);

export default app;
