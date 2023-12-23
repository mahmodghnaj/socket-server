# Real-Time Chat Application Server

This repository contains the server-side code for a real-time chat application built with Node.js, Express, and Socket.IO. The server enables communication between clients in real-time, allowing them to send and receive messages instantly.

## Features

- **WebSocket Communication:** Utilizes Socket.IO for real-time bidirectional communication between the server and connected clients using WebSockets.
- **Cross-Origin Resource Sharing (CORS):** Configured to allow connections from any origin, making it accessible for clients hosted on different domains.
- **RESTful API:** Includes a simple RESTful API with a sample route ("/") for testing server availability.
- **User Authentication:** Generates unique user IDs for each connected socket, ensuring accurate message attribution.

## Getting Started

1. **Clone the Repository:**

   ```bash

   git clone https://github.com/mahmodghnaj/socket-server
   cd real-time-chat-server

   ```

## Install Dependencies:

```bash
npm install
npm start
```
