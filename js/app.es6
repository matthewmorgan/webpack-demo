import { login } from './login';

const img = document.createElement('img');
img.style.height = "25%";
img.style.width = "25%";
img.src= require('../images/webpack_logo.png');

document.getElementById('img_container').appendChild(img);

require('../css/bootstrap.css');
require('../css/app.scss');

login('admin', 'radical');

document.write("Welcome to Big Hair Concerts Baby!!");

console.log('App loadedz');