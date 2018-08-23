import axios from 'axios';
var env = process.env.NODE_ENV || 'development';
var config = require('src/config/config.json');

const instance = axios.create({
  baseURL: config.serverUrl[env],
  timeout: 10000
});

export default instance;

