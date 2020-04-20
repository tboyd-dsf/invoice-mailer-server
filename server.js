const express = require('express');

const PORT = process.env.PORT || 3030;
const app = express();

app.get('/', (req, res) => {
    res.send('I am a server')
});

app.listen(PORT, () => {
    console.log(`Server running, listening on PORT : ${PORT}`)
})