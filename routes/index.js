
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};

exports.mail = function (req, res) {
    var nodemailer = require("nodemailer");
    var smtpTransport = nodemailer.createTransport("SMTP",{});

    var contact = req.body.contact;

    smtpTransport.sendMail({
    	from: "Contact Form <noreply@a-t-mag.com>",
	to: "Uber Studio <uber.hey@gmail.com>",
    	subject: "New signup to A-T newsletter!",
    	text: "Contact: "+contact.fullName+" <"+contact.email+">"
    }, function(error, response){
    	if(error){
    	    console.log(error);
    	}else{
    	    console.log("Message sent: " + response.message);
    	}
    });

    res.send('OK');

}
