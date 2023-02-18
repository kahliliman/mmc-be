const express = require("express");
const Router = express.Router;
const MovieController = require("../controllers/MovieController");
const AuthController = require("../controllers/AuthController");
const ROUTES = require("./routes");
const routes = Router();

routes.get(ROUTES.GET_ALL_MOVIE, MovieController.getMovies);
routes.get(ROUTES.GET_SINGLE_MOVIE, MovieController.getSingleMovie);
routes.post(
  ROUTES.CREATE_MOVIE,
  AuthController.authenticateToken,
  MovieController.createMovie
);
routes.patch(
  ROUTES.UPDATE_MOVIE,
  AuthController.authenticateToken,
  MovieController.updateMovie
);
routes.delete(
  ROUTES.DELETE_MOVIE,
  AuthController.authenticateToken,
  MovieController.deleteMovie
);

// routes.get(ROUTES.GET_ALL_SERIES, SeriesController.getSeries);
// routes.get(ROUTES.GET_SINGLE_SERIES, SeriesController.getSingleSeries);
// routes.post(ROUTES.CREATE_SERIES, SeriesController.createSeries);
// routes.patch(ROUTES.UPDATE_SERIES, SeriesController.updateSeries);

module.exports = routes;
