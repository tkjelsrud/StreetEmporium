const express = require('express');
const http = require('http');
const fs = require('fs');
const WebSocket = require('ws');

const app = express();

app.use('/game', express.static('public'));

const server = http.createServer(app);


// Create an HTTP server
/*const server = http.createServer((req, res) => {
    if (req.url === '/game') {
        // Serve the Phaser game file
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading Phaser game');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        // Handle other routes (if any)
        res.writeHead(404);
        res.end('Not found');
    }
});*/

// WebSocket server for protobuf communication
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    // Handle WebSocket connections for protobuf messages
    ws.on('message', (message) => {
        // Handle protobuf messages from clients
        console.log('Received message:', message);
        // Process protobuf message here
    });
});

// Start the HTTP server
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
