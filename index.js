const express = require('express')
const app   = express()
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const studentsRouter = require('./routes/students');
const resultsRouter = require('./routes/results');
const documentsRouter = require('./routes/documents');
const registersRouter = require('./routes/registers');

app.use('/students', studentsRouter);
app.use('/results', resultsRouter);
app.use('/documents', documentsRouter);
app.use('/register', registersRouter);
  
app.listen(port, () => {
console.log(`Program dijalankan di http://localhost:${port}`)
})  