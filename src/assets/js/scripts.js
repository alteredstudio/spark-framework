document.addEventListener('DOMContentLoaded', function() {
  // DOM ready


  // Init Functions
  resizeWindow();
  menuOverlay();
  overlays();
  accordions();
  fixedNav();
  smoothscroll();
  smoothscrollToTop();

  // Update window dimensions on resize
  window.onresize = function(event) {
    resizeWindow();
  }

  // On scroll check if menu should be fixed
  $(window).scroll(function() {
    fixedNav();
  });

  function resizeWindow() {
    document.body.style.overflow = "hidden";
    viewportWidth = $(window).width();
    viewportHeight = $(window).height();
    document.body.style.overflow = "";

    $('.cover, .overlay, .overlay-menu').css({
      'width': viewportWidth,
      'height': viewportHeight
    });
    $('.overlay .inner, .overlay-menu .inner').css({
      'max-height': viewportHeight
    });

    // pageHeight = $(document).height();
  }

  // Menu overlay
  function menuOverlay() {
    $('#menu-trigger').click(function () {

      if( $('body.overlayMenu-open').length > 0 ) {
        // Menu Open - Close it
        $('body').removeClass('overlayMenu-open').scrollTop(localStorage.cachedScrollPos);
        $('.overlay-menu ul li a').removeClass('is-active');
      } else {
        // Menu Closed - Open it
        localStorage.cachedScrollPos = $(window).scrollTop();
        $('body').addClass('overlayMenu-open').scrollTop(0);
        $('.overlay-menu ul li a').each(function(i){
          var t = $(this);
          setTimeout(function(){ t.addClass('is-active'); }, (i+1) * 45);
        });
      }

    });
  } // End: menuOverlay

  // Generic overlays
  function overlays() {
    $('.overlay-trigger').click(function () {
      localStorage.cachedScrollPos = $(window).scrollTop();
      var overlay = $(this).data('overlay');
      var id = '.' + overlay;

      $(id).addClass('is-active');
      $('body').addClass('overlay-open').scrollTop(0);

      $('.overlay-close').click(function () {
        $(this).parent().removeClass('is-active');
        $(id).removeClass('is-active');
        $('body').removeClass('overlay-open').scrollTop(localStorage.cachedScrollPos);
      });

    });
  } // End: overlays

  // Accordions
  function accordions() {
    $('.trigger-drawer').click(function () {
      var $target = $(this).attr('data-drawer');
      var $this = $(this);

      $this.toggleClass('is-active');
      $(".drawer." + $target).toggleClass('is-active');

    });
  } // End: accordions

  // Fixed Horizontal Menu
  function fixedNav() {
    var scrollTop = $(window).scrollTop();

    if( $('.cover').length > 0 ){
      // Page has cover
      if ( scrollTop > viewportHeight ) {
        $('body').addClass('fixed-menu-horizontal');
      } else {
        $('body').removeClass('fixed-menu-horizontal');
      }
    }
    if( $('.no-cover').length > 0 ){
      // Page has cover
      if ( scrollTop > 72 ) {
        $('body').addClass('fixed-menu-horizontal');
      } else {
        $('body').removeClass('fixed-menu-horizontal');
      }
    }

  } // End: stickyNav

  // Smoothscroll anchor links
  function smoothscroll() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  } // End: smoothscroll

  // Smoothscroll anchor links
  function smoothscrollToTop() {
    $('#toTop').click(function() {
      $('html,body').animate({
        scrollTop: 0
      }, 1000, 'swing');
      return false;
    });
  } // End: smoothscroll


}, false); // End DOMContentLoaded
