const express = require("express");

// node js file system

const fs = require("fs");

fs.readFile("./text.txt", (erro, data) => {
  if (erro) {
    console.log(erro);
    return;
  }
  console.log(data.toString());
});
