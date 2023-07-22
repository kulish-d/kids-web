const { ALL_ROUTES_PREFIX } = require('./constants');

const express = require('express');
var cors = require('cors');

const publicRouter = require('./routes/public');
const authRouter = require('./routes/auth');
const privateRouter = require('./routes/private');


const app = express();
const port = 3000;

app.use(cors());
app.use(`${ALL_ROUTES_PREFIX}/`, express.static('static'));
app.use(express.json());

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})

app.use(`${ALL_ROUTES_PREFIX}/public`, publicRouter);
app.use(`${ALL_ROUTES_PREFIX}/auth`, authRouter);
app.use(`${ALL_ROUTES_PREFIX}/private`, privateRouter);

module.exports = app;