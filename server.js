const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

const root = path.resolve(__dirname, 'docs');
app.use(express.static(root));

app.listen(1991, error => {
  if (error) {
    console.log('Application startup error', error);
    process.exit(-1);
  }

  console.log('Application started. Go to http://127.0.0.1:1991 in your browser.');
});
