const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  movieId: Number,
  coverImageLink: String,
  posterImageLink: String,
  title: String,
  subtitle: String,
  releaseDate: Date,
  type: String,
  director: String,
  imdbLink: String,
  shortDescription: String,
  trailerLink: String,
  stars: [String],
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
