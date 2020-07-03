$("#subEmail").on("click", function(){
axios.post('https://email-servo.herokuapp.com/portfolio', {
    name: $("#nameForEmail").val(),
    email: $("#emailForEmail").val(),
    message: $("#messForEmail").val()
  })
  .then(function (response) {
    setTimeout(function(){
      $("#thanks-modal").css("opacity","1")
      $('#thanks-modal').show('fast')
    },1000)
  })
  .catch(function (error) {
    setTimeout(function(){
      $("#error-modal").css("opacity","1")
      $('#error-modal').show('fast')
    },1000)
  });
})

$("#subEmailMod").on("click", function(){
    axios.post('https://email-servo.herokuapp.com/portfolio', {
        name: $("#nameForEmailMod").val(),
        email: $("#emailForEmailMod").val(),
        message: $("#messForEmailMod").val()
      })
      .then(function (response) {
        setTimeout(function(){
          $("#thanks-modal").css("opacity","1")
          $('#thanks-modal').show('fast')
        },1000)
      })
      .catch(function (error) {
        setTimeout(function(){
          $("#error-modal").css("opacity","1")
          $('#error-modal').show('fast')
        },1000)      });
    })