var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var mongoose = require('mongoose');

var app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('html',hbs.__express);
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
{
    extended:false
}));

app.use(express.static('public'));
//mongoose
mongoose.connect('mongodb://localhost:27017/travelLog1');// database name
mongoose.connection.on('error',function(){
    console.error('MongoDb is not connected. Check if Mongod is running.');
});


var userController = require('./controllers/users');

//get operations
app.get('/',function(req,res){// loads the main-page i.e. 1st page
	res.render('GOexplorAr');
});

app.get('/adventure',function(req,res){// loads adventure.html on link click
	res.render('adventure');
});

app.get('/art_history',function(req,res){// loads art_history.html on link click
	res.render('art_history');
});

app.get('/beaches',function(req,res){// loads beaches.html on link click
	res.render('beaches');
});

app.get('/garden',function(req,res){// loads garden.html on link click
	res.render('garden');
});

app.get('/lakes_waterfall',function(req,res){// loads lakes_waterfall.html on link click
	res.render('lakes_waterfall');
});

app.get('/login',function(req,res){// loads login.html on link click
	res.render('login');
});

app.get('/nightlife',function(req,res){// loads nightlife.html on link click
	res.render('nightlife');
});

app.get('/others',function(req,res){// loads others.html on link click
	res.render('others');
});

app.get('/picnic',function(req,res){// loads picnic.html on link click
	res.render('picnic');
});

app.get('/religious',function(req,res){// loads religious.html on link click
	res.render('religious');
});

app.get('/rent_bike',function(req,res){// loads rent_a_bike.html on link click
	res.render('rent_a_bike');
});

app.get('/shopping',function(req,res){// loads shopping.html on link click
	res.render('shopping');
});

app.get('/sightseeing',function(req,res){// loads sightseeing.html on link click
	res.render('sightseeing');
});

app.get('/wildlife',function(req,res){// loads wildlife.html on link click
	res.render('wildlife');
});

//post operations
app.post('/signup',userController.postNewUser);// for signup action
app.post('/login',userController.getUserByUser);// for login action

app.listen(3000);