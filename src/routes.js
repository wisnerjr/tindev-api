const express = require('express');
const UserController = require('./controllers/UserController');
const LikeController = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikeController')


const routes = express.Router();

routes.get('/users', UserController.index)
routes.post('/users', UserController.create);
routes.post('/users/:devId/likes', LikeController.create);
routes.post('/users/:devId/dislikes', DislikeController.create);



module.exports = routes;