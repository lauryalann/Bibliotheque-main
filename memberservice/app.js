const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./util/database');

const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'view')));

const memberRoutes = require('./route/memberRoute');
app.use('/api/members', memberRoutes);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/view/index.html');
});

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Member Service running on port ${PORT}`);
    });
});
