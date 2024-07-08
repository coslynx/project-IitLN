const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const feedbackData = [];

app.get('/feedback', (req, res) => {
  res.json(feedbackData);
});

app.post('/feedback', (req, res) => {
  const { user, feedback } = req.body;
  
  if (!user || !feedback) {
    return res.status(400).json({ message: 'User and feedback are required' });
  }
  
  feedbackData.push({ user, feedback });
  res.status(201).json({ message: 'Feedback submitted successfully' });
});

app.listen(3000, () => {
  console.log('Feedback system running on port 3000');
});

module.exports = app;