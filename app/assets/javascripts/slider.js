$( document ).ready(function() {
  $('.statisticButton').click(function(event) {
    $('.canvasContainer').fadeOut('fast');
    $('#' + this.id + 'Container').fadeIn('slow');
  })

  $('#allStat').click(function(event) {
    $('.canvasContainer').fadeOut('fast');
    $('.canvasContainer').fadeIn('slow');
  })

  $(window).resize(function(event) {
    console.log('holi');
    $('.canvasContainer').fadeIn('slow');
  })
});
