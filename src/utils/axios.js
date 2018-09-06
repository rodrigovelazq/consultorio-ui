import axios from 'axios';
var env = process.env.NODE_ENV || 'development';
var config = require('src/config/config.json');

var instance = axios.create({
  baseURL: config.serverUrl[env],
  timeout: 10000
});
 
const user = JSON.parse(localStorage.getItem('user'));
if(user){
instance.defaults.headers.common['Authorization'] = 'Bearer ' + user.token;
}
const auth = axios.create({
  baseURL: config.serverUrl[env],
  timeout: 10000
})

export {
  auth,
  instance
}
