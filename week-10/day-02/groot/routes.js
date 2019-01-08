const express = require ('express');
const app = express();

app.get('/groot', (req, res) => {
  const { message } = req.query;
  if (message) {
    res.status(200).json({
      "message": message,
      "translated": `I'm Groot!`
    });
  } else {
    res.status(210).json({
      error: `I'm Groot!`
    });
  }
});


module.exports = app;