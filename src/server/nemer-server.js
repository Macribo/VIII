const express = require('express');
const mongoose = require('mongoose');
const Item = require('./itemModel');
const cors = require('cors');
const app = express();

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true
};

app.use(cors(corsOptions));
mongoose.connect(
  'mongodb://localhost:27017/item_list',
  { useNewUrlParser: true }
);

app.get('/', (req, res) => {
  res.json({ info: 'lost&found version1.0' });
});

app.post('/addItem', (req, res) => {
  let newItem = new Item(req.body);

  newItem.save(err => {
    if (err) return res.send(err);
    return res.send({ message: newItem });
  });
});

app.get('/itemList', (req, res) => {
  Item.find({}, (err, list) => {
    if (err) return res.send(err);
    return res.send({ message: list });
  });
});

app.listen(8000, () => console.log('app listening on port 8000'));
console.log('Nemer1.0 server listen on 8000');
