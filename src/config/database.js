const mongoose = require('mongoose');
const message = require('../error/message');
require('dotenv').config();

class Database {
  constructor() {
    const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;
    this.url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@test.fkf1bxq.mongodb.net/${DB_NAME}`;
  }

  async connect() {
    try {
      await mongoose.connect(this.url);
      console.log(message.DB_CONNECTED);
    } catch (error) {
      console.error(message.ERROR_CONNECTING_DB, error);
    }
  }
}

module.exports = Database;
