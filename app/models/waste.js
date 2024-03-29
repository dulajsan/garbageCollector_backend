var mongoose = require('mongoose');

var WasteSchema = new mongoose.Schema({

    category: {
        type: String,
        required: true
    },

    quantity:{
      type:Number,
      required:true
    },
    user:{
      type:String,
      required:true
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Waste', WasteSchema);
