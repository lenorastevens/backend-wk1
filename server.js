const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send("Hello, CSE 341. Today is rainy.");
});

const port = 8080;
 
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});