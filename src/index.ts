import app from "../src/server/index.server";

const PORT = 4001;

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
