const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    release_date: { type: Date },
    poster_path: { type: String },
    vote_average: { type: Number },
    countries: [{ type: String }],
    genres: [{ type: String }],
    director: { type: String },
    cast: [{ type: String }],
    description: { type: String }
  });

  const Film = mongoose.model('Film', filmSchema);

module.exports = Film;