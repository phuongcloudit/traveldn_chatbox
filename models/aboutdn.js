const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const aboutdnSchema = new Schema({
    name: String,
    description: String,
    image: String,
    url: String,
}, { collection: "aboutdn" });

mongoose.model("Aboutdn", aboutdnSchema);