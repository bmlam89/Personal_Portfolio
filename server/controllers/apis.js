var mongoose = require('mongoose');
var Api = mongoose.model('Api');
var nodemailer = require("nodemailer");
module.exports = {
    send_comment: function(request,response)
    {
        var transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'portfolioblam@gmail.com',
                pass: '1qazxsW@'
            }
        })

        var mail_options = {
            from:'portfolioblam@gmail.com',
            to:'portfolioblam@gmail.com',
            subject:'portfolio comment',
            text:request.body.name+' sent: '+request.body.comment
        }

        transporter.sendMail(mail_options,function(err,info){
            if(err){
                console.log(err);
            }else{
                console.log('Email sent:',info.response);
            }
        });
        //console.log('test',request.body);
    }
}