$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

$("#modal-tche").click(function() {
$(".modal-tche").addClass("is-active");
});

$("#modal-ellen").click(function() {
$(".modal-ellen").addClass("is-active");
});

$("#modal-pangaro").click(function() {
$(".modal-pangaro").addClass("is-active");
});

$(".delete").click(function() {
 $(".modal").removeClass("is-active");
});

$(".modal-close").click(function() {
 $(".modal").removeClass("is-active");
});
