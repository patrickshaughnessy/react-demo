'use strict'

import express from 'express'
import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

import routes from './api/index'

const PORT = process.env.PORT || 4000

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')))

app.use('/api', routes);

app.listen(PORT, () => {
  console.log('API server listening on port ' + PORT)
})
