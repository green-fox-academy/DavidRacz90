'use strict'
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
app.use(express.json());


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

let sum = (array) => {
  let number = 0;
  array.forEach(e => {
    number += e;
  });
  return number;
}

let multipy = (array) => {
  let number = 1;
  array.forEach(e => {
    number *= e;
  })
  return number;
}

let double = (array) => {
 return  array.map(e =>  e * 2); 
}

app.post('/arrays', (req, res) => {
  const { what } = req.body;
  const { numbers } = req.body;

  if (what == 'sum') {
    res.json({
      'result': sum(numbers)
    });
  }
  if(what == 'multiply') {
    res.json({
      'result': multipy(numbers)
    });
  }
  if(what == 'double') {
    res.json({
      'result': double(numbers)
    });
  }
});