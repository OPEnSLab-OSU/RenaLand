
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var videoPostData = require('./videoPostData.json');

var app = express();
var port = process.env.PORT || 8000;

app.engine('handlebars', exphbs({ defaultLayout: 'completeTemplate'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

//renders main page for renaLand
app.get('/', function(req, res, next){
    res.status(200).render('mainPageTemplate');
  });

app.get('/', function(req, res, next){
    res.status(200).render('mainPageTemplate',{videoPosts: postData});
  });

app.listen(port, function () {
    console.log("== Server is listening on port", port);
});