const test = require('tape');
const request = require('supertest');
const app = require('../routes');
test('groot endpoint', (t) => {
  request(app)
    .get('/groot?message=')
    .expect(210)
    .expect('Content-Type', /json/)
    .end((err, res ) => {
      if (err) throw err;
      t.same(res.body,  {error: `I'm Groot!`}, 'without query test');
      t.end();
    });
});
test('groot endpoint with query', (t) => {
  request(app)
    .get('/groot?message=valami')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res ) => {
      if (err) throw err;
      t.same(res.body,  {"message": "valami", "translated": `I'm Groot!`}, 'with query test');
      t.end();
    });
});