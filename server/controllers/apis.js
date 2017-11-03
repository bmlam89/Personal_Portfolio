var mongoose = require('mongoose');
var Api = mongoose.model('Api');
var email = require("emailjs/email");
module.exports = {
    send_comment: function(request,response)
    {
        console.log("INSIDE SEND COMMENT")
        var server = email.server.connect({
            user:"portfolioblam@gmail.com",
            password:"1qazxsW@",
            host:"smtp.gmail.com",
            ssl:false
        });

        server.send({
            text:request.body.comment,
            from:"portfolioblam@gmail.com",
            to:"portfolioblam@gmail.com",
            subject:request.body.name+": portfolio comment"
        }, function(err,message){
            if(err){
                console.log(err);
            }
        }); 
    }
}