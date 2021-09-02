const app = require('./app.js')
const port = process.env.PORT

const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

module.exports = server