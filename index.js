const refs = {
    daysField: document.querySelector('span[data-value="days"]'),
    hoursField: document.querySelector('span[data-value="hours"]'),
    minsField: document.querySelector('span[data-value="mins"]'),
    secsField: document.querySelector('span[data-value="secs"]'),
}


class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
    }

    // ----- ТАЙМЕР 
    start() {
        let startTime = this.targetDate.getTime();
        const TIMER = 1000;
        
        setInterval(() => {
            if (startTime <= Date.now()) {
                return;

            } else {
                const currentTime = Date.now();
                const deltaTime = startTime - currentTime;
                const countdown = this.getTimeComponents(deltaTime);
            
                this.updateClockFace(countdown);   
        }}, TIMER)};
        

    // ----- ИНТЕРФЕЙС
    updateClockFace({ days, hours, mins, secs }) {
                refs.daysField.textContent = `${days}`;
                refs.hoursField.textContent = `${hours}`;
                refs.minsField.textContent = `${mins}`;
                refs.secsField.textContent = `${secs}`;
    }
     pad(value) {
    return String(value).padStart(2, '0')
}

    // ----- СЧИТАЕТ СКОЛЬКО ДНЕЙ, ЧАСОВ И МИНУТ С СЕКУНДАМИ 
    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    }
}
// ----- УСТАНОВКА СЧЕТЧИКА  
const countDownTimerNew = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2025'),
});

countDownTimerNew.start();