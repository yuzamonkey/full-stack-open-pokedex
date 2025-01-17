const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('4, this should be skipped when merged from foo branch.') // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`) // eslint-disable-line
})
