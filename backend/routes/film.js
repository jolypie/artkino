const express = require('express');

const { 
    addFavorite, 
    getFavorites, 
    removeFavorite, 
    removeAllFavorites 
  } = require('../controllers/filmController');

const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/favorites', authMiddleware, addFavorite);
router.get('/favorites', authMiddleware, getFavorites);
router.delete('/favorites/:movieId', authMiddleware, removeFavorite);
router.delete('/favorites', authMiddleware, removeAllFavorites);

module.exports = router;