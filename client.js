const WebSocket = require('ws');
const { ChatMessage } = require('./chat_pb');

// Establish a WebSocket connection to the server
const socket = new WebSocket('ws://localhost:3001');

// Event handler for when the WebSocket connection is established
socket.onopen = () => {
  console.log('Connected to server');

  // Example: Send a chat message when the player presses enter
  const sender = 'Player'; // Replace with actual player name
  const content = 'Hello, world!'; // Replace with actual message content
  const chatMessage = new ChatMessage();
  chatMessage.sender = sender; // Set the sender field
  chatMessage.content = content; // Set the content field
  
  // Serialize the message object
  const encodedMessage = ChatMessage.encode(chatMessage).finish();
  
  // Send the encoded message over the WebSocket connection
  socket.send(encodedMessage);
};

// Event handler for receiving messages from the server
socket.onmessage = (event) => {
  // Decode the received message using the protobuf schema
  const decodedMessage = ChatMessage.decode(new Uint8Array(event.data));

  // Log the chat message received from the server
  console.log(`${decodedMessage.sender}: ${decodedMessage.content}`);
};
