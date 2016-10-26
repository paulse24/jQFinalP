$(document).ready(function() {
 for (i=0; i < 16*16; i++) {
$('.container').append("<div class=standard></div>");
};

$('div.standard').hover(
  function(){
  $(this).addClass('hovered');}
);

});
