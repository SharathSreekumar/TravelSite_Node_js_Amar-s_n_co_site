var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');

var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
//var mongoose = require('mongoose');

var usr = require('../models/Users');// database attributes

//for get operation
exports.createUser = function(req,res){
	res.render('GOexplorAr');//as signup & login are in same page
}

//for post operation
exports.postNewUser = function(req,res){//create new account using post
    if(req.body.userPw == req.body.userPwConfirm){
        var userAcc = new usr();  // usr is same as the variable, acts as object for Users.js
        userAcc.userid = req.body.userMail; // equating html variable 'name' values to the database variables
        userAcc.password = req.body.userPw; // equating html variable 'name' values to the database variables
        userAcc.save(); // save the values equated
        console.log('Successful');
        res.render('GOexplorAr'); // page to load
    }
}

//for post operation
exports.getUserByUser = function(req,res){//for searching the specific user i.e. for Login
    var userAcc = new usr();
    usr.find(req.body.luname,function(err,user){
        if(err)
            res.send(err);
        for(var u in user){
            if(req.body.luname == user[u].userid && req.body.lpwrd == user[u].password){ // search for the user & passwrd
                //res.send("Login Successful...");
                console.log('Login Successful...');
                res.cookie('user',req.body.luname, {maxAge : 30 * 60 * 1000});// 1 sec = 1000
                res.cookie('pass',req.body.lpwrd, {maxAge : 30 * 60 * 1000});
                res.cookie('page','/');
                //res.render('GOexplorAr');
                res.render('GOexplorAr',{
                    userAcc : req.cookies.user,
                    links : "/"
                });// page to load
            }else if(req.body.luname == user[u].userid && req.body.lpwrd != user[u].password){// if username exist, but password is incorrect
                //res.send("Invalid Password...");
                console.log('Invalid Password...');
                res.render('login');
            }else{
                console.log('Such username doesnot exist...');
            }
        }
    });
}