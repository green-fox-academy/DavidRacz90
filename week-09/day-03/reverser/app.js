'use strict'
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
app.use(express.json());


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

let reverse = (input) => {
  let textArray = [];
  textArray.push(input.split(','));
  textArray.forEach((e,i) => {
   
  });
  return textArray.toString();
} 



app.post('/sith', (req,res)=> {
  const { text } = req.body;
  if(text){
    res.json({
      'sith_text': reverse(text)
    })
  }
});

