const { ALL_ROUTES_PREFIX } = require('./constants');

const express = require('express')

const publicRouter = require('./routes/public');


const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

app.use(`${ALL_ROUTES_PREFIX}/public`, publicRouter)

module.exports = app;