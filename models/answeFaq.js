const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const answerFaqSchema = new Schema({
    content: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: new Date() },
    createdBy: Schema.Types.ObjectId,
    updatedAt: { type: Date, default: new Date() },
    updatedBy: Schema.Types.ObjectId
}, { collection: "answerFaqs" });

mongoose.model("AnswerFaq", answerFaqSchema);