const express = require('express')
const app   = express()
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const studentsRouter = require('./routes/students');
const resultsRouter = require('./routes/results');
const documentsRouter = require('./routes/documents');

app.use('/students', studentsRouter);
app.use('/results', resultsRouter);
app.use('/documents', documentsRouter);
  
app.listen(port, () => {
console.log(`Program dijalankan di http://localhost:${port}`)
})  