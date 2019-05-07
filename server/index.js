const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const formData = require('express-form-data');
const cookieParser = require('cookie-parser');
const path = require('path');
const port = process.env.PORT || 5000;
require('dotenv').config();
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(formData.parse());


require('./config/db')();
app.use(express.static(path.join(__dirname, '/client/build')));
app.use('/media',express.static('media'));
require('./routes')(app);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});



app.listen(port, () => {
    console.log("Server is running on port : " + port + '...');
});


