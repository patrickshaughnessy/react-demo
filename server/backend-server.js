import express from 'express'
import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

import routes from './api/index'

const PORT = process.env.PORT || 3000

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

import webpack from 'webpack'
import config from '../webpack.config'
import WebpackDevServer from 'webpack-dev-server'

new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true

}).listen(3001, 'localhost', function(err, result){
  if (err) return console.log(err);
  console.log('Listening on 3001')
})
