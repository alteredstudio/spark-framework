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
  });

  function resizeWindow() {
    //document.body.style.overflow = "hidden";
    viewportWidth = $(window).width();
    viewportHeight = $(window).height();

    $('.overlay, .cover').css({
      'width': viewportWidth,
      'height': viewportHeight
    });

    pageHeight = $(document).height();
    //document.body.style.overflow = "";

    // if( $('.overlay-grid').length > 0 ){
    //   // Menu present, add menu height to pageHeight
    //   $('.overlay-grid').css({'width': viewportWidth + 'px','height': pageHeight + 'px'});
    // }

  }

  // Menu overlay
  function menuOverlay() {
    $('.menu-trigger').click(function () {
      $('body').toggleClass('menuOverlay-open');
    });
  } // End: menuOverlay

  // Generic overlays
  function overlays() {
    $('.overlay-trigger').click(function () {
      var overlay = $(this).data('overlay');
      var id = '.' + overlay;
      localStorage.cachedScrollPos = $(window).scrollTop();

      $(id).addClass('open');
      $('body').addClass('overlay-open');

      $('.overlay-close').on( 'click', function( event ) {
        $(this).parent().removeClass('is-active');
        $(id).removeClass('open');
        $('body').removeClass('overlay-open');
        $('body').scrollTop(localStorage.cachedScrollPos);
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
