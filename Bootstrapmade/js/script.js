window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.background = "rgba(40, 58, 90, 0.9)";
  } else {
    document.getElementById("navbar").style.background = "rgb(55, 81, 126)";
  }
}