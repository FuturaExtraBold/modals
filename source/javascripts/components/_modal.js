(function($) {

  var $window = $(window);
  var $modal = $(".modal");
  var $modalPositioner = $(".modal__positioner");
  var $catalyst = $(".btn");
  var $close = $(".close-button");

  function open() {
    $modal.addClass("modal--open");
  }

  function close() {
    $modal.removeClass("modal--open");
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
