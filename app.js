const express = require('express');
const app = express();
const port = 4000;
const dotenv = require("dotenv");
const axios = require("axios")
const path = require("path")
dotenv.config();



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src'));


app.use(express.static('src'));




app.get('/', async (req, res) => {
        res.render('site');
});

app.listen(port, () => {
    console.log(`App jede na portu ${port}`);
    } );