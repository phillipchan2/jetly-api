'use strict';
var express = require('express');
var router = express.Router();
var todosImpl = require('./todos.impl');

// new todo
router.post('/todo/:userId', function(req, res, callback) {});

// get todos of user
router.get('/todos/:userId', function(req, res, callback) {});

// edit todo
router.put('/todo/:userId', function(req, res, callback) {});

// delete todo
router.delete('/todo/:userId', function(req, res, callback) {});

// new comment