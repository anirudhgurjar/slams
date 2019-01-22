var http = require('http');

http.createServer(onRequest).listen(3000);

function onRequest(client_req, client_res) {
  var options = {
    hostname: 'slamsbox-server.herokuapp.com',
    path: client_req.url,
    method: client_req.method
    //headers: client_req.headers
  };

  var resp_header = {
    // Website you wish to allow to connect
    'Access-Control-Allow-Origin': 'http://localhost:8080',

    // Request methods you wish to allow
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',

    // Request headers you wish to allow
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    'Access-Control-Allow-Credentials': true,

    'content-type': 'application/json'
  };

  console.log('serve: ' + JSON.stringify(options));

  var proxy = http.request(options, function(res) {
    client_res.writeHead(res.statusCode, resp_header);

    res.pipe(
      client_res,
      {
        end: true
      }
    );
  });

  client_req.pipe(
    proxy,
    {
      end: true
    }
  );
}
