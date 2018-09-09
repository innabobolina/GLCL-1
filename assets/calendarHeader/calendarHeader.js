let cH = () => {

  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
   'August', 'September', 'October', 'November', 'December'];
  let month = document.getElementById('month');
  let monthSetter = (monthName) => {
    month.innerHTML = monthName;
  };
  monthSetter("September");

  let leftArrow = document.getElementById('arrow-left');
  let rightArrow = document.getElementById('arrow-right');

  let ctr = 8;
  month.innerHTML = months[ctr];

  rightArrow.addEventListener('click', () => {
    if (ctr < months.length - 1) {
      ctr++;
      month.innerHTML = months[ctr];
    }
  });

  leftArrow.addEventListener('click', () => {
    if (ctr > 0) {
      ctr--;
      month.innerHTML = months[ctr];
    }
  });
};
document.addEventListener('DOMContentLoaded', cH, false);
