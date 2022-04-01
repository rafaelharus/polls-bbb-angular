const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const app = express();
app.use(serveStatic(__dirname + "/dist/polls-bbb-angular"));
app.use(history({
  disableDotRule: true,
  verbose: true
}));
const port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
