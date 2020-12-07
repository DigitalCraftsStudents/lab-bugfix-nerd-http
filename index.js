const http = require('http');
const hp = require('./hp');
const HOST = '0.0.0.0';
const PORT = 9999;

const server = http.createServer(hp);

// The host argument is optional!
// The second argument is inspected.
// If it's a string, that string is used as the HOST.
// If it's a function, it's used as the callback.
server.listen(PORT, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
