const express = require('express');
const app = express();

app.get('/Yondu', (req, res) => {
  const { distance, time } = req.query;
  const speed = distance / time
  if(distance === undefined || distance === '' || time === undefined || time === ''){
    res.status(210).json({
      error: 'Cannot calculate the speed'
    })
  } else {
    res.status(200).json({
      "distance": distance,
      "time": time,
      "speed": speed
    });
  }
});

module.exports = app;