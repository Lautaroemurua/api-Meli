const app = require('express')();
const http = require('http');
const cors = require('cors');
const config = require('./config/config').config;

app.use(cors());

app.use('/items', require('./routes/routes'));

http.createServer(app)
  .listen(config.PORT, () => console.log(`El servidor esta ejecutandose en el puerto: ${config.PORT}`));
