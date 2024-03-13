"use strict"; // Enables strict mode, which catches common coding issues and throws exceptions

import { createServer } from "node:http"; // Imports the createServer function from the built-in 'http' module

// An array of product objects in JSON format
const data = JSON.stringify([
  {
    id: "A1",
    name: "Vacuum Cleaner",
    rrp: "99.99", // Recommended Retail Price
    info: "The most powerful vacuum in the world.",
  },
  {
    id: "A2",
    name: "Leaf Blower",
    rrp: "303.33",
    info: "This product will blow your socks off.",
  },
  {
    id: "B1",
    name: "Chocolate Bar",
    rrp: "22.40",
    info: "Delicious overpriced chocolate.",
  },
]);

// Creates a new HTTP server
const server = await createServer((_req, res_) => {
  // Set CORS headers to allow cross-origin requests
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Set the Content-Type header to application/json to indicate that the response will be in JSON format
  res.writeHead(200, { "Content-Type": "application/json" });

  // Send the JSON data as the response
  res.end(data);
});

// Start the server and listen on port 3000
server.listen(3000);
console.log("Server listening on port http://localhost:3000/");
