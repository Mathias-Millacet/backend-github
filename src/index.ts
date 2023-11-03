import app from "../src/server/index.server";

app.listen(4001, () => {
  console.log(`El servidor esta corriendo en el puerto ${4001}`);
});
