'use strict'
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/assets', express.static('assets'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


app.get('/doubling', (req, res) => {
  const { input } = req.query;
  if (input) {
    res.json({
      'received': input,
      'result': input * 2
    });
  } else {
    res.json({ error: 'Please provide an input!' });
  }
});

app.get('/greeter', (req, res) => {
  const { name } = req.query;
  const { title } = req.query;
  if (name && title) {
    res.json({
      'welcome_message': `Oh, hi there ${name}, my dear ${title}!`
    });
  } else if (name) {
    res.json({ 'error': 'Please provide a title!' });
  } else if (title) {
    res.json({ 'error': 'Please provide a name!' });
  }
});

app.get('/appenda/:word', (req, res) => {
  const { word } = req.params;
  if (word) {
    res.json({ 'appended': `${word}a` });
  } else {
    res.json({
      error: '404'
    });
  }
});

let sum = (input) => {
  let sum = 0;
  for (let i = 0; i <= input; i++) {
    sum += i;
  }
  return sum;
}

let fact = (input) => {
  let fact = 1;
  for (let i = input; i > 0; i--) {
    fact *= i;
  }
  return fact;
}

app.post('/dountil/:action', (req, res) => {
  const { action } = req.params;
  if (action == 'sum') {
    res.json({
      'result': sum(req.body.until)
    });
  } 
  if (action == 'factor') {
    res.json({
      'result': fact(req.body.until)
    });
  }
  else {
    res.json({
      'error': 'Please provide a number!'
    });
  }
});

/