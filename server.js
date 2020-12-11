var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var videoPostData = require('./videoPostData.json');
var videoPostData1 = require('./videoPostData1.json');
var videoPostData2 = require('./videoPostData2.json');

var app = express();
var port = process.env.PORT || 8000;
app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'completeTemplate'}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'videos')))

//renders main page for renaLand
app.get('/', function(req, res, next){
    res.status(200).render('mainPageTemplate',{videoPosts: videoPostData});
  });

app.get('/index1.html', function(req, res, next){
  res.status(200).render('mainPageTemplate', {videoPosts: videoPostData1});
});

app.get('/index2.html', function(req, res, next){
  res.status(200).render('mainPageTemplate', {videoPosts: videoPostData2});
});
  
app.post('/addVideo/', function (req, res, next) {
  console.log("test");
  console.log(req.body);
  if (req.body && req.body.genre && req.body.video && req.body.caption) {
//    var videoPost = req.params.videoPost.toLowerCase();
 //   if (videoPostData[videoPost]) {
    if (videoPostData) {
      videoPostData.push({
        genre: req.body.genre,
        video: req.body.video,
        caption: req.body.caption
      });
    fs.writefile(
      __dirname + '/videoPostData.json',
      JSON.stringify(videoPostData, null, 2),
      function (err, data) {
        if (err) {
          console.log("--err", err);
          res.status(500).send("error");
        }
        else {
          res.status(200).send("successful");
        }
    });
  }
  else {
    next();
  }
});




app.get('*', function (req, res, next) {
  res.status(404).render('404Template');
});


app.listen(port, function () {
    console.log("== Server is listening on port", port);
});
