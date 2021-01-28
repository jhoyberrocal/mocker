const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const bodyParser= require('body-parser');
const app = express();
const PORT = process.env.PORT || 1995;
const mocker = require('./mocker');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'pug');
app.use(mocker);

app.get('/', (req, res) => {
    res.render('form');
});

app.listen(PORT, () => console.log(`🔥 Server running: http://localhost:${PORT}`));
