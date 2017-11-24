const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');
const publicPath = path.join(__dirname, '..',  'public');

app.use(express.static(publicPath))

//setup express for client-side routing
app.get('*', (req, res) => {
  res.sendfile(path.join(publicPath, 'index.html'))
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
});