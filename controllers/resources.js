const Resource = require("../models/resource");
const User = require("../models/user");

module.exports = {
  create,
  search,
  updateResource,
  deleteResource,
  deleteFromSaved,
  randomResources,
  index,
  mySavedItems,
  addToSaved,
  getUpdatedResource
};

// Create a resource from user profile
function create(req, res) {
  req.body.creator = req.user._id;
  Resource.create(req.body)
    .then((resource) => {
      User.findById(req.user._id).then((user) => {
        user.savedItems.push(resource._id);
        user.save();
        res.json(resource);
      });
    })
    .catch((err) => {
      res.json(err);
    });
}

function index(req, res) {
  Resource.find({})
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      res.json(err);
    });
}

// Search a resource by text in the search bar
function search(req, res) {
  Resource.find({
    $text: {
      $search: `${req.body.queryString}`,
    },
  })
    .then((resource) => {
      res.json(resource);
    })
    .catch((err) => {
      res.json(err);
    });
}

// Return random resources on landing page, and on load for the search page
function randomResources(req, res) {
  Resource.aggregate([{ $sample: { size: 6 } }])
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      res.json(err);
    });
}

// Updateing resource for admins
function updateResource(req, res) {
  Resource.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((resource) => {
      res.json(resource);
    })
    .catch((err) => {
      res.json(err);
    });
}

// Delete resource for admins
function deleteResource(req, res) {
  Resource.findByIdAndDelete(req.params.id)
    .then((resource) => {
      res.json(resource);
    })
    .catch((err) => {
      res.json(err);
    });
}

// User can delete from collection
function deleteFromSaved(req, res) {
  User.findById(req.user._id)
  .then((user) => {
    let idx = user.savedItems.findIndex((r) => r == req.params.id)
    user.savedItems.splice(idx, 1);
    user.save()
    res.json(user); 
  })
  .catch((err) => {
    res.json(err);
  });
}

// My saved Resources
function mySavedItems(req, res) {
  User.findById(req.params.id)
    .populate("savedItems")
    .then((user) => {
      res.json(user);
    });
}

function addToSaved(req, res){
  User.findById(req.user._id)
  .then((user) => {
    user.savedItems.push(req.body._id)
    user.save()
    res.json(user)
  })
}

function getUpdatedResource(req, res){
  Resource.findById(req.params.id)
  .then((resource) => res.json(resource))
}