const Router = require('express').Router();
const auth = require('./auth');
const getLogData=require('../controller/getLogData');


Router.use(require('body-parser').json());
Router.use('/auth', auth);



Router.use('/api/:getid/result',getLogData);
module.exports = Router;