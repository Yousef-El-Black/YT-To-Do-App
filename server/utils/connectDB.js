const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://yousefelblackdev:y4EfFRr0SVJCjYzb@cluster0.hf4bvgq.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("DB Connected!");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
