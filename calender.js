
const calendarBody = document.getElementById('calendar-body');
const monthYear = document.getElementById('month-year');

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function generateCalendar() {
  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);
  const totalDays = lastDay.getDate();
  const startingDay = firstDay.getDay();

  monthYear.innerText = `${getMonthName(currentMonth)} ${currentYear}`;
  calendarBody.innerHTML = '';

  let date = 1;

  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');
      if (i === 0 && j < startingDay) {
        // Create empty cells before the first day of the month
        cell.innerHTML = '';
      } else if (date <= totalDays) {
        cell.innerHTML = date;
        if (date === currentDate.getDate() && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
          // Highlight the current date
          cell.classList.add('current-date');
        }
        date++;
      }
      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
  }
}

function previousMonth() {
  if (currentMonth === 0) {
    currentMonth = 11;
    currentYear--;
  } else {
    currentMonth--;
  }
  generateCalendar();
}

function nextMonth() {
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear++;
  } else {
    currentMonth++;
  }
  generateCalendar();
}

function getMonthName(month) {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
  ];
  return monthNames[month];
}

generateCalendar();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDate1 = new Date();
const currentDay = currentDate1.getDay();
const todayDate = currentDate1.getDate();
const daysContainer = document.querySelector('.days');
const datesContainer = document.querySelector('.dates');


const startOfWeek = new Date(currentDate1);
startOfWeek.setDate(currentDate1.getDate() - currentDay);
const endOfWeek = new Date(currentDate1);
endOfWeek.setDate(currentDate1.getDate() + (6 - currentDay));

for (let date = startOfWeek; date <= endOfWeek; date.setDate(date.getDate() + 1)) {
    const dateElement = document.createElement('div');
    dateElement.classList.add('date');
    dateElement.textContent = date.getDate();
    datesContainer.appendChild(dateElement);

    if (date.getDate() === todayDate) {
        dateElement.classList.add('today');
    } else {
        dateElement.classList.add('other-day');
    }
}


const daysElements = document.querySelectorAll('.day');
const datesElements = document.querySelectorAll('.date');

daysElements[currentDate.getDay()].classList.add('today');
datesElements[todayDate - 1].classList.add('today');



const publicHolidays = [
    { date: new Date('2023-01-01'), name: 'วันขึ้นปีใหม่' },
    { date: new Date('2023-04-13'), name: 'วันสงกรานต์' },
    { date: new Date('2023-07-28'), name: 'วันราชานุญาต' },
];

const isPublicHoliday = publicHolidays.some(holiday => {
    return currentDate.toDateString() === holiday.date.toDateString();
});


const br1 = document.getElementById('br1');

if (isPublicHoliday) {
    br1.textContent = 'วันหยุดราชการ';
    br1.style.color = 'white';
} else {
    br1.textContent = 'ไม่ใช่วันหยุดราชการ';
    br1.style.color = 'red';
}
