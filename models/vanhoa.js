const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const vanhoaSchema = new Schema({
    name: String,
    description: String,
    image: String,
    url: String,
    price: String,
    add: String,
    video: String,
    map: String,
}, { collection: "vanhoa" });

mongoose.model("Vanhoa", vanhoaSchema);