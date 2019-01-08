const test = require('tape');
const request = require('supertest');
const app = require('../routes');
test('TESTING GET / ENDPOINT WITHOUT QUERY', (t) => {
  request(app)
    .get('/Yondu?distance=')
    .expect(210)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      t.same(res.body, {error: 'Cannot calculate the speed'}, 'without query test');
      t.end();
    });
});
test('TESTING GET / ENDPOINT WITH QUERY', (t) => {
  request(app)
    .get('/Yondu?distance=1000&time=25')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) throw err;
      t.deepEqual(res.body, {"distance": '1000', "time": '25', "speed": 40 }, 'with query test');
      t.end();
    });
});