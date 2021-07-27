var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

// first api which just responds to the request without any processing
app.get('/ping', (req, res) => {
  console.log("/ping");
  res.send('pong');
});

// second api which waits for 50 millis before responding 
app.get('/heavy-ping', (req, res) => {
  console.log("/ping");
  setTimeout(() => {
    console.info("eating time for demo");
    res.send('heavy pong');
  }, 50)
});

app.listen(3000, () => {
  console.log('server started');
});
