$(document).ready(function () {
  $(".next-btn").click(function () {
    var currentStep = $(this).parents(".step");
    var nextStep = currentStep.next(".step");

    if (nextStep.length) {
      currentStep.removeClass("active");
      nextStep.addClass("active");
    }
  });

  // $(".prev-btn").click(function () {
  //   var currentStep = $(this).parents(".step");
  //   var prevStep = currentStep.prev(".step");

  //   if (prevStep.length) {
  //     currentStep.removeClass("active");
  //     prevStep.addClass("active");
  //   }
  // });
});

$(document).ready(function () {
  $('.next-btn').addClass('disabled');

  $('select, input[type="password"]').on('input change', function () {
    var button = $(this).closest('.step').find('.next-btn');
    var img = $(this).closest('.step').find('.img-2');
    if ($(this).val().length > 0) {
      button.removeClass('disabled');
      button.addClass('enabled');
      img.css('filter', 'blur(0px)');
    } else {
      button.removeClass('enabled');
      button.addClass('disabled');
      img.css('filter', 'blur(15px)');
    }
  });
});

$(document).ready(function () {
  $('#username').on('keyup', function () {
    var username = $(this).val();
    var usernameError = $('#username-error');
    var nextBtn = $('#next-btn');
    var img = $('.img-2');

    if (username.length < 5) {
      usernameError.show();
      nextBtn.addClass('disabled');
      img.css('filter', 'blur(15px)');
    } else {
      usernameError.hide();
      nextBtn.removeClass('disabled');
      img.css('filter', 'blur(0px)');
    }
  });
});
$(document).ready(function () {
  $('#email').on('keyup', function () {
    var email = $(this).val();
    var emailError = $('#email-error');
    var nextBtn = $('#submit-btn');
    var img = $('.img-3');

    if (!validateEmail(email)) {
      emailError.show();
      nextBtn.addClass('disabled');
      img.css('filter', 'blur(15px)');
    } else {
      emailError.hide();
      nextBtn.removeClass('disabled');
      img.css('filter', 'blur(0px)');
    }
  });
});





function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}



// $('#stur').validate({
//   submitHandler: function (form) {
//     signin(1);
//     return false;
//   },
//   errorElement: "span",
//   errorClass: "help-inline",
//   rules: {
//     username: {
//       minlength: 3,
//       noSpace: true,
//       required: true
//     },
//     email1: {
//       email: true,
//       required: true
//     }, email2: {
//       email: true
//     }, email3: {
//       email: true
//     }
//     , eula: {
//       required: true
//     }
//   },
//   highlight: function (element, messages) {
//     $(element).closest('.control-group').removeClass('success').addClass('error');

//   },
//   success: function (element) {
//     $(element).closest('.control-group').removeClass('error').addClass('success');
//   }
// });