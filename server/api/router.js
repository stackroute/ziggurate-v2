const Router = require('express').Router();
const auth = require('./auth');
const repos= require('./repos');
const getLogData=require('../controller/getLogData');
const getAppData=require('../controller/getAppData');

Router.use(require('body-parser').json());
Router.use('/auth', auth);
Router.use('/repos', repos);
Router.use('/api/:getid/result',getLogData);
Router.use('/api/appDetails',getAppData);
module.exports = Router;