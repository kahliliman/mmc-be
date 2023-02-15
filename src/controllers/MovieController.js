const Movie = require("../models/Movie");

class MovieController {
  static getMovies = (req, res, next) => {
    const movies = Movie.find({});

    movies
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  static getSingleMovie = (req, res, next) => {
    const movie = Movie.find({ movieId: req.params.id });

    movie
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  static createMovie = (req, res, next) => {
    const movie = new Movie(req.body);

    movie
      .save()
      .then((result) => {
        res.send({
          message: "Success insert data",
          data: result,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  static updateMovie = (req, res, next) => {
    const filter = { movieId: req.params.id };
    const update = req.body;
    const movie = Movie.findOneAndUpdate(filter, update, { new: true });

    movie
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

module.exports = MovieController;
