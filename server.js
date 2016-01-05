var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var mongoose = require('mongoose');

var app = express();
app.use(cookieParser());

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
	//res.render('GOexplorAr');
	var useAcc = null, linkes = null;
	if(req.cookies.user == undefined){
		useAcc = "Login";
		linkes = "/login";
	}else{
		useAcc = req.cookies.user;
		linkes = req.cookies.page;
	}
    res.render('GOexplorAr',{
                    userAcc : useAcc,
                    links : '/logout'
                    });
	console.log("Cookies:",req.cookies.user);
	console.log("Cookies pass:",req.cookies.pass);
});

app.get('/login',function(req,res){
	res.render('login');
});

app.get('/rent_bike',function(req,res){
	res.render('rent_a_bike');
});
// categories
app.get('/adventure',function(req,res){
	res.render('adventure');
});

app.get('/nightlife',function(req,res){
	res.render('nightlife');
});

app.get('/shopping',function(req,res){
	res.render('shopping');
});

app.get('/sightseeing',function(req,res){
	res.render('sightseeing');
});

app.get('/wildlife',function(req,res){
	res.render('wildlife');
});

app.get('/s_others',function(req,res){
	res.render('s_others');
});

app.get('/picnic',function(req,res){
	res.render('picnic');
});
// sightseeing categories
app.get('/religious',function(req,res){
	res.render('religious');
});

app.get('/s_beaches',function(req,res){
	res.render('s_beaches');
});

app.get('/art_history',function(req,res){
	res.render('art_history');
});

app.get('/garden',function(req,res){
	res.render('garden');
});

app.get('/lakes_waterfall',function(req,res){
	res.render('lakes_waterfall');
});

app.get('/s_others',function(req,res){
	res.render('s_others');
});
// picnic categories
app.get('/farms',function(req,res){
	res.render('farms');
});

app.get('/p_beach',function(req,res){
	res.render('p_beach');
});

app.get('/p_others',function(req,res){
	res.render('p_others');
});

app.get('/springs',function(req,res){
	res.render('springs');
});
//nightlife categories
app.get('/clubs',function(req,res){
	res.render('clubs');
});
app.get('/casino',function(req,res){
	res.render('casino');
});
app.get('/pubs',function(req,res){
	res.render('pubs');
});
app.get('/entertainment',function(req,res){
	res.render('entertainment');
});
//wildlife categories
app.get('/zoo',function(req,res){
	res.render('zoo');
});

app.get('/wild',function(req,res){
	res.render('wild');
});

app.get('/bird',function(req,res){
	res.render('bird');
});

app.get('/national',function(req,res){
	res.render('national');
});
//shopping categories
app.get('/malls',function(req,res){
	res.render('malls');
});

app.get('/local',function(req,res){
	res.render('local');
});

app.get('/outlet',function(req,res){
	res.render('oulet');
});

app.get('/goan',function(req,res){
	res.render('goan');
});
//adventure categories
app.get('/adv_parks',function(req,res){
	res.render('adv_parks');
});

app.get('/a_others',function(req,res){
	res.render('a_others');
});

app.get('/karts',function(req,res){
	res.render('karts');
});
app.get('/beachsports',function(req,res){
	res.render('beachsports');
});

app.get('/logout',function(req,res){
    res.clearCookie('user');
    res.clearCookie('pass');
    res.clearCookie('page');
	res.render('GOexplorAr',{
                    userAcc : "Login",
                    links : '/login'
                    });
});

//post operations
app.post('/signup',userController.postNewUser);// for signup action
app.post('/login',userController.getUserByUser);// for login action

app.listen(3000);