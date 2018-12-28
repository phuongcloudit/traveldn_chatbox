const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const bridgeSchema = new Schema({
    name: String,
    description: String,
    image: String,
    url: String,
    price: String,
    add: String,
    video: String,
    map: String
}, { collection: "bridge" });

mongoose.model("Bridge", bridgeSchema);