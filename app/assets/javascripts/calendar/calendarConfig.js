$(document).ready(function() {

  function addEvents() {
    var newEvent;
    var events = [];
    data.calendar.forEach(function(event) {
      newEvent = {
        title: event.name,
        start: moment().month(event.startMonth-1).day(1).format('YYYY-MM-DD'),
        end: moment().month(event.endMonth-1).day(1).format('YYYY-MM-DD'),
        color: event.color,
        editable: false
      };
      events.push(newEvent);
      newEvent = {
        title: event.name,
        start: moment().month(event.startMonth-1).day(1).year(moment().get('year') + 1).format('YYYY-MM-DD'),
        end: moment().month(event.endMonth-1).day(1).year(moment().get('year') + 1).format('YYYY-MM-DD'),
        color: event.color,
        editable: false
      };
      events.push(newEvent);
      newEvent = {
        title: event.name,
        start: moment().month(event.startMonth-1).day(1).year(moment().get('year') - 1).format('YYYY-MM-DD'),
        end: moment().month(event.endMonth-1).day(1).year(moment().get('year') - 1).format('YYYY-MM-DD'),
        color: event.color,
        editable: false
      };
      events.push(newEvent);
    });
    return events;
  };

  

  $('#calendar').fullCalendar({
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    header:{
      left: 'title',
      center: '',
      right: 'today prev,next'
    },

    eventColor: '#0fb6b6',
    firstDay: 1,

    monthNames    :   ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    dayNames      :   ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    dayNamesShort :   ["Dom", "Lun", "Mar", "Mier", "Jue", "Vie", "Sab"],
//
// eventClick    : $scope.alertOnEventClick,
// eventDrop     : $scope.alertOnDrop,
// eventResize   : $scope.alertOnResize,
// eventRender   : $scope.eventRender,
    events: addEvents()
  });
});
