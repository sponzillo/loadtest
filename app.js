var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

var count = 0;
// first api which just responds to the request without any processing
app.get('/ping', (req, res) => {
  console.log("/ping: " + count);
  count++;
  res.send('pong');
});


var hcount = 0;
// second api which waits for 50 millis before responding 
app.get('/heavy-ping', (req, res) => {
  console.log("/heavy-ping: " + hcount);
  hcount++;
  setTimeout(() => {
    console.info("eating time for demo");
    res.send('heavy pong');
  }, 50)
});

app.listen(3000, () => {
  console.log('server started');
});
