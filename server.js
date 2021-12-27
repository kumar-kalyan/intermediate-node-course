const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();
app.use(bodyParser.json());
const User = require('./models/User');
mongoose.connect('mongodb://localhost/userData');

// CREAT
app.post('/users', (req, res) => {
  // User.create()
})

app.route('/users/:id')
  // READ
  .get((req, res) => {
    // User.findById()
  })
  // UPDATE
  .put((req, res) => {
    // User.findByIdAndUpdate()
  })
  // DELETE
  .delete((req, res) => {
    // User.findByIdAndDelete()
  })
app.listen(port, () => {
  console.log(`server is listening on port:${port}`)
})