const { ObjectId } = require('mongodb')
const send = require('../utils/sendResponse')

const getTodos = async (req, res) => {
  const { db } = req

  try {
    let todos = await db.collection('list').find()
    todos = await todos.toArray()

    send.data(res, todos)
  } catch (err) {
    console.log(err)
    send.serverError(res)
  }
}

const addTodo = async (req, res) => {
  const { db } = req
  const { title } = req.body

  try {
    db.collection('list').insertOne(
      {
        title,
        isCompleted: false,
      },
      (err, result) => {
        if (err) throw 'Gagal menambahkan data'
      }
    )

    send.created(res)
  } catch (err) {
    console.log(err)
    send.serverError(res)
  }
}

const editTodo = async (req, res) => {
  const { db } = req
  const { id } = req.params

  try {
    db.collection('list')
      .updateOne(
        {
          _id: ObjectId(id),
        },
        { $set: { ...req.body } }
      )
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        throw 'Gagal mengubah data'
      })

    send.updated(res)
  } catch (err) {
    console.log(err)
    send.serverError(res)
  }
}

const deleteTodo = async (req, res) => {
  const { db } = req
  const { id } = req.params

  try {
    db.collection('list')
      .deleteOne({
        _id: ObjectId(id),
      })
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        throw 'Gagal menghapus data'
      })

    send.deleted(res)
  } catch (err) {
    console.log(err)
    send.serverError(res)
  }
}

module.exports = { getTodos, addTodo, editTodo, deleteTodo }
