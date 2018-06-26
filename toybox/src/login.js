$(document).ready(function() {
  $("#create-account-link").click(function(e){
      e.preventDefault();
      $(".toggle").hide();
      $("#create-account").show();
  });
});

$(document).ready(function() {
  $("#signin-link").click(function(e){
      e.preventDefault();
      $(".toggle").hide();
      $("#sign-in").show();
  });
});
