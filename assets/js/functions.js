// conflict bugg solution
var $ = jQuery.noConflict();

$(function () {
  // $('.banner--wrapper .scroll--down__arrow').on('click', function (e) {
  //   // var href = $(this).attr('href');
  //   e.preventDefault();

  //   $('html, body').animate({
  //     scrollTop: $('section:nth-child(2)').offset().top
  //   }, '5000');
  // });

  /* Show Header when scroll up */
  /* ------------------------------------------- */
  var lastScrollTop = 0;
  var $header = $("header");
  var headerHeight = $header.outerHeight();

  $(window).scroll(function () {
    var windowTop = $(window).scrollTop();

    if (windowTop >= headerHeight) {
      $header.addClass("header-sticky");
    } else {
      $header.removeClass("header-sticky");
      $header.removeClass("header-show");
    }

    if ($header.hasClass("header-sticky")) {
      if (windowTop < lastScrollTop) {
        $header.addClass("header-show");
      } else {
        $header.removeClass("header-show");
      }
    }
    lastScrollTop = windowTop;
  });

  /* Main Nav */
  /* ------------------------------------------- */

  $('.menu-item-has-children > a').on('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    $(this).parent().siblings().removeClass('open');
    $(this).parent().toggleClass('open');
    $('.secondary-nav').addClass('sub-menu-open');
  });


  $(".search-button").on("click", function (e) {
    $("body").removeClass("menu-extended");
    $(".header").removeClass("nav-open");
    $(".fullScreen--search").toggleClass("search-active");
    $("#search-input").focus();
  });

  $(".search-close").on("click", function (e) {
    $(".fullScreen--search").removeClass("search-active");
  });

  $(document).on("keyup", function (evt) {
    if (
      evt.keyCode == 27 &&
      $(".fullScreen--search").hasClass("search-active")
    ) {
      $(".fullScreen--search").removeClass("searchactive");
    }
  });

   // language--selector
   $(".language-slector > span").on("click", function () {
    $(this).parent().toggleClass("lang-subOpen");
    $(this).siblings(".langs").slideToggle();
  });

  // $(".mobile_menu").simpleMobileMenu({
  //   onMenuLoad: function (menu) {
  //     console.log(menu)
  //     console.log("menu loaded")
  //   },
  //   onMenuToggle: function (menu, opened) {
  //     console.log(opened)
  //   },
  //   "menuStyle": "slide"
  // });

  /*========== Sticky Menu =========*/

  $(".toggle-menu").on("click", function () {
    $("body").toggleClass("menu-extended");
    $("header").toggleClass("nav-open");
    $(".secondary-nav").removeClass("sub-menu-open");
    $(".menu-item-has-children").removeClass("open");
  });/*========== End of Sticky Menu =========*/
   

  /*========== Filter drop down =========*/
  
  $(".filter-title").click(function () {
    $(this).data("clicked", true);
    var $this = $(this);

    $(".filter-title").not($this).next().removeClass("filter-active");
    $(this).next().toggleClass("filter-active");
  });

  $(".cloak").click(function () {
    $(this).parent().removeClass("filter-active");
  });/*========== End of Filter drop down =========*/


 /*========== Footer Menu Slide Mobile =========*/

  if ($(window).width() < 768) {
    $(".filters--title").on("click", function () {
      $(this).toggleClass("filter-open");
      $(this).siblings(".filters--list").slideToggle("slow");
    });

    $(".footer--title").on("click", function (e) {
      e.preventDefault();
      $(this).siblings(".footer--menu").slideToggle("slow");
    });

    $(".scroller__title").on("click", function () {
      $(this).toggleClass("scroll-nav-open");
      $(this).siblings(".scroller__nav").slideToggle();
    });
  }/*========== End Of Footer Menu Slide Mobile =========*/


/*========== Scroll Down =========*/  

  $('.scroll--nav a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 0,
          },
          1000
        );
    }
  });/*========== End Of Scroll Down =========*/

  /*========== Scroll Top =========*/

  $(".backTop span").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: "0" }, "slow");
  });/*========== End Of Scroll TOp =========*/


/*========== Language Selector =========*/

  $(".nav-toggle").on("click", function () {
    $(this).toggleClass("footer-menu-expand");
    $('.footer--nav').slideToggle();
  });/*========== End Of Language Selector =========*/



  /* Parallax Effect on scroll */
  /* ------------------------------------------- */
  $(".jarallax").jarallax();

  /* Parallax Scroll */
  /* ------------------------------------------- */
  $(window).on("load scroll", function () {
    var parallaxElement = $(".parallax_scroll"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function () {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + scrolled * -0.15 + "px, 0)",
        });
      }
    });
  });
  // End of Parallax Scroll

  /* Magnific Popup */
  /* ------------------------------------------- */
  // $(".popup-with-zoom").magnificPopup({
  //   type: "inline",
  //   fixedContentPos: false,
  //   fixedBgPos: true,
  //   overflowY: "auto",
  //   closeBtnInside: true,
  //   preloader: false,
  //   midClick: true,
  //   removalDelay: 300,
  //   mainClass: "my-mfp-zoom-in",
  // });
  // End of Magnific Popup

  /* Sliders */
  /* ------------------------------------------- */

  // new Swiper(".quoteSlider", {
  //   slidesPerView: 1,
  //   spaceBetween: 0,
  //   pagination: {
  //     el: ".quote-progress",
  //     type: "progressbar",
  //   },
  //   breakpoints: {
  //     768: {
  //       slidesPerView: 2,
  //       spaceBetween: 40,
  //     },

  //   },
  // });

  new Swiper(".clientSlider", {
    slidesPerView: "auto",
    spaceBetween: 0,
    
    pagination: {
      el: ".quote-progress",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".quote-next",
      prevEl: ".quote-prev",
      
    },

  });
  new Swiper(".newsSlider", {
    slidesPerView: 1,
    freeMode: true,
    spaceBetween: 10,
    pagination: {
      el: ".quote-progress",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".quote-next",
      prevEl: ".quote-prev",
      
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        
      },
    },

  });
  new Swiper(".globalSLider", {
    slidesPerView:"auto",
    freeMode: true,
    spaceBetween: 10,
  });
  new Swiper(".bannerSlider", {
    speed:500,
    slidesPerView:"auto",
    freeMode: true,
    spaceBetween: 10,
    pagination: {
      el: ".quote-progress",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".quote-next",
      prevEl: ".quote-prev",
      
    },
  });

  new Swiper(".transactionSlider", {
    slidesPerView: 1,
    grid: {
      rows: 2,
    },
    spaceBetween: 10,
    pagination: {
      el: ".quote-progress",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".quote-next",
      prevEl: ".quote-prev",
      
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        
      },
    },
  });





  // new Swiper(".dealsSlider", {
  //   slidesPerView: "auto",
  //   freeMode: true,
  //   loop: true,
  //   spaceBetween: 0,
  //   pagination: {
  //     el: ".deals-progress",
  //     type: "progressbar",
  //   },
  //   // navigation: {
  //   //   nextEl: ".deals-button-next",
  //   //   prevEl: ".deals-button-prev",
  //   // },
  // });

  // new Swiper(".teamsSlider", {
  //   slidesPerView: "auto",
  //   freeMode: true,
  //   spaceBetween: 0,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".teams-button-next",
  //     prevEl: ".teams-button-prev",
  //   },
  // });
  // speed:800,
  //   grabCursor: true,
  //   effect: "creative",
  //   creativeEffect: {
  //     prev: {
  //       shadow: true,
  //       translate: ["-20%", 0, -1],
  //     },
  //     next: {
  //       translate: ["100%", 0, 0],
  //     },
  //   },


  // End of Sliders

  /* Scroll to Top  */
  /* ------------------------------------------- */
  $(".returnTop").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });

  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    /* # of pixels before element*/
    var detectAreaTopOffset = 15;
    /* # of pixels after element*/
    var detectAreaBottomOffset = 100;
    return (
      elemTop <= docViewBottom + detectAreaTopOffset &&
      elemBottom >= docViewTop - detectAreaBottomOffset
    );
  }
  //Count up code
  function countUp() {
    $(".counter").each(function () {
      var $this = $(this), // <- Don't touch this variable. It's pure magic.
        countTo = $this.attr("data-count");
      ended = $this.attr("ended");

      if (ended != "true" && isScrolledIntoView($this)) {
        $({ countNum: $this.text() }).animate(
          {
            countNum: countTo,
          },
          {
            duration: 2500, //duration of counting
            easing: "swing",
            step: function () {
              $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              $this.text(this.countNum);
            },
          }
        );
        $this.attr("ended", "true");
      }
    });
  }
  //Start animation on page-load
  countUp();

  $(document).scroll(function () {
    if ($(".counter").length) {
      if (isScrolledIntoView(".counter")) {
        countUp();
      }
    }
  });
  // End of Counter up

  /* Custom Tabs */
  /* ------------------------------------------- */

  $("#tabs li:first-child").addClass("current");
  $("#tab-content > div:first-child").addClass("current");

  $("#tabs li a").click(function (e) {
    $("#tabs li, #tab-content .current").removeClass("current");
    $(this).parent().addClass("current");
    var currentTab = $(this).attr("href");
    $(currentTab).addClass("current");
    if ($(window).width() >= 700) {
      e.preventDefault();
    }
  });

  // End of Tabs

  // This will make the cookie bar disappear when the accept button is clicked
  // $("#cookie-agree").click(function () {
  //   $(".cookie-holder").fadeOut('slow');

  //   if (!$(".wrapper--cookie-notice").is()) {
  //     // Add the cookie. It will remain for a year
  //     Cookies.set("venuegroup_cookie_agree", 1, {
  //       expires: 365,
  //       path: "/",
  //     });
  //     //  $.cookie("venuegroup_cookie_agree", 1, { expires: 365, path: "/" });
  //   }
  //   return false;
  // });

  // If the cookie  doesn't equal 1 - show the cookie bar
  // if (Cookies.get("venuegroup_cookie_agree") != 1) {
  //   //  alert('Cookie does not equal 1');

  //   // $("#cookie-notice").css({display: "block"});
  //   $("#cookie-notice").addClass("cookie-show");
  // }

  // $("#cookie-reject").on("click", function () {
  //   $(".cookie-holder").fadeOut('slow');
  // });

  ///

  // load more ajax functionality

  // var inf_scrll = jQuery(".next");
  // //console.log(inf_scrll.length);
  // if (inf_scrll.length) {
  //   var infScroll = new InfiniteScroll(".ctal-item--container", {
  //     // the wrapper/container
  //     path: ".next",
  //     append: ".grid__items",
  //     status: ".page-load-status",
  //     hideNav: ".pagination",
  //     // load pages on button click - switch scrollThreshold to FALSE
  //     button: ".load-more",
  //     scrollThreshold: false,
  //     history: false,
  //     //status: ".page-load-status",
  //   });
  // }

  var inf_scrll = jQuery(".next");
  //console.log(inf_scrll.length);
  if (inf_scrll.length) {
    var infScroll = new InfiniteScroll(".ctal-item--container", {
      // the wrapper/container
      path: ".next",
      append: ".grid__items",
      // append: ".news",
      status: ".page-load-status",
      hideNav: ".pagination",
      // load pages on button click - switch scrollThreshold to FALSE
      button: ".load-more",
      scrollThreshold: false,
      history: false,
      // status: ".page-load-status",
    });

    // Do stuff when new items arrive
    var $container = jQuery(".ctal-item--container");
    $container.on(
      "append.infiniteScroll",
      function (event, response, path, items) {
        const scrollers = document.querySelectorAll("[data-scroll]");
        const observer = new IntersectionObserver(check);
        scrollers.forEach((scroller) => observer.observe(scroller));
      }
    );
  }
  // ENd of

  // Map Toggle
  $(".map-toggle").on("click", function () {
    $(this).toggleClass('close');
    $('#mapid').toggleClass('close');
  });

});

/* window load class helper */
/* ------------------------------------------- */
$(window).on("load", function () {
  // setTimeout(function () {
  $("html").removeClass("loading").addClass("loaded");
  // }, 10000);
});

/* manually doing in-view stuff */
/* ------------------------------------------- */

const scrollers = document.querySelectorAll("[data-scroll]");

function check(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(check);
scrollers.forEach((scroller) => observer.observe(scroller));



/* Full Screen Search */
/* ------------------------------------------- */
jQuery(document).ready(function($) {
  var wHeight = window.innerHeight;
  //search bar middle alignment
  $('#mk-fullscreen-searchform').css('top', wHeight / 2);
  //reform search bar
  jQuery(window).resize(function() {
    wHeight = window.innerHeight;
    $('#mk-fullscreen-searchform').css('top', wHeight / 2);
  });
  // Search
  $('#search-button').click(function() {
    console.log("Open Search, Search Centered");
    $("div.mk-fullscreen-search-overlay").addClass("mk-fullscreen-search-overlay-show");
  });
  $("a.mk-fullscreen-close").click(function() {
    console.log("Closed Search");
    $("div.mk-fullscreen-search-overlay").removeClass("mk-fullscreen-search-overlay-show");
  });
});