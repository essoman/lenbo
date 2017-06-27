var express     = require('express');
var app         = express();

var session     = require('express-session');
var parseurl    = require('parseurl');
var handlebars  = require('express-handlebars') .create({ defaultLayout:'main' });
    app.engine('handlebars', handlebars.engine);
    app.set('view engine', 'handlebars');

    app.use(require('body-parser').urlencoded({extended: true}));

    app.disable('x-powered-by');

    app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: credentials.cookieSecret,
}));

    app.use(function(req, res, next){
        var views = req.session.views;

        if(!views){
            views = req.session.views = {};
        }

        var pathname = parseurl(req).pathname;
        views[pathname] = (views[pathname]|| 0) + 1;

        next()        
    });

    app.use(express.static(__dirname + '/public'));

    app.get('/viewcount', function(req, res, next){
    res.send('You viewed this page '+req.session.views['/viewcount']+ 'times');
    });
    app.get('/', function(req, res){
    res.render('home');
});
    app.get('/contact', function(req, res){
    res.render('contact', {csrf: 'CSRF token here'});
});
    app.get('/thankyou', function(req, res){
    res.render('thankyou');
});
    app.post('/process', function(req, res){
    console.log('Form:  '  + req.query.form);
    console.log('CSRF token : ' + req.body._csrf);
    console.log('Email : '  + req.body.email);
    console.log('Question: ' + req.body.ques);
    res.redirect(303, '/thankyou')
});

    app.listen(3000)
