var express =require("express")
var fs=require("fs")
var generator=require("generate-password")
var mailer=require("nodemailer")
var transport=mailer.createTransport({
    service:"gmail",
    auth:{
        user:"mygmail",
        pass:"mypassword",
    },
})
var mailop={
  from:"mygmail",
  to:"othergmail",
  subject:"first automated mail" ,
  text:"that was easy" ,

};
transport.sendMail(mailop,(error,data)=>{
    if(error){
console.log(error)
    }
    else{
        console.log("email sent" +data.response)
    }
})

var pass=generator.generate({
    length:8,
    number:false,
})
console.log(pass)
const app=express()
//console.log("hello world")
fs.readFile("welcome.txt",(erro,data)=>{
 if(erro) {
  return  console.error(erro)
 }  
 console.log("the message is :", data.toString())

})


app.listen(3000,()=>{console.log("hello node")})

