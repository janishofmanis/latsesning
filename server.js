var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(301,
    {Location: 'https://sites.google.com/view/latsensing/home'}
  );
  res.end();
}).listen(8080, '0.0.0.0');
