try {
  const express = require('express');
  const http = require('http');
  const fs = require('fs');
  const path = require('path');
  const cookieParser = require('cookie-parser');
  const bodyParser = require('body-parser');
  const cors = require('cors');

  const app = express();

  app.set('port', process.env.PORT || 3500);

  console.info('Prepare BodyParser...');
  app.use(bodyParser.json({limit: '50mb', extended: true}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
  app.use(cookieParser());

  console.log('info', 'Cors...');
  app.use(cors({
    credentials: true,
    origin: 'http://localhost:4200'
  }));

  // ============================ Set our api routes
  console.info('Prepare express routes...');
  app.use('/api', require('./routes/generalRoutes.js'));

  app.use('*', (req, res, next) => {
    let err            = new Error(`[${req.ip}] -> host -> [${req.headers.host}] -> action -> [${req.headers['access-control-request-method']}] -> uri called -> [${req.originalUrl}] -> not exist !!!`);
    err.statusCode     = 404;
    err.shouldRedirect = true;
    next(err);
  });

  app.use((err, req, res, next) => {
    console.error('------------------- Error Node ');
    console.error(err);
    if (!err.statusCode) err.statusCode = 500;
    if (err.shouldRedirect) {
      res.render('myErrorPage')
    } else {
      res.status(err.statusCode).send(err.message);
    }
  });

  // ============================ prepare routes
  console.info('Create Http Server...');
  const server = http.createServer(app);

  server.listen(app.get('port'), () => {
    console.log('info', 'Express server listening on http://localhost:%s/', app.get('port'));
  }).on('error', (err) => console.error('on Error Listen -> ', err));

} catch (error) {
  console.log('error... in servers.js -- ');
  console.log(error);
}
