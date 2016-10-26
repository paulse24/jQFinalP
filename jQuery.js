var gn = 16

$(document).ready(function() {

 for (i=0; i < gn*gn; i++) {
$('.container').append("<div class=standard></div>");
};

$('div.standard').hover(
  function(){
$(this).addClass('hovered');}
);

document.getElementById('reset').onclick = function newgrid() {
  gn = prompt("What size grid would you like to generate?");
  $('.standard').remove();

  for (i=0; i < gn*gn; i++) {
 $('.container').append("<div class=standard></div>");
 };

 $('div.standard').hover(
   function(){
 $(this).addClass('hovered');}
 );

 var ghw = 640/gn;
  $('.standard').css("height", ghw+"px");
  $('.standard').css("width", ghw+"px");

};

});
