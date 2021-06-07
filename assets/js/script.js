
$(".header .header__bars").on('click', function () {

  var selector = $(".header .header__nav")

  if (selector.hasClass('shown')) {
    selector.css('right', "100%");
    selector.removeClass('shown');
  } else {
    selector.css('right', "0");
    selector.addClass('shown');
  }
});

$(".header .header__nav span").on('click', function () {

  var selector = $(".header .header__nav")

  if (selector.hasClass('shown')) {
    selector.css('right', "100%");
    selector.removeClass('shown');
  } else {
    selector.css('right', "0");
    selector.addClass('shown');
  }
});

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 1 && !$(".work").hasClass("scrolled")) {
    $(".work").addClass("scrolled");
  }
  if ($(window).scrollTop() < 1 && $(".work").hasClass("scrolled")) {
    $(".work").removeClass("scrolled");
  }
});

$(".hero__wrapper").on("click", function (e) {
  e.preventDefault();
  if ($(e.target).is("a")) {
    if (!$(".work").hasClass("scrolled")) {
      $(".work").addClass("scrolled");
      $('html, body').animate({
        scrollTop: $(".work__wrapper").offset().top - 144
      }, 1000);
    }
  }
});


$(".work").on("click", function (e) {
  if ($(e.target).hasClass("text-link")) {
    e.preventDefault();
    WorkRequestFunc();
    $(e.target).addClass("hidden");
  }
});

function WorkRequestFunc() {
  var WorkRequest = new XMLHttpRequest();
  WorkRequest.open("GET", "assets/js/work.json");
  WorkRequest.onload = function () {
    var WorkData = JSON.parse(WorkRequest.responseText);
    var WorkStr = "";
    for (i = 0; i < WorkData.length; i++) {
      WorkStr += "<a href=" + WorkData[i]["src"] + " data-effect=" + "\"mfp-zoom-in\"" + " class=\"work__single work__anim\"" + ">" + "<img src=" + WorkData[i]["src"] + " alt=" + WorkData[i]["alt"] + "></a>";

    }
    $(".work__wrapper").append(WorkStr);
  }
  WorkRequest.send();
}

function heightFix() {
  var biggestHeight = 0;
  // Loop through elements children to find & set the biggest height
  $(".height-fix *").each(function () {
    // If this elements height is bigger than the biggestHeight
    if ($(this).height() > biggestHeight) {
      // Set the biggestHeight to this Height
      biggestHeight = $(this).height();
    }
  });

  // Set the container height
  $(".height-fix").height(biggestHeight);
}

heightFix();

$(window).on('resize', function () {
  heightFix();
});

var clientSlider = new Swiper(".clients__slider", {
  loop: true,
  speed: 800,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
    },
    767.98: {
      slidesPerView: 3,
    },
    991.98: {
      slidesPerView: 5,
    },
  }
});

$(window).on('load', function () {
  heightFix();
});
