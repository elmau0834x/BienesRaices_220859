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

app.get("/", function (req, res) {
  res.send("Hola desde la web, en Node.js");
});

app.get("/quieneres", function (req, res) {
  res.json({
    nombre: "Mauricio Rosales Gabriel",
    carrera: "TI DSM",
    grado: 4,
    grupo: "A",
  });
});
