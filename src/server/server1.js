const express = require('express');
const mongoose = require('mongoose');
require('express-async-errors');
const Item = require('./itemModel');
const error = require('./error');
const cors = require('cors');

const app = express();

mongoose.connect(
  'mongodb://localhost:27017/item_list',
  { useNewUrlParser: true }
);

app.use(express.json());
app.use(error);

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({ info: 'lost&found version1.0' });
});

app.post('/addItem', async (req, res) => {
  let newItem = new Item(req.body);
  await newItem.save(err => {
    if (err) return res.send(err);
    return res.send({ message: newItem });
  });
});

app.get('/itemList', async (req, res) => {
  await Item.find({}, (err, list) => {
    if (err) return res.send(err);
    return res.send({ message: list });
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`app listening on port ${port}...`));
