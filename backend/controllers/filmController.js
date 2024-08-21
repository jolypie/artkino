const Favorite = require('../models/Favorite')
const WatchLater = require('../models/WatchLater')
const Watched = require('../models/Watched');
const { User } = require('../models/userModel');

//Favorite

//POST
exports.addFavorite = async (req, res) => {
    try {
        const { movieId, title, release_date, poster_path, vote_average, genres } = req.body;
        const userId = req.user._id;

        const releaseDate = new Date(release_date);
        if (isNaN(releaseDate.getTime())) {
            return res.status(400).json({ message: 'Invalid date format for release_date' });
        }
        const existingFavorite = await Favorite.findOne({ userId, movieId });
        if (existingFavorite) {
            return res.status(400).json({ message: 'Film already in favorites' });
        }

        const favorite = new Favorite({
            userId,
            movieId,
            title,
            release_date: releaseDate,
            poster_path,
            vote_average,
            genres
        });

        await favorite.save();

        await User.findByIdAndUpdate(userId, { $push: { favorites: favorite._id } });

        res.status(201).json({ message: 'Movie added to favorites', favorite });

    } catch (error) {
        console.error('Error adding favorite:', error);

        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Validation error', error: error.errors });
        }

        res.status(500).json({ message: 'Error adding favorite', error });
    }
};



//GET
exports.getFavorites = async (req, res) => {
    try {
        const userId = req.user._id;
        const favorites = await Favorite.find({ userId });

        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching  favorites', error });
    }
}

//DELETE /:movieId
exports.removeFavorite = async (req, res) => {
    try {
        const userId = req.user._id;
        const { movieId } = req.params;

        const favorite = await Favorite.findOneAndDelete({ userId, movieId });
        if (!favorite) {
          return res.status(404).json({ message: 'Favorite movie not found' });
        }

        await User.findByIdAndUpdate(userId, { $pull: { favorites: favorite._id } });
        res.status(200).json({ message: 'Favorite movie removed' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing favorite', error });
    }
}

//DELETE
exports.removeAllFavorites = async (req, res) => {
    try {
        const userId = req.user._id;

        await Favorite.deleteMany({ userId });
        await User.findByIdAndUpdate(userId, { $set: { favorites: [] } });
        res.status(200).json({ message: 'All favorite movies removed' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing all favorites', error });
      }
}


//WatchLater

// POST /watchlater
exports.addWatchLater = async (req, res) => {
    try {
        const { movieId, title, release_date, poster_path, vote_average, genres } = req.body;
        const userId = req.user._id;

        const releaseDate = new Date(release_date);
        if (isNaN(releaseDate.getTime())) {
            return res.status(400).json({ message: 'Invalid date format for release_date' });
        }

        const existingWatchLater = await WatchLater.findOne({ userId, movieId });
        if (existingWatchLater) {
            return res.status(400).json({ message: 'Film already in watch later list' });
        }

        const watchLater = new WatchLater({
            userId,
            movieId,
            title,
            release_date: releaseDate,
            poster_path,
            vote_average,
            genres
        });

        await watchLater.save();

        await User.findByIdAndUpdate(userId, { $push: { watchLater: watchLater._id } });

        res.status(201).json({ message: 'Movie added to watch later list', watchLater });

    } catch (error) {
        console.error('Error adding to watch later list:', error);

        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Validation error', error: error.errors });
        }

        res.status(500).json({ message: 'Error adding to watch later list', error });
    }
};




// GET /watchlater
exports.getWatchLater = async (req, res) => {
    try {
        const userId = req.user._id;
        const watchLater = await WatchLater.find({ userId });

        res.status(200).json(watchLater);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching watch later list', error });
    }
};


// DELETE /watchlater/:movieId
exports.removeWatchLater = async (req, res) => {
    try {
        const userId = req.user._id;
        const { movieId } = req.params;

        const watchLater = await WatchLater.findOneAndDelete({ userId, movieId });
        if (!watchLater) {
          return res.status(404).json({ message: 'Movie not found in watch later list' });
        }

        await User.findByIdAndUpdate(userId, { $pull: { watchLater: watchLater._id } });
        res.status(200).json({ message: 'Movie removed from watch later list' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing movie from watch later list', error });
    }
};


// DELETE /watchlater
exports.removeAllWatchLater = async (req, res) => {
    try {
        const userId = req.user._id;

        await WatchLater.deleteMany({ userId });
        await User.findByIdAndUpdate(userId, { $set: { watchLater: [] } });
        res.status(200).json({ message: 'All movies removed from watch later list' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing all movies from watch later list', error });
    }
};


//watched

// POST /watched
exports.addWatched = async (req, res) => {
    try {
        const { movieId, title, release_date, poster_path, vote_average, genres } = req.body;
        const userId = req.user._id;

        const releaseDate = new Date(release_date);
        if (isNaN(releaseDate.getTime())) {
            return res.status(400).json({ message: 'Invalid date format for release_date' });
        }

        const existingWatched = await Watched.findOne({ userId, movieId });
        if (existingWatched) {
            return res.status(400).json({ message: 'Film already in watched list' });
        }

        const watched = new Watched({
            userId,
            movieId,
            title,
            release_date: releaseDate,
            poster_path,
            vote_average,
            genres
        });

        await watched.save();

        await User.findByIdAndUpdate(userId, { $push: { watched: watched._id } });

        res.status(201).json({ message: 'Movie added to watched list', watched });

    } catch (error) {
        console.error('Error adding to watched list:', error);

        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Validation error', error: error.errors });
        }

        res.status(500).json({ message: 'Error adding to watched list', error });
    }
};


// GET /watched
exports.getWatched = async (req, res) => {
    try {
        const userId = req.user._id;
        const watched = await Watched.find({ userId });

        res.status(200).json(watched);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching watched list', error });
    }
};


// DELETE /watched/:movieId
exports.removeWatched = async (req, res) => {
    try {
        const userId = req.user._id;
        const { movieId } = req.params;

        const watched = await Watched.findOneAndDelete({ userId, movieId });
        if (!watched) {
          return res.status(404).json({ message: 'Movie not found in watched list' });
        }

        await User.findByIdAndUpdate(userId, { $pull: { watched: watched._id } });
        res.status(200).json({ message: 'Movie removed from watched list' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing movie from watched list', error });
    }
};


// DELETE /watched
exports.removeAllWatched = async (req, res) => {
    try {
        const userId = req.user._id;

        await Watched.deleteMany({ userId });
        await User.findByIdAndUpdate(userId, { $set: { watched: [] } });
        res.status(200).json({ message: 'All movies removed from watched list' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing all movies from watched list', error });
    }
};




