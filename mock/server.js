const express = require('express')
var cors = require('cors')
const server = express()

server.use(cors())

const successJson = {
  token: 'ba7c2cf6c55e3e382f2f48231aafc6b8725d723b',
  expires: 1567619449,
  user_id: 21432
}

const failPassword = {
  success: false,
  code: 106,
  message: 'Wrong password for user'
}

const failUser = {
  success: false,
  code: 108,
  message: 'Wrong username'
}

server.post('/login', (req, res) => {
  const rnd = Math.floor(Math.random() * 3)

  if (rnd > 1) {
    res.json(successJson)
  } else {
    if (rnd > 0) {
      res.json(401, failPassword)
    } else {
      res.json(401, failUser)
    }
  }
})

server.listen(80, () => console.log('Mock server it\'s runnig'))
