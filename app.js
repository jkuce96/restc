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
    try {
        // Fetch data from Instagram Graph API
        const accessToken = process.env.TOKEN;
        const apiUrl = `https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${accessToken}`;
        const response = await axios.get(apiUrl);
        const imageData = response.data.data;
        console.log(response)

        // Render site.ejs and pass imageData as a local variable
        res.render('site', { imageData });
    } catch (error) {
        console.error('Error fetching Instagram data:', error);
        res.status(500).send('Error fetching Instagram data');
    }
});

app.listen(port, () => {
    console.log(`App jede na portu ${port}`);
    } );