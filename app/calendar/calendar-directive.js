angular.module('calendarModule')
  .directive('calendar', function() {
    return {
      restrict: 'EA',
      templateUrl: 'calendar/calendar-view.html',
      compile: function() {
        $('#calendar').fullCalendar({
          defaultView: 'agendaWeek',
          timezone: 'local',
          views: {
            agendaWeek : {
              allDaySlot: false
            }
          }
        });

        $('#calendar').fullCalendar('option', 'height', document.getElementById('gridTab').offsetHeight);
      }
    }
  });
