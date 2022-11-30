$("#subEmail").on("click", function () {
  let name = $("#nameForEmail");
  let email = $("#emailForEmail");
  let message = $("#messForEmail");

  if (name.valid() && email.valid() && message.valid()) {
    axios.post('https://email-servo.herokuapp.com/portfolio', {
      name: name.val(),
      email: email.val(),
      message: message.val()
    })
      .then(function (response) {
        setTimeout(function () {
          $("#thanks-modal").css("opacity", "1")
          $('#thanks-modal').show('fast')
          name.val("")
          email.val("")
          message.val("")
        }, 1000)
      })
      .catch(function (error) {
        setTimeout(function () {
          $("#error-modal").css("opacity", "1")
          $('#error-modal').show('fast')
        }, 1000)
      });
  }
})

$("#subEmailMod").on("click", function () {
  let name = $("#nameForEmailMod");
  let email = $("#emailForEmailMod");
  let message = $("#messForEmailMod");

  if (name.valid() && email.valid() && message.valid()) {
    axios.post('https://email-servo.herokuapp.com/portfolio', {
      name: name.val(),
      email: email.val(),
      message: message.val()
    })
      .then(function (response) {
        setTimeout(function () {
          $("#thanks-modal").css("opacity", "1")
          $('#thanks-modal').show('fast')
          name.val("")
          email.val("")
          message.val("")
        }, 1000)
      })
      .catch(function (error) {
        setTimeout(function () {
          $("#error-modal").css("opacity", "1")
          $('#error-modal').show('fast')
        }, 1000)
      });
  }
})