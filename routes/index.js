const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hey how you doing',
    user: 'hunter2',
    added: new Date()
  },
  {
    text: 'Im good, thanks for asking!',
    user: 'Alice123',
    added: new Date()
  },
  {
    text: 'Whats up?',
    user: 'BobSmith',
    added: new Date()
  },
  {
    text: 'Feeling great today!',
    user: 'EmilyRose',
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});

module.exports = router;
