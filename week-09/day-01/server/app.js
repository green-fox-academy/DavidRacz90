const express = require('express');

let app = express();
app.use(express.static('static'));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.use('/assets', express.static('assets'));


app.listen(3000, () => console.log('Application is listening on port 3000'));

