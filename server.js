const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3001;

//express middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/notes.html'));
});



app.listen(PORT, () => {
    console.log(`API server now on port 3001!`);
});