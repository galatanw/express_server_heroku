const express=require('express'),
app=express(),
PORT=8080;
app.use(express.json())

app.get("*",(req,res)=>{
    res.send('hello')
})
app.listen(PORT,()=>{
    console.log(`LISTENING TO ${PORT}`);
})

