console.log("hello");


const express = require('express') //get express from express_modules
const app = express()
const port = 3000

app.use(express.static('public'))


//define routers behaviors, what to return on which request


// "/"route
app.get('/', (req, res) => {
  res.send('Bye World!')
})

// "/skye"route
app.get('/skye', (req, res) => {
  console.log(__dirname);//absolute path
  console.log("someone requested /skye");
  // res.send('Hi!')
  res.sendFile(__dirname+"/skye/index.html");
})

//start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
