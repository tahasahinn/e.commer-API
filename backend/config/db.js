const mongoose = require("mongoose");

const db = () => {
  mongoose
    .connect("", {})
    .then(() => {
      console.log("mongodb connected !!!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = db;
