const express = require('express');
const parser = require('body-parser')
const path = require('path')
const cors = require('cors');
const db = require('../db/index.js')

/* Initialize Express App */
let app = express();

/* Configure Express App */
app.use(cors());
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(parser.json());

/* Routes */

app.get('/buy/:productName', (req, res) => {
  res.sendFile(path.resolve('react-client/dist/index.html'))
})
 
app.get('/productImages/:productName', (req,res) => {
  let productName = req.url.split('/')[2]
  db.getProductRecord(productName, (err, data) => {
    if(err) {
      if (err.message === '404') res.status(404).send(err)
      else res.status(500).send(err)
    }
    else {
      res.send(data)
    }
  })
})

/* Use Test Data in testJson.js */
app.post('/productImages', (req, res) => {
  db.createProductRecord(req.body, (err, record) => {
    if (err) {
      console.log(err)
      res.status(500).send(err)
    }
    else res.send(record)
  });
})

/* Start Server */
app.listen(3000, () => {
  console.log('listening on 3000')
})