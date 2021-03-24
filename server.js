const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');


const dataPath = './data/';
const filenames = fs.readdirSync(dataPath);
const app = express();
const port = process.env.PORT || 5000;

console.log(filenames);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get('/api/all_diseases', (req, res) => {
    let filename = filenames.filter(f => f.indexOf('.json')!=-1)[0];
    let data = fs.readFileSync(dataPath + filename).toString().split('\r\n');
    //data = data.split('\n');
    res.send(data);
});

app.post('/ap/test', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));