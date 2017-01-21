const jsonwebtoken = require('jsonwebtoken');
const config = require('../../config');

module.exports = (req, res, next) => {
  const token = req.cookies.token;
  console.log('Entered');
  console.log("token="+token);
  if(!token) { res.status(404).send(); return; }
  try {
    const claims = jsonwebtoken.verify(token, config.JWT_SECRET);
    req.claims = claims;
    next();
  } catch(err) {
    next(err);
  }
};
