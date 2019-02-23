const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const PORT = process.env.PORT || 3000;
const db = process.env.DATABASE_URL || 'localhost';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: false
}));
// Post override with ?_method=
app.use(methodOverride('_method'));
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.listen(PORT);