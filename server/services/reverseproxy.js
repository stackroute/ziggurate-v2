var proxy = require('redbird')({port: 80});

var proxy = require('redbird')({port: 80, xfwd: false});

proxy.register("tasker.com", "http://localhost:8070");