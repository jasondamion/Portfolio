var nodemailer = require('nodemailer');

$("#contact-submit").on("click", function(){
event.preventDefault();
//Variables for the content of the gmail
var Name = $("#Name").value();
var Email = $("#Email").value();
var Body = $("#Body").value();


// async..await is not allowed in global scope, must use a wrapper
async function main(){

  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'jasonfswd@gmail.com',
           pass: 'Nelson2009'
       }
   });

  // setup email data with unicode symbols
  const mailOptions = {
    from: Name,// sender address
    to: Email, // list of receivers
    subject: 'Inquiry For Website', // Subject line
    html: Body // plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });
}

main().catch(console.error);
})

var link = document.getElementById("back-to-top");
  var amountScrolled = 250;

function addClass(el, className) {

    if (el.classList) {
        el.classList.add(className);
    } else {
        el.className += ' ' + className;
    }

}

function removeClass(el, className) {
    if (el.classList)
      el.classList.remove(className);
    else
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');    
}
  
window.addEventListener('scroll', function(e) {
     if ( window.scrollY > amountScrolled ) {
         addClass(link, 'show');
     } else {
         removeClass(link, 'show');
     }
 });