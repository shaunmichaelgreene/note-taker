const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes/index.js');
const htmlRoutes = require('./routes/htmlRoutes');

//express middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes); //use api routes
app.use('/', htmlRoutes); //use html routes

app.listen(PORT, () => {
    console.log(`API server now on port 3001!`);
});