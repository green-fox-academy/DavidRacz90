const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

const todos = ['waking up', 'breakfast', 'go to school', 'do the homework'];

// home page
app.get('/', (req, res) => {
  res.render('home', {
    todos:todos
  });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

