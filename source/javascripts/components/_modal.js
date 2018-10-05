(function($) {

  var $window = $(window);
  var $body = $("body");
  var $modal = $(".modal");
  var $modalPositioner = $(".modal__positioner");
  var $catalyst = $(".btn");
  var $close = $(".close-button");

  function open() {
    $modal.addClass("modal--open");
    $body.addClass("overflow--hidden");
  }

  function close() {
    $modal.removeClass("modal--open");
    $body.removeClass("overflow--hidden");
  }

  function eventHandler(event, selector) {
    event.stopPropagation();
    event.preventDefault();
    if (event.type === "touchend") selector.off("click");
  }

  $catalyst.on("touchend click", function(event) {
    eventHandler(event, $(this));
    open();
  });

  $close.on("touchend click", function(event) {
    eventHandler(event, $(this));
    close();
  });

  $window.on("touchend click", function(event) {
    console.log("event.target:", event.target);
    if ($(event.target).is($modalPositioner)) {
      close();
    }
  });

})(jQuery);
