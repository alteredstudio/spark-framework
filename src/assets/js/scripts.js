document.addEventListener('DOMContentLoaded', function() {
  // DOM ready


  // Init Functions
  resizeWindow();
  menuOverlay();
  overlays();
  accordions();
  fixedNav();

  // Update window dimensions on resize
  window.onresize = function(event) {
    resizeWindow();
  }

  // On scroll check if menu should be fixed
  $(window).scroll(function() {
    fixedNav();
    localStorage.cachedScrollPos = $(window).scrollTop();
  });

  function resizeWindow() {
    document.body.style.overflow = "hidden";
    viewportWidth = $(window).width();
    viewportHeight = $(window).height();
    document.body.style.overflow = "";

    $('.overlay, .overlay-menu, .cover').css({
      'width': viewportWidth,
      'height': viewportHeight
    });
    $('.overlay .inner, .overlay-menu .inner').css({
      'max-height': viewportHeight
    });

    pageHeight = $(document).height();
  }

  // Menu overlay
  function menuOverlay() {
    $('.menu-trigger').click(function () {

      if( $('body.overlayMenu-open').length > 0 ) {
        // Menu Open
        $('body').removeClass('overlayMenu-open').scrollTop(localStorage.cachedScrollPos);
      } else {
        // Menu Closed
        $('body').addClass('overlayMenu-open').scrollTop(0);
      }

    });
  } // End: menuOverlay

  // Generic overlays
  function overlays() {
    $('.overlay-trigger').click(function () {
      var overlay = $(this).data('overlay');
      var id = '.' + overlay;
      localStorage.cachedScrollPos = $(window).scrollTop();

      $(id).addClass('is-active');
      $('body').scrollTop(0).addClass('overlay-open');

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

      $(".drawer." + $target).toggleClass('is-active');

    });
  } // End: accordions

  // Fixed Horizontal Menu
  function fixedNav() {
    var scrollTop = $(window).scrollTop();

    if( $('.cover').length > 0 ){
      if ( scrollTop > viewportHeight ) {
        $('body').addClass('fixed-menu-horizontal');
      } else {
        $('body').removeClass('fixed-menu-horizontal');
      }
    } else {
      $('body').addClass('fixed-menu-horizontal');
    }

  } // End: stickyNav


}, false); // End DOMContentLoaded
