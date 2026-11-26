const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  console.log('Req Headers : ', req.headers);
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'application/json' });

  // Send the response body as 'Hello, World!'
  res.end('Simple Task Management Rafly\n');
});

// Define the port to listen on
const PORT = 3000;

// Start the server and listen on the specified port
server.listen(PORT, 'localhost', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
