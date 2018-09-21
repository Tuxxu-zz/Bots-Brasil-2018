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

$("#modal-bittar").click(function() {
$(".modal-bittar").addClass("is-active");
});

$("#modal-yasmin").click(function() {
$(".modal-yasmin").addClass("is-active");
});

$("#modal-ribeiro").click(function() {
$(".modal-ribeiro").addClass("is-active");
});

$("#modal-debora").click(function() {
$(".modal-debora").addClass("is-active");
});

$("#modal-calvino").click(function() {
$(".modal-calvino").addClass("is-active");
});

$("#modal-cheliga").click(function() {
$(".modal-cheliga").addClass("is-active");
});

$("#modal-tatiane").click(function() {
$(".modal-tatiane").addClass("is-active");
});

$("#modal-debona").click(function() {
$(".modal-debona").addClass("is-active");
});

$("#modal-josias").click(function() {
$(".modal-josias").addClass("is-active");
});

$("#modal-fernanda").click(function() {
$(".modal-fernanda").addClass("is-active");
});

$("#modal-eli").click(function() {
$(".modal-eli").addClass("is-active");
});

$("#modal-billy").click(function() {
$(".modal-billy").addClass("is-active");
});

$("#modal-isabelli").click(function() {
$(".modal-isabelli").addClass("is-active");
});

$("#modal-vinicius").click(function() {
$(".modal-vinicius").addClass("is-active");
});

$("#modal-rogerio").click(function() {
$(".modal-rogerio").addClass("is-active");
});

$("#modal-parodi").click(function() {
$(".modal-parodi").addClass("is-active");
});

$("#modal-daiane").click(function() {
$(".modal-daiane").addClass("is-active");
});

$("#modal-pacheco").click(function() {
$(".modal-pacheco").addClass("is-active");
});

$("#modal-gama").click(function() {
$(".modal-gama").addClass("is-active");
});

$("#modal-ahirton").click(function() {
$(".modal-ahirton").addClass("is-active");
});

$("#modal-apuzzo").click(function() {
$(".modal-apuzzo").addClass("is-active");
});

$("#modal-dorgam").click(function() {
$(".modal-dorgam").addClass("is-active");
});

$("#modal-barbara").click(function() {
$(".modal-barbara").addClass("is-active");
});

$("#modal-furlan").click(function() {
$(".modal-furlan").addClass("is-active");
});

$("#xxx").click(function() {
$(".xxx").addClass("is-active");
});

$("#modal-rabello").click(function() {
$(".modal-rabello").addClass("is-active");
});

$(".delete").click(function() {
 $(".modal").removeClass("is-active");
});


modal-bittar
modal-yasmin
modal-ribeiro
modal-debora
modal-calvino
modal-cheliga
modal-tatiane
modal-debona
modal-josias

modal-fernanda
modal-eli
modal-billy
modal-isabelli
modal-vinicius
modal-rogerio
modal-parodi
modal-daiane

modal-pacheco
modal-gama
modal-ahirton
modal-apuzzo
modal-dorgam
modal-barbara
modal-furlan
modal-rabello
