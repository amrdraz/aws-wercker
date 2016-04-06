var http = require('http');

var PORT = process.env.NODEJS_PORT || 80;
var IP = process.env.NODEJS_IP || '0.0.0.0';

function handleRequest(request, response) {
	response.end(`This deployment was deployed by draz`);
}

var server = http.createServer(handleRequest);

server.listen(PORT, IP, function() {
	console.log(`Server listening on http://${IP}:${PORT}`);
});