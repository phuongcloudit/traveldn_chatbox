const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const sukienSchema = new Schema({
    name: String,
    description: String,
    image: String,
    url: String,
}, { collection: "sukien" });

mongoose.model("Sukien", sukienSchema);