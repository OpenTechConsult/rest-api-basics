const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.options("*", (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Authorization, Content-Length, X-Requested-With')
    res.send(200)
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use((req, res, next) => {
    console.log(`$`)
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))