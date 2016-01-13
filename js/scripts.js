$(document).ready(function() {
  var height = parseInt(prompt("How tall are you in inches?"));

  if ((height <= 80) && (height >= 60)) {
    $(".tall").addClass("tall-bg");
    $(".medium").addClass("medium-bg");
  } else if ((height >= 45) && (height <= 59)) {
    $(".medium").addClass("medium-bg");
    $(".short").addClass("short-bg");
  } else if ((height <= 44) && (height >= 30)) {
    $(".short").addClass("short-bg");
  } else {
    alert("You do not fit the height requirements for any of our rides! We are sorry!")
  }
});
