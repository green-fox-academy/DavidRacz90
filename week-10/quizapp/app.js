const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;

app.use(express.json());

const conn = mysql.createConnection({
  user: 'root',
  password: 'password',
  database: 'quiz_app',
  port: 3306,
});

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'game.html'));
});

app.get('/questions', (req, res) => {
  res.sendFile(path.join(__dirname, 'questions.html'));
});



app.get('/game', (req, res) => {
  const randomID = Math.floor((Math.random() * 10) + 1);
  const sql = `SELECT questions.question, questions.id, answers.id, answers.question_id, answers.answer, answers.is_correct FROM questions INNER JOIN answers 
  ON questions.id = answers.question_id WHERE questions.id = '${randomID}';`
  conn.query(sql, (err, data) => {
    if (err) {
      res.send(500)
      console.log('Internal server error');
      return;
    }
    res.json(data);
  });
});

app.get('/api/questions', (req, res) => {
  const sql = `SELECT * FROM questions;`;
  conn.query(sql, (err, data) => {
    if (err) {
      res.send(500);
      console.log('Internal Server Error');
      return;
    }
   res.json(data); 
  });
});

app.listen(PORT, () => {
  console.log(`App is listen on port: ${PORT}`);
});