const Favorite = require('../models/Favorite')
const { User } = require('../models/userModel');

//POST
exports.addFavorite = async (req, res) => {
    try {
        const { movieId, title, release_date, poster_path, vote_average, genres } = req.body;
        const userId = req.user._id;

        // Проверяем, является ли переданная дата валидной
        const releaseDate = new Date(release_date);
        if (isNaN(releaseDate.getTime())) {
            return res.status(400).json({ message: 'Invalid date format for release_date' });
        }

        // Проверяем, не добавлен ли уже этот фильм в избранное
        const existingFavorite = await Favorite.findOne({ userId, movieId });
        if (existingFavorite) {
            return res.status(400).json({ message: 'Film already in favorites' });
        }

        // Создаем новый объект избранного фильма
        const favorite = new Favorite({
            userId,
            movieId,
            title,
            release_date: releaseDate,  // Сохраняем преобразованную дату
            poster_path,
            vote_average,
            genres
        });

        // Сохраняем новый объект в базу данных
        await favorite.save();

        // Обновляем данные пользователя, добавляем фильм в список избранного
        await User.findByIdAndUpdate(userId, { $push: { favorites: favorite._id } });

        // Возвращаем успешный ответ клиенту
        res.status(201).json({ message: 'Movie added to favorites', favorite });

    } catch (error) {
        // Логи для отладки
        console.error('Error adding favorite:', error);

        // Если ошибка связана с валидацией (например, из-за уникальности или неправильного типа данных)
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: 'Validation error', error: error.errors });
        }

        // Возвращаем общую ошибку сервера
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
