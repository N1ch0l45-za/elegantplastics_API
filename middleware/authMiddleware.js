const jwt = require('jsonwebtoken');
require('dotenv').config();
const UserModel = require('../models/userModel');

module.exports = async (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        res.status(401).json({ "error": { "message": "Not authenticated!" } });
    }

    const token = authHeader.split(' ')[1];
    let decodedToken;

    try {
        decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        res.status(500).json({ "error": { "message": err.message } });
    }

    if (!decodedToken) {
        res.status(401).json({ "error": { "message": "Not authenticated!" } });
    }

    const user = await UserModel.find(decodedToken.email);
    if (!user[0].length > 0) {
        res.status(401).json({ "error": { "message": "Agent was removed!" } });
    }

    req.isLoggedIn = true;
    req.userId = decodedToken.userId;
    req.email = decodedToken.email;
    req.role = decodedToken.role;
    next();
}