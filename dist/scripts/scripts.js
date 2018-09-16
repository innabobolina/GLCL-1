'use strict';

var fn = function fn() {
	// adding p tag for minus
	var minus = document.getElementsByClassName('minus');

	for (var i = 0; i < minus.length; i++) {
		var e = document.createElement('p');
		e.innerHTML = '-';
		minus[i].appendChild(e);
	}

	//adding p tag for plus
	var plus = document.getElementsByClassName('plus');
	for (var i = 0; i < plus.length; i++) {
		var e = document.createElement('p');
		e.innerHTML = '+';
		plus[i].appendChild(e);
	}
};

document.addEventListener('DOMContentLoaded', fn, false);
'use strict';

var calendar = function calendar() {

  var firstDay = function firstDay(year, month) {
    return new Date(year, month - 1, 1).getDay();
  };

  var lastDay = function lastDay(year, month) {
    return new Date(year, month, 0).getDate();
  };

  var daysOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  var calendarHead = document.getElementById('calendar-head');
  var populateCalendarHead = function populateCalendarHead() {
    for (var i = 0; i < daysOfTheWeek.length; i++) {
      var day = document.createElement('p');
      day.innerHTML = daysOfTheWeek[i];
      calendarHead.appendChild(day);
    }
  };
  populateCalendarHead();

  var calendarBody = document.getElementById('calendar-body');
  var populateCalendarBody = function populateCalendarBody() {
    var daysInRow = 7;
    var totalRows = 5;
    // var totalDays = daysInRow * totalRows;
    var currentRows = 0;
    var currentDaysInMonth = lastDay(2018, 9);
    var firstDayOfMonth = firstDay(2018, 9);
    var currentDayOfMonthIndex = 1;
    var currentCalendarDayIndex = 0;

    while (currentRows < totalRows) {
      var calendarRow = document.createElement('div');
      for (var i = 0; i < daysInRow; i++) {
        var day = document.createElement('p');
        if (currentCalendarDayIndex >= firstDayOfMonth && currentDayOfMonthIndex <= currentDaysInMonth) {
          day.innerHTML = currentDayOfMonthIndex;
          currentDayOfMonthIndex++;
        }
        currentCalendarDayIndex++;
        calendarRow.appendChild(day);
      }
      calendarBody.appendChild(calendarRow).className = "calendar-row";
      currentRows++;
    }
  };
  populateCalendarBody();
};

document.addEventListener('DOMContentLoaded', calendar, false);
'use strict';

var calendarHeader = function calendarHeader() {

  var titleCarousel = document.getElementById('title-carousel');

  var e = document.createElement('p');
  e.className = "arrow fas fa-chevron-left";
  e.id = "left-arrow";
  titleCarousel.appendChild(e);

  var f = document.createElement('p');
  f.id = "title";
  f.innerHTML = 'September';
  titleCarousel.appendChild(f);

  var g = document.createElement('p');
  g.className = "arrow fas fa-chevron-right";
  g.id = "right-arrow";
  titleCarousel.appendChild(g);

  var title = document.getElementById('title');
  var titleSetter = function titleSetter(newMonth) {
    title.innerHTML = newMonth;
  };
  titleSetter('September');
  var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  console.log(monthArr[0]);

  var leftArrow = document.getElementById('left-arrow');
  var rightArrow = document.getElementById('right-arrow');
  var monthIndex = 8;
  leftArrow.addEventListener('click', function () {
    if (monthIndex > 0) {
      monthIndex--;
      titleSetter(monthArr[monthIndex]);
    }
  });
  rightArrow.addEventListener('click', function () {
    if (monthIndex < monthArr.length - 1) {
      monthIndex++;
      titleSetter(monthArr[monthIndex]);
    }
  });
};

document.addEventListener('DOMContentLoaded', calendarHeader, false);
'use strict';

var list = [];
var myFunkyFunk = function myFunkyFunk() {
  console.log('the funk');
};