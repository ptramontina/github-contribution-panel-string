const axios = require('axios');

module.exports = axios.create({
  baseURL: process.env.GIT_BASE_URL,
  headers: {
    common: {
      authorization: `Bearer ${process.env.GIT_TOKEN}`
    }
  }
});
