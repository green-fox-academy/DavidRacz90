const routes = require('./routes');
const PORT = 3000;

routes.listen(PORT, ()=> {
  console.log(`App is listen on port: ${PORT}`);
})