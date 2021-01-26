// bring in dependencies 

// define exports

// define functions for add, index, edit and delete

const User = require("../models/user");
const FlashCard = require("../models/FlashCard")

module.exports = {
  index,
  create,
  updateCard,
  deleteCard
}

function index(req, res){
  User.findById(req.params.id)
  .populate('flashCards')
  .then((user) => {
    res.json(user)
  })
  .catch((err) => {res.json(err)})
}

function create(req, res){
  req.body.creator = req.user._id
  FlashCard.create(req.body)
  .then((flashCard) => {
    User.findById(req.user._id).then((user) => {
      user.flashCards.push(flashCard._id)
      user.save()
      res.json(flashCard)
    })
  })
  .catch((err) => {
    res.json(err)
  })

}

function updateCard(req, res){
  FlashCard.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then((flashCard) => {
    res.json(flashCard)
  })
  .catch((err) => {
    res.json(err)
  })
}

function deleteCard(req, res){
  FlashCard.findByIdAndDelete(req.params.id)
  .then((flashCard) => {
    res.json(flashCard)
  })
  .catch((err) => {
    res.json(err)
  })
}