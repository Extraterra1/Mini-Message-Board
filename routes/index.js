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
  },
  {
    text: 'Hey, long time no see!',
    user: 'Sara21',
    added: moment().format('ddd, MMM Do YYYY')
  },
  {
    text: 'Just chilling on a lazy Sunday.',
    user: 'Mark87',
    added: moment().format('ddd, MMM Do YYYY')
  },
  {
    text: 'Whats your favorite hobby?',
    user: 'LilyGreen',
    added: moment().format('ddd, MMM Do YYYY')
  },
  {
    text: 'Hows the weather over there?',
    user: 'AlexWinter',
    added: moment().format('ddd, MMM Do YYYY')
  },
  {
    text: 'Working hard or hardly working?',
    user: 'ChrisCoder',
    added: moment().format('ddd, MMM Do YYYY')
  },
  {
    text: 'Pizza or burgers for dinner?',
    user: 'Foodie123',
    added: moment().format('ddd, MMM Do YYYY')
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});

module.exports = router;
