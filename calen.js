const titlet = document.getElementById('titlet')
const tom = document.getElementById('tome')
const datt = document.getElementById('datt')
const Sax = document.getElementById('sax')
function save(val){
    let tit = document.getElementById('ti').value;
    console.log(tit);
    titlet.innerText =  tit;
    let tim = document.getElementById('tim').value;
    console.log(tim);
    tom.innerText = "time: "+tim;
    let da = document.getElementById('dat').value;
    console.log(da);
    datt.innerHTML ="Date: " + da;
    
}
function mood() {
    
    const selectedMood = clickedImage;
    if (selectedMood) {
        const currentDate = new Date();
        const currentMonth = currentDate.toLocaleString('en-US', { month: 'long' });
        const currentDay = currentDate.getDate();
        const moodContainer = document.getElementById('moodContainer');
        const moodElement = document.createElement('div');
        moodElement.innerHTML = `<p>Mood: ${selectedMood}, Date: ${currentMonth} ${currentDay}</p>`;
        moodContainer.appendChild(moodElement);
    }
}
function changeMood(moodImage) {
    const calendarDayElements = document.querySelectorAll('.calendar-day');
    calendarDayElements.forEach((dayElement) => {

        const image = document.createElement('img');
        image.src = moodImage;
        dayElement.innerHTML = '';
        dayElement.appendChild(image);
    });
}

