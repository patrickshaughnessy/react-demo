'use strict'

import express from 'express'

import routes from './api/index'

const PORT = process.env.PORT || 4000

let app = express();


app.listen(PORT, () => {
  console.log('API server listening on port ' + PORT)
})
