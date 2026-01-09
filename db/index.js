const mongoose = require("mongoose");

async function connectToDB(url) {
  mongoose.connect(url,{ dbName: 'url-shortner' });
}

module.exports = connectToDB;
