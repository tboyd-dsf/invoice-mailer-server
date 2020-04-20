const express = require('express');
var path = require('path');

const PORT = process.env.PORT || 3030;
const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running, listening on PORT : ${PORT}`)
})