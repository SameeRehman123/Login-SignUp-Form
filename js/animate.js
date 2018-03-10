var login = $('.login h3');
var signUp = $('.sign-up h3');
var loginPanel = $('.signIn');
var signUpPanel = $('.signUp');


login.click(function(){
  if(!loginPanel.hasClass('isShowing')){
    signUpPanel.addClass('animateOut');

    setTimeout(function(){
      signUpPanel.removeClass('animateOut isShowing');
      loginPanel.addClass('animateIn isShowing');
    }, 500);

    setTimeout(function(){
      loginPanel.removeClass('animateIn');
    }, 1300);
  }

});


signUp.click(function(){
  if(!signUpPanel.hasClass('isShowing')){
    loginPanel.addClass('animateOut');

    setTimeout(function(){
      loginPanel.removeClass('animateOut isShowing');
      signUpPanel.addClass('animateIn  isShowing');
    }, 500);

    setTimeout(function(){
      signUpPanel.removeClass('animateIn');
    }, 1300);
  }
});
