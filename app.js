const express = require('express'),
  bodyParser = require('body-parser'),
  path = __dirname + '/assets/',
  app = express();

/* PORT LISTENING */

/* END PORT LISTENING */

/* MODELS */

/* END MODEL */

/* ROUTES */
const homeRoutes = require('./routes/home');
/* END ROUTES */

/* CONFIG */
app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/assets'));
app.use(bodyParser.urlencoded({ extended: true }));
/* END CONFIG */

/* USE ROUTES */
app.use('/', homeRoutes);
/* END USE ROUTES */

app.listen(process.env.PORT || 3000, process.env.IP, () => {
  console.log('server started');
});
