import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs={
    startBtn:document.querySelector('button[data-start]'),
    days:document.querySelector('span[data-days]'),
    hours:document.querySelector('span[data-hours]'),
    minutes:document.querySelector('span[data-minutes]'),
    seconds:document.querySelector('span[data-seconds]'),
  }

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      console.log(options.defaultDate.getTime());
      console.log(selectedDates[0].getTime());

      if (selectedDates[0].getTime() < options.defaultDate.getTime()) {
        window.alert("Please choose a date in the future")
        
      } else {
        refs.startBtn.disabled=false;
        // const selectedTime = selectedDates[0].getTime(); 
        
      }
    },
    
  };

  refs.startBtn.disabled=true;

const fp = flatpickr("#datetime-picker", options );


refs.startBtn.addEventListener('click',()=>{
    
    timerId = setInterval(() => {
        const currentTime = Date.now();
        const selectedTime = 1674748020000;
        const ms =  selectedTime-currentTime;
        console.log(convertMs(ms));
        
        
        
      }, 1000);
  })



function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    refs.days.textContent=`${days}`;
        refs.hours.textContent=`${hours}`;
        refs.minutes.textContent=`${minutes}`;
        refs.seconds.textContent=`${seconds}`;
  
    return { days, hours, minutes, seconds };
  }

