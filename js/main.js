/* =====================================
Template Name: 	MedGenx.
Author Name: Abhishek Mourya
Description: MedGENX.
========================================*/
(function ($) {
  "use strict";
  $(document).on("ready", function () {
    jQuery(window).on("scroll", function () {
      if ($(this).scrollTop() > 200) {
        $("#header .header-inner").addClass("sticky");
      } else {
        $("#header .header-inner").removeClass("sticky");
      }
    });

    /*====================================
			Sticky Header JS
		======================================*/
    jQuery(window).on("scroll", function () {
      if ($(this).scrollTop() > 100) {
        $(".header").addClass("sticky");
      } else {
        $(".header").removeClass("sticky");
      }
    });

    /*====================================
			Search JS
		======================================*/
    $(".search a").on("click", function () {
      $(".search-top").toggleClass("active");
    });

    /*====================================
			Mobile Menu
		======================================*/
    $(".menu").slicknav({
      prependTo: ".mobile-nav",
      duration: 300,
      closeOnClick: true,
    });

    /*===============================
			Hero Slider JS
		=================================*/
    $(".hero-slider").owlCarousel({
      loop: true,
      autoplay: true,
      smartSpeed: 500,
      autoplayTimeout: 3500,
      singleItem: true,
      autoplayHoverPause: true,
      items: 1,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      ],
      dots: false,
    });

    /*===============================
			Testimonial Slider JS
		=================================*/
    $(".testimonial-slider").owlCarousel({
      items: 3,
      autoplay: true,
      autoplayTimeout: 4500,
      smartSpeed: 300,
      autoplayHoverPause: true,
      loop: true,
      merge: true,
      nav: false,
      dots: true,
      responsive: {
        1: {
          items: 1,
        },
        300: {
          items: 1,
        },
        480: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1170: {
          items: 3,
        },
      },
    });

    /*===============================
			Portfolio Slider JS
		=================================*/
    $(".portfolio-slider").owlCarousel({
      autoplay: true,
      autoplayTimeout: 4000,
      margin: 15,
      smartSpeed: 300,
      autoplayHoverPause: true,
      loop: true,
      nav: true,
      dots: false,
      responsive: {
        300: {
          items: 1,
        },
        480: {
          items: 2,
        },
        768: {
          items: 2,
        },
        1170: {
          items: 4,
        },
      },
    });

    /*=====================================
			Counter Up JS
		======================================*/
    // $(".counter").counterUp({
    //   delay: 20,
    //   time: 2000,
    // });

    /*===============================
			Clients Slider JS
		=================================*/
    $(".clients-slider").owlCarousel({
      items: 5,
      autoplay: true,
      autoplayTimeout: 3500,
      margin: 15,
      smartSpeed: 400,
      autoplayHoverPause: true,
      loop: true,
      nav: false,
      dots: false,
      responsive: {
        300: {
          items: 1,
        },
        480: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1170: {
          items: 5,
        },
      },
    });

    /*====================================
			Single Portfolio Slider JS
		======================================*/
    $(".pf-details-slider").owlCarousel({
      items: 1,
      autoplay: false,
      autoplayTimeout: 5000,
      smartSpeed: 400,
      autoplayHoverPause: true,
      loop: true,
      merge: true,
      nav: true,
      dots: false,
      navText: [
        '<i class="icofont-rounded-left"></i>',
        '<i class="icofont-rounded-right"></i>',
      ],
    });

    /*===================
			Accordion JS
		=====================*/
    $(".accordion > li:eq(0) a").addClass("active").next().slideDown();
    $(".accordion a").on("click", function (j) {
      var dropDown = $(this).closest("li").find("p");
      $(this).closest(".accordion").find("p").not(dropDown).slideUp(300);
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this).closest(".accordion").find("a.active").removeClass("active");
        $(this).addClass("active");
      }
      dropDown.stop(false, true).slideToggle(300);
      j.preventDefault();
    });

    /*===============================
			Checkbox JS
		=================================*/
    $('input[type="checkbox"]').change(function () {
      if ($(this).is(":checked")) {
        $(this).parent("label").addClass("checked");
      } else {
        $(this).parent("label").removeClass("checked");
      }
    });

    /*===============================
			Right Bar JS
		=================================*/
    $(".right-bar .bar").on("click", function () {
      $(".sidebar-menu").addClass("active");
    });
    $(".sidebar-menu .cross").on("click", function () {
      $(".sidebar-menu").removeClass("active");
    });

    /*=====================
			Video Popup JS
		=======================*/
    $(".video-popup").magnificPopup({
      type: "video",
    });

    /*================
			Wow JS
		==================*/
    var window_width = $(window).width();
    if (window_width > 767) {
      new WOW().init();
    }

    /*===================
			Scroll Up JS
		=====================*/
    $.scrollUp({
      scrollText: '<span><i class="fa fa-angle-up"></i></span>',
      easingType: "easeInOutExpo",
      scrollSpeed: 900,
      animation: "fade",
    });

    /*=======================
			Animate Scroll JS
		=========================*/
    $(".scroll").on("click", function (e) {
      var anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(anchor.attr("href")).offset().top - 100,
          },
          1000
        );
      e.preventDefault();
    });

    /*=======================
			Stellar JS
		=========================*/
    $.stellar({
      horizontalOffset: 0,
      verticalOffset: 0,
    });

    (function () {
      // https://dashboard.emailjs.com/admin/account
      emailjs.init({
        publicKey: "t_N51f-Ymq6u02NS8",
      });
    })();

    // Input restrictions for name (only alphabets and space allowed)
    $("#contact-name").on("input", function (event) {
      var value = this.value;
      // Allow only alphabets and spaces
      this.value = value.replace(/[^a-zA-Z ]/g, "");
    });

    // Input restrictions for phone (only digits allowed)
    $("#contact-phone").on("input", function (event) {
      var value = this.value;
      // Allow only digits
      this.value = value.replace(/[^\d]/g, "");
    });

    // Form validation before submission
    $("#contact-form").on("submit", function (event) {
      let isValid = true;

      // Clear previous error messages
      $(".text-danger").text("");

      // Check if name field is empty
      if ($("#contact-name").val().trim() === "") {
        $("#name-error").text("Name is required");
        isValid = false;
      }

      // Check if email field is empty
      if ($("#contact-email").val().trim() === "") {
        $("#email-error").text("Email is required");
        isValid = false;
      }

      // Check if phone field is empty
      if ($("#contact-phone").val().trim() === "") {
        $("#phone-error").text("Phone is required");
        isValid = false;
      }

      // Check if message field is empty
      if ($("#contact-message").val().trim() === "") {
        $("#message-error").text("Message is required");
        isValid = false;
      }

      // Prevent form submission if any field is invalid
      if (!isValid) {
        event.preventDefault();
      } else {
        event.preventDefault();

        emailjs.sendForm("service_dacq0d6", "template_x2y8ev9", this).then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
      }
    });

    $('a[href^="#contact"]').on("click", function (event) {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash (#section)
      var target = this.hash;
      let topOffset = 0;

      if ($(window).width() < 600) {
        topOffset = 180;
      }

      // Animate smooth scroll
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top - topOffset,
        },
        800
      ); // Scroll speed (in milliseconds)
    });
  });

  $(window).scroll(function () {
    $(".counter-container").each(function () {
      var windowHeight = $(window).height();
      var scrollTop = $(window).scrollTop();
      var elementTop = $(this).offset().top;
      var elementHeight = $(this).outerHeight();
      var distance = elementTop - scrollTop;

      if (distance <= windowHeight && distance > -elementHeight) {
        $(this).addClass("active");
        if (!$(this).hasClass("counted")) {
          $(this)
            .find(".counter")
            .each(function () {
              var countValue = parseInt($(this).text().replace(/\D/g, ""), 10);
              //console.log('>>', countValue);
              $(this)
                .prop("Counter", 0)
                .animate(
                  {
                    Counter: countValue,
                  },
                  {
                    duration: 1000,
                    easing: "swing",
                    step: function (now) {
                      $(this).text(Math.ceil(now));
                    },
                  }
                );
            });
          $(this).addClass("counted");
        }
      }
    });
  });

  /*====================
		Preloader JS
	======================*/
  $(window).on("load", function () {
    $(".preloader").addClass("preloader-deactivate");
  });
})(jQuery);
