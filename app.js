var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Viglet Rubikube');
});

app.listen(2730, function () {
  console.log('Example app listening on port 2730!');
});

