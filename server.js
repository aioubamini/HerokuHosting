var express = require('express');
var app = express();
var http = require('http').Server(app);

// set up handlebars view engine
var handlebars = require('express3-handlebars')
  .create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

http.listen(process.env.PORT || 3000, function(){
  console.log('listening on', http.address().port);
})

// Home Page
app.get('/', function(req, res){
  res.render('home');
});

// About Page
app.get('/about', function(req, res){
  res.render('about');
});

// 404 catch-all handler (middleware)
app.use(function(req, res){
  res.status(404);
  res.render('404');
});

// 500 error handler (middleware)
app.use(function(req, res){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});
