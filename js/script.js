(function($) {
  ("use strict");

  // Windows load

  $(window).on("load", function () {
    // Site loader

    $(".loader-inner").fadeOut();
    $(".loader").delay(200).fadeOut("slow");
  });

  // Scroll to

  $("a.scroll").smoothScroll({
    speed: 800,
    offset: -60,
  });

  // Cookies

  const acceptCookiesButton = document.getElementById("accept-cookies");
  acceptCookiesButton.addEventListener("click", function () {
    document.cookie =
      "cookies-accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
    document.querySelector(".cookie-bar").style.display = "none";
  });

  if (document.cookie.indexOf("cookies-accepted=true") !== -1) {
    document.querySelector(".cookie-bar").style.display = "none";
  }

  // Site navigation setup

  var header = $(".header"),
    pos = header.offset(),
    blockTop = $(".block-top");

  $(window).scroll(function () {
    if ($(this).scrollTop() > pos.top + 500 && header.hasClass("default")) {
      header.fadeOut("fast", function () {
        $(this).removeClass("default").addClass("switched-header").fadeIn(200);
        blockTop.addClass("active");
      });
    } else if (
      $(this).scrollTop() <= pos.top + 500 &&
      header.hasClass("switched-header")
    ) {
      header.fadeOut("fast", function () {
        $(this).removeClass("switched-header").addClass("default").fadeIn(100);
        blockTop.removeClass("active");
      });
    }
  });

  //Hero resize

  var mainHero = $(" .hero .main-slider .slides li");
  function mainHeroResize() {
    mainHero.css("height", $(window).height());
  }

  $(function () {
    mainHeroResize();
  }),
    $(window).resize(function () {
      mainHeroResize();
    });

  // Cambio HORA en html
  let intervalId = null;

  function isWeekday() {
    const now = new Date().toLocaleString("en-US", {
      timeZone: "America/Bogota",
    });
    const dayOfWeek = new Date(now).getDay();
    return dayOfWeek > 0 && dayOfWeek < 6;
  }

  function updateLiveStatus() {
    const now = new Date().toLocaleString("en-US", {
      timeZone: "America/Bogota",
    });
    const hour = parseInt(now.split(" ")[1].split(":")[0]);
    const minute = parseInt(now.split(" ")[1].split(":")[1]);
    const amPm = now.split(" ")[2];

    if (`${hour}:${minute}:${amPm}` < "1:00:PM") {
      const live = document.getElementById("live");
      live.innerText = "Lunes a Viernes \n \n  1:00 pm - 3:00 pm";
    }

    if (`${hour}:${minute}:${amPm}` >= "1:00:PM") {
      const live = document.getElementById("live");
      live.innerText = "EN VIVO";
    }

    if (`${hour}:${minute}:${amPm}` >= "3:00:PM") {
      const postLive = document.getElementById("live");
      postLive.innerText = "Lunes a Viernes \n \n  1:00 pm - 3:00 pm";
      clearInterval(intervalId);
    }
  }

  if (isWeekday()) {
    const vsImage = document.getElementById("vs");
    vsImage.style.display = "none";
    intervalId = setInterval(updateLiveStatus, 1000);
  }

  // FIN DE SEMANA

  function isWeekend() {
    const now = new Date().toLocaleString("en-US", {
      timeZone: "America/Bogota",
    });
    const dayOfWeek = new Date(now).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  }

  function updateLiveStatus() {
    const now = new Date().toLocaleString("en-US", {
      timeZone: "America/Bogota",
    });
    const hour = parseInt(now.split(" ")[1].split(":")[0]);
    const minute = parseInt(now.split(" ")[1].split(":")[1]);
    const amPm = now.split(" ")[2];

    if (`${hour}:${minute}:${amPm}` < "3:00:PM") {
      const live = document.getElementById("live");
      live.innerText = "3:00 pm";
      const vsImage = document.getElementById("vs");
      vsImage.style.display = "block";
    }

    if (`${hour}:${minute}:${amPm}` >= "3:00:PM") {
      const live = document.getElementById("live");
      live.innerText = "EN VIVO";
      const vsImage = document.getElementById("vs");
      vsImage.style.display = "block";
    }

    if (`${hour}:${minute}:${amPm}` >= "5:00:PM") {
      const postLive = document.getElementById("live");
      postLive.innerText = "Lunes a Viernes \n \n  1:00 pm - 3:00 pm";
      const vsImage = document.getElementById("vs");
      vsImage.style.display = "none";
      clearInterval(intervalId);
    }
  }

  if (isWeekend()) {
    intervalId = setInterval(updateLiveStatus, 1000);
  }


  //    let intervalId = null;

  //    function updateLiveStatus() {
  //      const now = new Date().toLocaleString("en-US", { timeZone: "America/Bogota" });
  //      const hour = parseInt(now.split(" ")[1].split(":")[0]);
  //      const minute = parseInt(now.split(" ")[1].split(":")[1]);
  //      const amPm = now.split(" ")[2];

  //      console.log(now);

  //      switch (`${hour}:${minute}:${amPm}`) {
  //        case "4:12:PM":
  //          const live = document.getElementById("live");
  //          live.innerText = "EN VIVO";
  //          break;

  //          case "4:13:PM":
  //             const postLive = document.getElementById("live");
  //             postLive.innerText = "FINALIZADO";
  //             default:
  //             break;
  //         }

  //     }

  //     intervalId = setInterval(updateLiveStatus, 1000);

  // case "8:30:PM":
  //     const postLive = document.getElementById("live");
  //     postLive.innerText = "FINALIZADO";
  //     const postImg = document.getElementById("vs");
  //     postImg.src = "../img/vs1.png";
  //     clearInterval(intervalId);
  //     default:
  //     break;
  // }

  // let intervalId = null;

  //       function updateLiveStatus() {
  // // Obtener la hora actual en Colombia
  //   const now = new Date().toLocaleString("en-US", {timeZone: "America/Bogota"});
  //   const hour = parseInt(now.split(" ")[1].split(":")[0]);
  //   const minute = parseInt(now.split(" ")[1].split(":")[1]);
  //   const amPm = now.split(" ")[2];

  //  if (hour < 5 || (hour === 5 && minute < 0) || (hour === 5 && minute > 0 && amPm !== "AM")) {
  //     // Si la hora actual es antes de las 5:00 AM o es después de las 5:00 AM y ya ha pasado, salir sin hacer nada.
  //     return;
  //   } else {

  //   // Si es la hora deseada, cambiar el texto y la imagen
  //   const live = document.getElementById("live");
  //   live.innerText = "5:30 pm";
  //   const img = document.getElementById("vs");
  //   img.src = "../img/vs1.png";

  //   }

  //   if (hour < 5 || (hour === 5 && minute < 0) || (hour === 5 && minute > 0 && amPm !== "AM")) {
  //     // Si la hora actual es antes de las 5:00 AM o es después de las 5:00 AM y ya ha pasado, salir sin hacer nada.
  //     return;
  //   } else {

  //   // Si es la hora deseada, cambiar el texto y la imagen
  //   const live = document.getElementById("live");
  //   live.innerText = "5:30 pm";
  //   const img = document.getElementById("vs");
  //   img.src = "../img/vs1.png";
  //   clearInterval(intervalId);
  //   }
  // }

  // intervalId = setInterval(updateLiveStatus, 1000);

  // Audio Player

  const audioPlayer = document.getElementById("audio-player");
  const videoPlayBut = document.querySelector(".video-play-but");
  videoPlayBut.addEventListener("click", function () {
    if (audioPlayer.paused) {
      audioPlayer.play();
      videoPlayBut.classList.add("paused");
    } else {
      audioPlayer.pause();
      videoPlayBut.classList.remove("paused");
    }
  });

  // Slider

  $(".main-slider").flexslider({
    animation: "fade",
    slideshow: true,
    directionNav: false,
    controlNav: true,
    pauseOnAction: false,
    animationSpeed: 1000,
  });

  $(".review-slider").flexslider({
    animation: "slide",
    slideshow: true,
    directionNav: true,
    controlNav: false,
    pauseOnAction: false,
    animationSpeed: 500,
  });

  // Mobile menu

  var mobileBtn = $(".mobile-but");
  var nav = $(".main-nav ul.main-menu");
  var navHeight = nav.height();

  $(mobileBtn).on("click", function () {
    $(".toggle-mobile-but").toggleClass("active");
    nav.slideToggle();
    $(".main-nav li a").addClass("mobile");
    return false;
  });

  $(window).resize(function () {
    var w = $(window).width();
    if (w > 320 && nav.is(":hidden")) {
      nav.removeAttr("style");
      $(".main-nav li a").removeClass("mobile");
    }
  });

  // Append images as css background

  $(".background-img").each(function () {
    var path = $(this).children("img").attr("src");
    $(this)
      .css("background-image", 'url("' + path + '")')
      .css("background-position", "initial");
  });

  // Count down setup

  $(".countdown")
    .countdown("2019/12/20")
    .on("update.countdown", function (event) {
      var $this = $(this).html(
        event.strftime(
          "" +
            '<div class="counter-bg mb-4 mb-lg-0"><span class="counter">%d</span> <span class="label">day%!d</span></div> ' +
            '<div class="counter-bg mb-4 mb-lg-0"><span class="counter">%H</span> <span class="label">hr%!H</span></div> ' +
            '<div class="counter-bg mb-4 mb-lg-0"><span class="counter">%M</span> <span class="label">min%!M</span></div> ' +
            '<div class="counter-bg"><span class="counter">%S</span> <span class="label">sec%!S</span></div>'
        )
      );
    });

  //Twitter setup

  var config = {
    profile: { screenName: "mutationthemes" },
    domId: "tweets",
    maxTweets: 3,
    showRetweet: false,
    showImages: false,
    showUser: true,
    showTime: true,
    customCallback: handleTweets,
  };

  function handleTweets(tweets) {
    var x = tweets.length;
    var n = 0;
    var element = $(".tweets");
    var listOfTweets = $("<ul>").addClass("slides");
    while (n < x) {
      var thisTweet = $("<li>");
      thisTweet.html(tweets[n]);
      listOfTweets.append(thisTweet);
      n++;
    }
    element.html(listOfTweets);
    $(".tweets").flexslider({
      animation: "slide",
      controlNav: true,
      directionNav: false,
    });
    return listOfTweets;
  }
  twitterFetcher.fetch(config);

  // Tabbed content

  $(".block-tabs li").on("click", function () {
    if (!$(this).hasClass("active")) {
      var tabNum = $(this).index();
      var nthChild = tabNum + 1;
      $(".block-tabs li.active").removeClass("active");
      $(this).addClass("active");
      $(".block-tab li.active").removeClass("active");
      $(".block-tab li:nth-child(" + nthChild + ")").addClass("active");
    }
  });

  //Popup elements

  $(".popup-image").magnificPopup({
    type: "image",
    fixedContentPos: false,
    fixedBgPos: false,
    mainClass: "mfp-no-margins mfp-with-zoom",
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 300,
    },
  });

  $(".popup-youtube, .popup-vimeo").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  //Search form setup

  var btn = $(".main-nav li span.search-ico");
  var searchForm = {
    container: $(".block-search-form"),

    config: {
      effect: "slideToggle",
      speed: "300",
    },

    init: function (config) {
      $.extend(this.config, config);
      btn.on("click", this.show);
    },

    show: function () {
      var sf = searchForm,
        container = sf.container,
        config = sf.config;

      if (container.is(":hidden")) {
        searchForm.close.call(container);
        searchForm.container[config.effect](config.speed);
      }
    },

    close: function () {
      var $this = $(this);

      if ($this.find("span.search-close").length) return;

      document.onkeydown = function (e) {
        e = e || window.event;
        if (e.keyCode == 27) {
          $this[searchForm.config.effect](searchForm.config.effect.speed);
        }
      };

      $("<span class=close-search></span>")
        .prependTo($this)
        .on("click", function () {
          $this[searchForm.config.effect](searchForm.config.effect.speed);
        });
    },
  };

  searchForm.init({
    effect: "fadeToggle",
    speed: "300",
  });
})(jQuery);