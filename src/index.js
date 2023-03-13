const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();

// Db connection
const { mongoose } = require('./database');

// Settings 
app.set('port', process.env.PORT || 8080);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/patients', require('./routes/patients.routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})