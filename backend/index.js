const { ALL_ROUTES_PREFIX } = require('./constants');

const express = require('express')
var cors = require('cors')

const publicRouter = require('./routes/public');


const app = express()
const port = 3000

app.use(cors());
app.use(`${ALL_ROUTES_PREFIX}/`, express.static('static'));

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

app.use(`${ALL_ROUTES_PREFIX}/public`, publicRouter)

module.exports = app;