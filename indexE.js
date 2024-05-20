// reqire the express module

const express =require('express');

//  create a new express application

const app = express();

// define the first route
app.get('/',(req,res) => {
    res.send('Hello Student');
})


//start the express application on port 3001

app.listen(3001,() =>{
    console.log(`server is running on http:localhost:3001`);
})