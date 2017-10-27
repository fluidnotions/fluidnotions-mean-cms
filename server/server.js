const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const fileUpload = require('express-fileupload');
const app = express();
const Gallery = require('express-photo-gallery');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(fileUpload());


app.use('/static', express.static(path.join(__dirname, 'public')))


 
var options = {
  title: 'Media'
};
 
app.use('/photos', Gallery(path.join(__dirname, 'public'), options));

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));

const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://admin:56tfcvbnh@ds143071.mlab.com:43071/fndv1', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

app.post('/upload', (req, res) => {
  if (!req.files)
    return res.status(400).send('No files were uploaded.');
 
  let uploadFile = req.files.uploadFile;
 
  // Use the mv() method to place the file somewhere on your server
  uploadFile.mv(path.join(__dirname, 'public/'+uploadFile.name), function(err) {
    if (err)
      return res.status(500).send(err);

      res.send({"success": true});
  });
});

app.post('/content-item',  (req, res) => {
  console.log(req.body);
  res.send({ status: 'SUCCESS' });
});