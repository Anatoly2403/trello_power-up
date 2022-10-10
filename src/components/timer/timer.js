document.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('.timer__button');
  const counter = document.querySelector('.timer__counter');

  const timerId = null;
  let hour = min = sec = 0;


  function updateCounter(h, m, s) {
    const time = `${addZero(h)}:${addZero(m)}:${addZero(s)}`;
    counter.textContent = time;
  }

  updateCounter(hour, min, sec);


  function addZero(num) {
    return (num < 10) ? `0${num}` : `${num}`
  }

  start.addEventListener('click', () => {
    if (timerId) {
      start.textContent = 'start';
      stopTimer();
    } else {
      start.textContent = 'stop';
      startTimer();
    }
  });

  function startTimer() {
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

    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerId)
  }
})