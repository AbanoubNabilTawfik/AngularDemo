//express
const express= require('express');

//body-parser
const bodyParser=require('body-parser');

//cors
const cors=require('cors');

//define port
const PORT=3000;

//intialze express instance
const app =express();

//specify body parser
app.use(bodyParser.json());

//allow cors

app.use(cors());

app.get('/',function(req,res){
    res.send('Hello from express node server');
})

app.listen(PORT,function(){
    console.log("Now server listen in port"+PORT)
})

app.post('/enroll',function(req,res){
    console.log(req.body);
    res.status(200).send({"data":"Recived successfully"})
})






