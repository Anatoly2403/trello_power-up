import { addZero } from '../../utils';

document.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('.timer__button');
  const counter = document.querySelector('.timer__counter');

  let timerId = null;
  let hour = 0;
  let min = 0;
  let sec = 0;


  function updateCounter(h, m, s) {
    const time = `${addZero(h)}:${addZero(m)}:${addZero(s)}`;
    counter.textContent = time;
  }

  updateCounter(hour, min, sec);

  start.addEventListener('click', () => {
    startTimer();
  });

  function startTimer() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    } else {
      timerId = setInterval(() => {
        sec++;

        if (sec === 60) {
          sec = 0;
          min++;
        }

        if (min === 60) {
          min = 0;
          hour++;
        }
        updateCounter(hour, min, sec);
      }, 1000);
    }
  }
})