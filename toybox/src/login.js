$(document).ready(function() {
  $("#create-account-link").click(function(e){
      e.preventDefault();
      $(".toggle").hide();
      $("#create-account").show();
  });

  $("#signin-link").click(function(e){
      e.preventDefault();
      $(".toggle").hide();
      $("#sign-in").show();
  });
});
