const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

// serve production build
app.use(express.static('dist'))

// ✅ health check endpoint
app.get('/health', (req, res) => {
  res.send('ok')
})

// optional (useful for exercise)
app.get('/version', (req, res) => {
  res.send('1')
})

const start = async () => {
  await app.listen(PORT)
  console.log(`server started on port ${PORT}`)
}

start()