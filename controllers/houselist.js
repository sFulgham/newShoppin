
//const db = require("../models");

const houseModel = [{
  id: '23456',
  shoppingList: [
    {
      count: 2,
      upc14: '00035200264013',
      upc12: '035200264013',
      brand: 'Riceland',
      name: 'Riceland American Jazmine Rice'
    },
    {
      count: 1,
      upc14: '00011111065925',
      upc12: '011111065925',
      brand: 'Caress',
      name: 'Caress Velvet Bliss Ultra Silkening Beauty Bar - 6 Ct'
    }
  ],
  'users': [
    {
      name: 'kishon',
      id: '11111'
    },
    {
      name: 'steven',
      id: '222222'
    }
  ]
}];

const userModel = [
  {
    name: 'kishon',
    id: '11111',
    houseId: '23456'
  },
  {
    name: 'steven',
    id: '222222',
    houseId: '11111'
  }
];

export { houseModel, userModel };

// Defining methods for the booksController
/*module.exports = {

  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};*/
