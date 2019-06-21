import "./../sass/main.scss";
import "jquery";
import "hammerjs";
import "svgxuse";
import $ from "jquery";
window.jQuery = $;
window.$ = $;



$('.js_collapseBtn').on('click', function() {
  $('.article__collapse').is(':visible') ? $('.js_collapseBtn').text('Читать далее...') : $('.js_collapseBtn').text('Скрыть');
  $('.article__collapse').slideToggle('slow');
});