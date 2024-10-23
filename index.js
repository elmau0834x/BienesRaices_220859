import generalRoutes from "./routes/generalroutes.js";
import userRoutes from "./routes/userRoutes.js"

console.log("Hola desde Node.js, esto esta en hot reload");
//Ejemplo de activacion hot reload
// const express = require('express');
import express from "express";

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`La aplicacion esta iniciada en el puerto: ${port}`);
});

//routin
app.use('/',generalRoutes);
app.use("/user",userRoutes);
