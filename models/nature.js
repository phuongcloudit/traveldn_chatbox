const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const natureSchema = new Schema({
    name: String,
    description: String,
    image: String,
    url: String,
    price: String,
}, { collection: "nature" });

mongoose.model("Nature", natureSchema);