const express = require('express');
const moment = require('moment');
const router = express.Router();

const messages = [
  {
    text: 'Hey how you doing',
    user: 'hunter2',
    added: moment().format('ddd, MMM Do YYYY')
  },
  {
    text: 'Im good, thanks for asking!',
    user: 'Alice123',
    added: moment().format('ddd, MMM Do YYYY')
  },
  {
    text: 'Whats up?',
    user: 'BobSmith',
    added: moment().format('ddd, MMM Do YYYY')
  },
  {
    text: 'Feeling great today!',
    user: 'EmilyRose',
    added: moment().format('ddd, MMM Do YYYY')
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});

module.exports = router;
