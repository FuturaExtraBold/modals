(function($) {

  var $window = $(window);
  var $body = $("body");
  var $modal = $(".modal");
  var $catalyst = $(".btn");
  var $close = $(".close-button");

  function open() {
    $modal.addClass("modal--open");
    $body.addClss("overflow--hidden");
  }

  function close() {
    $modal.removeClass("modal--open");
    $body.removeClass("overflow--hidden");
  }

  $catalyst.click(open);
  $close.click(close);
  $window.click(function(event) {
    console.log("event.target:", event.target, "event.currentTarget:", event.currentTarget);
  });

})(jQuery);
