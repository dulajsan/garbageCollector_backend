var User= require('../models/user');

exports.getLocation = function(req, res, next){
  let user=req.body.email;
  User.find({email:user},function(err, loc) {

      if (err){
          res.send(err);
      }

      res.json(loc);

  });



}
