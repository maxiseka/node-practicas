const http = require('http');

console.info('iniciando script');
const app = (req, res) => {
  console.info('request to> ', req.url);
  res.end('gracias x su visita');
};


const server = http.createServer(app);

server.listen(5000, console.info('running on 5000'));
