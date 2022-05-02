const date = new Date();

const currentDate = document.querySelector('.index')

const currentMonth= String(date.getMonth()+1).padStart(2,"0");
const currentDay = String(date.getDate()).padStart(2,"0");
const currentYear = String(date.getFullYear()).padStart(2,"0");

currentDate.innerHTML = `${currentMonth}-${currentDay}-${currentYear}`