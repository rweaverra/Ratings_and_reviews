
const express = require('express');

const app = express();

app.use(express.static('dist'));

app.listen(3004, () => {
  console.log('Related Products is listening on port 3004');
});