const request = require('superagent');
require('superagent-auth-bearer')(request);


module.exports = {

  repos: function(req, res) {
    request
      .get('https://api.github.com/users/'+owner+'/repos')
      .end(function(err, response) {
        if(err) { res.status(500).json(err); return; }
       
        res.send(response.body.map((repository) => { 

          return repository.full_name; }));
        
      });
  },
  branches: function(req, res) {
    const owner = req.params.owner;
    console.log("owner : "+owner);
    const reponame = req.params.reponame;
    request
      .get('https://api.github.com/repos/' + owner + '/' + reponame + '/branches')
      .end((err, response) => {
        if(err) { res.status(500).json(err); return; }
        res.send(response.body.map((branch) => { return branch.name; }));
      });
  }
};

