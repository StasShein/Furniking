const days_first = document.querySelector('.days-first');
const hours_first = document.querySelector('.hours-first');
const minutes_first = document.querySelector('.minutes-first');
const secunds_first = document.querySelector('.secunds-first');

const days_seconds = document.querySelector('.days-seconds');
const hours_seconds = document.querySelector('.hours-seconds');
const minutes_seconds = document.querySelector('.minutes-seconds');
const secunds_seconds = document.querySelector('.secunds-seconds');



function timer(data, number){

  document.addEventListener('DOMContentLoaded', function() {
    
    const deadline = data;
    
    let timerId = null;
  
    function countdownTimer() {

      const diff = deadline - new Date();

      if (diff <= 0) {

        clearInterval(timerId);

      }

      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

      eval(`${'days_' + number}`).innerHTML = `${days < 10 ? '0' + days : days} <p> DAY </p>`;
      eval(`${'hours_' + number}`).innerHTML = `${hours < 10 ? '0' + hours : hours} <p> HRS </p>`;
      eval(`${'minutes_' + number}`).innerHTML = `${minutes < 10 ? '0' + minutes : minutes} <p> MIN </p>`;
      eval(`${'secunds_' + number}`).innerHTML = `${seconds < 10 ? '0' + seconds : seconds} <p> SEC </p>`;
    }
    
    countdownTimer();
   
    timerId = setInterval(countdownTimer, 1000);

  });
}

timer(new Date(2023, 6, 10), 'first')

timer(new Date(2023, 7, 12),'seconds')