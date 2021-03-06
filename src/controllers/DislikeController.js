const axios = require('axios');
const User = require('../models/User');

module.exports = {

 async create(req, res) {
    const { userId } = req.params;
    const { likeableUser } = req.headers

    const loggedDev = await User.findById(userId);
    const targetDev = await User.findById(likeableUser);

    if (!targetDev) {
        return res.status(400).json({error: 'Dev not found!'});
    }

    loggedDev.dislikes.push(targetDev._id);

    await loggedDev.save();

    return res.json(loggedDev);
 }
};