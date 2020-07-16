function countdown() {
    const daysColumn = document.getElementById('days');
    const hoursColumn = document.getElementById('hours');
    const minutesColumn = document.getElementById('minutes');
    const secondsColumn = document.getElementById('seconds');

    const now = new Date();
    const eventDate = new Date(2020, 11, 28);

    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();

    let remTime = eventTime - currentTime;

    let seconds = Math.floor(remTime/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days= Math.floor(hours/24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    hours =  hours < 10 ? `0${hours}` : hours;
    minutes =  minutes < 10 ? `0${minutes}` : minutes;
    seconds =  seconds < 10 ? `0${seconds}` : seconds;

    daysColumn.textContent = days;
    hoursColumn.textContent =hours;
    minutesColumn.textContent = minutes;
    secondsColumn.textContent = seconds;

    setTimeout(countdown, 1000);

}

countdown();