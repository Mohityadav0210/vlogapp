const express = require("express");
const mongoose = require("mongoose");
// const ENV = require("../environment.js");

main()
  .then(() => {
    console.log("mongoose is working");
  })
  .catch((err) => console.log(err));

async function main() {
  // CONNECTING MONGOOSE TO  OUR MONGODB DATABASE
  await mongoose.connect(
    "mongodb+srv://mohity38366:Password%40Mongodb@cluster0.fh4niza.mongodb.net/users"
  );
}