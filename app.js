var express     = require('express');
var app         = express();
var handlebars = require('express3-handlebars') .create({ defaultLayout:'main' });
    app.engine('handlebars', handlebars.engine);
    app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('home');
});


app.listen(3000)
