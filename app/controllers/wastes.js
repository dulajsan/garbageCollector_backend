var Waste = require('../models/waste');

exports.getWastes = function(req, res, next){

    Waste.find(function(err, wastes) {

        if (err){
            res.send(err);
        }

        res.json(wastes);

    });

}

exports.createWaste = function(req, res, next){

    Waste.create({
        category : req.body.category,
        quantity: req.body.quantity,
        user:req.body.user
    }, function(err, waste) {

        if (err){
            res.send(err);
        }

        Waste.find(function(err, wastes) {

            if (err){
                res.send(err);
            }

            res.json(wastes);

        });

    });

}

exports.getcat=function(req,res,next){
  let user=req.body.email;
 let categor=req.body.cat;
  Waste.find({category:categor},function(err, wastes) {

      if (err){
          res.send(err);
      }

      res.json(wastes);

  });
}


exports.mypost=function(req,res,next){
  let usert=req.body.email;
  Waste.find({user:usert},function(err, posts) {

      if (err){
          res.send(err);
      }

      res.json(posts);

  });
}

exports.deleteWaste = function(req, res, next){

    Waste.remove({
        _id : req.params.waste_id
    }, function(err, waste) {
        res.json(waste);
    });

}
