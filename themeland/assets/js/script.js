$('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed:1000,
    autoplaySpeed: 2000,
    infinite: true,
    dots: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });
  $('.autoplay-avatar').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed:1000,
    infinite: true,
    dots: true,
  });

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700 || window.pageYOffset > 700) {
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "#ffffff";
    document.getElementsByClassName("navbar")[0].style.position = "fixed";
    document.getElementById("logo-white").style.display = "none";
    document.getElementById("logo-blue").style.display = "inline";
    for (let item of document.getElementsByClassName('nav-link-txt')){
      item.classList.remove('text-white');
      item.style.color = '#606060';}
  } else {
    document.getElementsByClassName("navbar")[0].style.backgroundColor = "rgba(0,0,0,0)";
    document.getElementsByClassName("navbar")[0].style.position = "absolute";
    document.getElementById("logo-white").style.display = "inline";
    document.getElementById("logo-blue").style.display = "none";
    for (let item of document.getElementsByClassName('nav-link-txt')){
      item.classList.add('text-white');
      item.style.color = '#ffffff';}
  }
}
scrollFunction();