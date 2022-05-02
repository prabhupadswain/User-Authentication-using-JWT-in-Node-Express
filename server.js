const http = require('http');
const app = require('./app');

// Define PORT
const PORT = process.env.PORT || 3500;

// Create a server instance
const server = http.createServer(app);

// Make the server listen onto the PORT
server.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));