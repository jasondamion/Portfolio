$("#subEmail").on("click", function(){
axios.post('https://email-servo.herokuapp.com/portfolio', {
    name: $("#nameForEmail").val(),
    email: $("#emailForEmail").val(),
    message: $("#messForEmail").val()
  })
  .then(function (response) {
    console.log("Email Sent");
  })
  .catch(function (error) {
    console.log("Error sending email: "+ error);
  });
})

$("#subEmailMod").on("click", function(){
    axios.post('https://email-servo.herokuapp.com/portfolio', {
        name: $("#nameForEmailMod").val(),
        email: $("#emailForEmailMod").val(),
        message: $("#messForEmailMod").val()
      })
      .then(function (response) {
        console.log("Email Sent");
      })
      .catch(function (error) {
        console.log("Error sending email: "+ error);
      });
    })