var user= require('../models/user');

exports.updateLocation = function(req, res, next){
    user.where('email', req.body.email).update({$set: {longitude: req.body.lng,latitude:req.body.lat}}, function (err, count) {
        if (err){
            res.send(err);
        }

        res.json({success:"updated"});
    
    
    });

  

}