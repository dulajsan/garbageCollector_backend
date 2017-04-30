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
        quantity: req.body.quantity
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
  let category=req.body.cat;
  Waste.find(function(err, wastes) {

      if (err){
          res.send(err);
      }

      res.json(wastes);

  });
}

exports.deleteWaste = function(req, res, next){

    Waste.remove({
        _id : req.params.waste_id
    }, function(err, waste) {
        res.json(waste);
    });

}
