// Popup Settings
$('#get-started').on('click',function() {
  $('.popup-wp').css({
    'display':'flex'+' ',
  });
});

$('#get-started-1').on('click',function() {
  $('.popup-wp').css({
    'display':'flex'+' ',
  });
});

$('.close-popup').on('click',function() {
  $('.popup-wp').css({
    'display':'none'+' ',
  });
});

// Responsive Menu Settings 
$('#menu').click(function() {
      var we_clicks = $(this).data('we_clicks');
      if (!we_clicks) {
          $('#menu-wp').css({
    'display':'flex'+' ',
  });

      } else {
          $('#menu-wp').css({
    'display':'none'+' ',
  });

      }
      $(this).data("we_clicks", !we_clicks);
    });
