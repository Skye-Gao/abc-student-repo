console.log("hello");
const express = require('express') //get express from express_modules
const app = express()
const port = 3000
// const secret = "15";
let answer=["be right back","Finding Nemo","love letter","movie clip","Norway","norway","finding nemo","Finding nemo"];

app.use(express.static('public'))

//define routers behaviors, what to return on which request
// "/"route
// app.get('/', (req, res) => {
//   res.send('Bye World!')
// })

// // "/skye"route
app.get('/answer', (request, response) => {

  let query = request.query;
  let guess = query.word;
  console.log(query);
  console.log(answer.includes(guess));

  let correct=answer.includes(guess);

  if (correct==true){
    console.log("let them into the garden");
    response.redirect("/correct");
  }else{
    console.log("something is fishy");
    response.redirect("/wrong");
  }

  console.log("-------------")

  // console.log(__dirname);//absolute path
  // console.log("someone requested /skye");
  // let answer=req.query.answer;
  // res.send('Hi!')
  // console.log(req.query);
  // res.sendFile(__dirname+"/skye/index.html");
})

//start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  })
