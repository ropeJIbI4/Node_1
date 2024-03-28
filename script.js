const http = require('http');

let viewIndex = 0;
let viewAbout = 0;

const server = http.createServer((req, res) => {
  
  if (req.url === '/') {
    content = `
      <h1>Главная страница</h1>
      <p>Счетчик просмотров: ${++viewIndex}</p>
      <a href="/about">Ссылка на страницу "/about"</a>
      
    `;
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
  } else if (req.url === '/about') {
    content = `
      <h1>О сайте</h1>
      <p>Счетчик просмотров: ${++viewAbout}</p>
      <a href="/">Ссылка на страницу "/"</a>
    `;
    res.writeHead(200, {
      "Content-Type": "text/html; charset=UTF-8",
    });
  } else {
    content = `<h1>Страница не найдена</h1><p>Код ошибки: 404</p>`;
    res.writeHead(404, {
      "Content-Type": "text/html; charset=UTF-8",
    });
  }
  res.end(content);
});

const port = 3000;
server.listen(port, () => console.log(`Сервер запущен ${port}`));