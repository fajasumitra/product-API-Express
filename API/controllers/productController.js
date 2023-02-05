var mongoose = require('mongoose');
var list = mongoose.model('product');

exports.list_all_list = function(req,res){
    list.find({}, function(err, list){
        if (err) 
            res.send(err)
            res.json(list)
    })
}

exports.create_a_list = function(req, res) {
    const new_list = new list(req.body);
    new_list.save(function(err, list) {
      if (err)
        res.send(err);
        res.json(list);
    });
};

exports.read_a_list = function(req, res) {
    list.findById(req.params.listId, function(err, list) {
      if (err)
        res.send(err);
      res.json(list);
    });
  };

exports.update_a_list = function(req, res) {
    list.findOneAndUpdate({_id: req.params.listId}, req.body, {new: true}, function(err, list) {
        if (err)
        res.send(err);
        res.json(list);
    });
};
  
exports.delete_a_list = function(req, res) {
    list.remove({
        _id: req.params.listId
      }, function(err, list) {
        if (err)
          res.send(err);
        res.json({ message: 'list successfully deleted' });
      });
    };