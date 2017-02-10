var express = require('express');
var router = express.Router();
var Note = require('../models/note')

router.get('/', function(req, res) {
  Note.find(function(err, notes) {
    res.render('notes', {notes: notes});
  });
});

router.post('/', function(req, res) {
  new Note({
    title: req.body.title,
    description: req.body.description,
  }).save( function(err, note) {
    res.redirect('/notes');
  });
});

router.get('/:id', function(req, res) {
  Note.findById(req.params.id, function(err, note) {
    res.render('notes', { note: note });
  });
});

router.put('/:id', function(req, res) {
  var body = {
    title: req.body.title,
    description: req.body.description,
  }

  Note.findByIdAndUpdate(req.params.id, { $set: body }, function(err, note) {
  res.redirect('/notes/' + req.params.id)
  })
});

router.delete('/:id', function(req, res) {
  Note.findById(req.params.id, function(err, note) {
    note.remove( function(err, note) {
      res.redirect('/notes');
    });
  });
});

module.exports = router;
