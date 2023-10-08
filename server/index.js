const express = require('express');
const app = express();
require('dotenv').config();


const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello, Render!12311213223');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  

});