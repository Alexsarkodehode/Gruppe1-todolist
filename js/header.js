/* get document from html */
$(document).ready(function () {
  $("nav").click(function () {
    $(".stick").toggleClass(function () {
      return $(this).is(".open, .close") ? "open close" : "open";
    });
  });
});
