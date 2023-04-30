const express = require('express');
// const connection = require('../database/db')
const { getTodo, createTodo, deleteTodo } = require('./controller/index')
const router = express.Router();

router.get("/get", getTodo);

router.post("/add", createTodo);

router.delete("/delete/:id", deleteTodo);

module.exports = router;




