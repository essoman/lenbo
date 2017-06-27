var express     = require('express');
var app         = express();

var handlebars = require('express-handlebars') .create({ defaultLayout:'main' });
    app.engine('handlebars', handlebars.engine);
    app.set('view engine', 'handlebars');

app.disable('x-powered-by');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('home');
});
app.get('/contact', function(req, res){
    res.render('contact', {csrf: 'CSRF token here'});
});

app.listen(3000)
