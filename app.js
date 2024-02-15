const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 9001;

app.listen(port, () => {
  console.log(`Sever running on port: http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/connect", (req, res) => {
  const response = {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: "Hello, World!" }),
  };
  return response;
});

module.exports = app;
