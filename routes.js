const connection = require('./connection');
const express = require('express');
const router = express.Router();
const TaskController = require('./taskController'); // Corrige o caminho

router.post('/novoAluno', TaskController.novoAluno);

module.exports = router;
