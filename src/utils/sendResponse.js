const serverError = (res) => {
  res.status(500).send({
    status: 'failed',
    message: 'internal server error',
  })
}

const data = (res, data) => {
  res.status(200).send({
    status: 'success',
    message: 'resources has successfully get',
    data,
  })
}

const created = (res) => {
  res.status(201).send({
    status: 'success',
    message: 'resource has successfully created',
  })
}

const updated = (res) => {
  res.status(200).send({
    status: 'success',
    message: 'resource has successfully updated',
  })
}

const deleted = (res) => {
  res.status(200).send({
    status: 'success',
    message: 'resource has successfully deleted',
  })
}

module.exports = {
  serverError,
  data,
  created,
  updated,
  deleted,
}
