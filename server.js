const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 3001;

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('I am running on PORT http://localhost:3001'));
});

 