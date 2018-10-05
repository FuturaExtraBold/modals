// // Get the modal
// var modal = document.getElementById('myModal');
//
// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
//
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
//
// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// };
//
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// };
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
(function($) {

  var $window = $(window);
  var $modal = $(".modal");
  var $catalyst = $(".btn");
  var $close = $(".close-button");

  function open() {
    $modal.addClass("modal--open");
  }

  function close() {
    $modal.removeClass("modal--open");
  }

  $catalyst.click(open);
  $close.click(close);
  $window.click(function() {
    if (event.target == $modal) {
      close();
    }
  });

})(jQuery);
