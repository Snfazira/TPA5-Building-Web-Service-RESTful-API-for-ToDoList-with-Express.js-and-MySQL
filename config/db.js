const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/TPA5'

const db = mongoose.connect(DB_URL)

module.exports = db