import http from 'http';

import '../typeorm';

const port = process.env.PORT || 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ name: 'teste-bot', ver: '1.0.0' }));
    res.end();
  })
  .listen(port);
