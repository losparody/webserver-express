const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

//const port = process.env.PORT || 3000;
app.set('port',process.env.PORT || 3000)

app.use( express.static( __dirname+ '/public') ) ;

// HBS
hbs.registerPartials(__dirname+'/views/parciales');
app.set('view engine','hbs');

app.get('/',  (req, res) => {

    res.render('home',
        {
            nombre: 'luIs pArody'
        });
});

app.get('/about',(req, res) => {
    res.render('about');
})


app.listen(app.get('port'),() => {
    console.log('Server en puerto: ',app.get('port'));
});