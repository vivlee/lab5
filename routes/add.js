var data = require("../data.json");

exports.addFriend = function(req, res) {    

  var newFriend = {
    "name": req.query.name,
    "description": req.query.description,
    "imageURL": "http://lorempixel.com/400/400/people/"   
  };
  
  console.log("%s %s", req.query.name, req.query.description);
  data["friends"].push(newFriend);
  res.render('add', data);
 }