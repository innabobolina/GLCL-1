let calendarHeader = () => {

  let titleCarousel = document.getElementById('title-carousel');

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

  let title = document.getElementById('title');
  let titleSetter = (newMonth) => {
    title.innerHTML = newMonth;
  };
  titleSetter('September');
  let monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  console.log(monthArr[0]);

  let leftArrow = document.getElementById('left-arrow');
  let rightArrow = document.getElementById('right-arrow');
  let monthIndex = 8;
  leftArrow.addEventListener('click', () => {
    if (monthIndex > 0) {
      monthIndex--;
      titleSetter(monthArr[monthIndex]);
    }
  });
  rightArrow.addEventListener('click', () => {
    if (monthIndex < monthArr.length - 1) {
      monthIndex++;
      titleSetter(monthArr[monthIndex]);
    }
  });
};

document.addEventListener('DOMContentLoaded', calendarHeader, false);
