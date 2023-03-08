const countdownHandler = () => {
  const timeElement = document.querySelector('.time');

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let countdownInterval;

  const countDown = () => {
    const today = new Date();
    const endOfSales = new Date(2023, 02, 15);
    const timeLeft = endOfSales - today;

    if (timeLeft <= 0) {
      timeElement.innerHTML = '0 dni, 0 godzin, 0 minut - Promocja zakończona!';
      clearInterval(countdownInterval);
      return;
    }

    const daysLeft = Math.floor(timeLeft / day);
    const hoursLeft = Math.floor((timeLeft % day) / hour);
    const minutesLeft = Math.floor((timeLeft % hour) / minute);

    timeElement.innerHTML = `${daysLeft} dni, ${hoursLeft} godzin, ${minutesLeft} minut`;
  };

  countDown();
  countdownInterval = setInterval(countDown, minute);
};

document.addEventListener('DOMContentLoaded', countdownHandler);
