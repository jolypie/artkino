const express = require('express');

const { 
    addFavorite, 
    getFavorites, 
    removeFavorite, 
    removeAllFavorites
  } = require('../controllers/filmController');
  

const {
  addWatchLater,
  getWatchLater,
  removeWatchLater,
  removeAllWatchLater
} = require('../controllers/filmController');

const {
  addWatched,
  getWatched,
  removeWatched,
  removeAllWatched
} = require('../controllers/filmController');

const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/favorites', authMiddleware, addFavorite);
router.get('/favorites', authMiddleware, getFavorites);
router.delete('/favorites/:movieId', authMiddleware, removeFavorite);
router.delete('/favorites', authMiddleware, removeAllFavorites);

router.post('/watchlater', authMiddleware, addWatchLater);
router.get('/watchlater', authMiddleware, getWatchLater);
router.delete('/watchlater/:movieId', authMiddleware, removeWatchLater);
router.delete('/watchlater', authMiddleware, removeAllWatchLater);

router.post('/watched', authMiddleware, addWatched);
router.get('/watched', authMiddleware, getWatched);
router.delete('/watched/:movieId', authMiddleware, removeWatched);
router.delete('/watched', authMiddleware, removeAllWatched);

module.exports = router;