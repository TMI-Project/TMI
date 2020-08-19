var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response){
    var _url = request.url;
    var query = url.parse(_url, true).query;
    console.log(query.id);

    if(request.url == '/'){
        _url = '../html/index.html';
    }

    if(request.url == '/admin'){
        return response.writeHead(404);
    }

    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + _url));
    response.end(query.id)

});
app.listen(3000);
