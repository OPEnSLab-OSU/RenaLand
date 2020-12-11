
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var videoPostData = require('./videoPostData.json');

var app = express();
var port = process.env.PORT || 8000;
app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'completeTemplate'}));
app.set('view engine', 'handlebars');


//renders main page for renaLand
app.get('/', function(req, res, next){
    res.status(200).render('mainPageTemplate',{videoPosts: videoPostData});
  });


app.get('*', function (req, res, next) {
  res.status(404).render('404Template.handlebars');
  });
  

app.listen(port, function () {
    console.log("== Server is listening on port", port);
});