const mongoose = require('mongoose');

const WatchedSchema  = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    movieId: { type: String, required: true },
    title: { type: String, required: true },
    release_date: { type: Date },
    poster_path: { type: String },
    vote_average: { type: Number },
    genres: [{ type: String }]
  });

  const Watched = mongoose.model('Watched', WatchedSchema);

module.exports = Watched ;