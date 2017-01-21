var proxy = require('redbird')({port: 80});

var proxy = require('redbird')({port: 80, xfwd: false});

proxy.register("tasker.com", "http://172.23.238.220:8070");