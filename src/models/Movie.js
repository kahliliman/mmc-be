const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  movieId: { type: Number, required: true },
  coverImageLink: String,
  posterImageLink: String,
  title: { type: String, required: true },
  subtitle: String,
  releaseDate: Date,
  type: { type: String, required: true },
  director: String,
  imdbLink: String,
  shortDescription: String,
  trailerLink: String,
  stars: [String],
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
