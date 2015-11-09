// Default JavaScript Functions and Initiations
$(document).ready(function() {

  // Functions go here...

  // var body = document.body,
  //     html = document.documentElement;
  //
  // var pageHeight = Math.max( body.scrollHeight, body.offsetHeight,
  //                      html.clientHeight, html.scrollHeight, html.offsetHeight );

  var totalHeight = document.body.scrollHeight + 60;
  $('.overlay-grid').css({'height': totalHeight + 'px'});


  resizeDiv();
  window.onresize = function(event) {
    resizeDiv();
  }
  function resizeDiv() {
    viewportWidth = $(window).width();
    viewportHeight = $(window).height();
    viewportHeightOffset = viewportHeight - 60;
    $('.overlay-grid').css({'width': viewportWidth + 'px'});
    if( $('.menu-horizontal').length > 0 ){
      $('.cover').css({'width': viewportWidth + 'px','height': viewportHeightOffset + 'px'});
    } else{
      $('.cover').css({'width': viewportWidth + 'px','height': viewportHeight + 'px'});
    }

  }


}); // end document ready
