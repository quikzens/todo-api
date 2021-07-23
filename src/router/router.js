const { Router } = require('express')

// Controller
const {
  getTodos,
  addTodo,
  editTodo,
  deleteTodo,
} = require('../controller/todo')

const router = Router()

router.get('/todos', getTodos)
router.post('/todo', addTodo)
router.patch('/todo/:id', editTodo)
router.delete('/todo/:id', deleteTodo)

module.exports = router
