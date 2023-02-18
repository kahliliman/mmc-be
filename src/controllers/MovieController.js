const Movie = require("../models/Movie");

class MovieController {
  static getMovies = (req, res, next) => {
    Movie.find({ releaseDate: { $ne: null } })
      .sort({ releaseDate: 1 })
      .then((result) => {
        const queryResult = result;

        Movie.find({ releaseDate: null }).then((result) => {
          result.forEach((movie) => {
            queryResult.push(movie);
          });

          res.send(queryResult);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  static getSingleMovie = (req, res, next) => {
    Movie.find({ movieId: req.params.id })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  static createMovie = (req, res, next) => {
    Movie.find()
      .limit(1)
      .sort({ movieId: -1 })
      .then((result) => {
        const latestId = result[0].movieId;
        const defaultData = { movieId: latestId + 1, type: "movie" };
        const newData = Object.assign(req.body, defaultData);
        const movie = new Movie(newData);

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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  static updateMovie = (req, res, next) => {
    const filter = { movieId: req.params.id };
    const update = req.body;
    delete update.movieId;
    delete update.type;
    const movie = Movie.findOneAndUpdate(filter, update, { new: true });

    movie
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  static deleteMovie = (req, res, next) => {
    const filter = { movieId: req.params.id };

    Movie.findOneAndDelete(filter).then(() => {
      res.status(200).json({
        message: `Successfully delete the movie data with id ${req.params.id} `,
      });
    });
  };
}

module.exports = MovieController;
