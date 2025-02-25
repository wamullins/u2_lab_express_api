const { Schema } = require("mongoose");

const movieSchema = new Schema(
    {
        title: { type: String, required: true },
        runtime: { type: Number, required: true },
        rating: { type: String, required: true },
        releaseYear: { type: Number, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = movieSchema;
