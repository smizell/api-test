var express = require('express');
var app = express();

var data = require('./data');
var board = data.board;
var checkList = data.checkList;

app.get('/1/boards/:id', function(req, res) {
  console.log('Request received for GET board');
  return res.send(board);
});

app.get('/1/checklists/:id', function(req, res) {
  console.log('Request received for GET checklist');
  return res.send(checkList);
});

app.put('/1/checklists/:id', function(req, res) {
  console.log('Request received for PUT checklist');
  return res.send(checkList);
});

app["delete"]('/1/checklists/:id', function(req, res) {
  return res.sendStatus(204);
});

app.listen(3000);

console.log('Server started!');
