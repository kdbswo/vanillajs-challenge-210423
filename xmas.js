const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h2");
// You're gonna need this
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const remain = xmasDay - Date.now();
  console.log(remain);
  const time = new Date(xmasDay - Date.now());
  console.log(time);
  const hours = time.getHours();
  console.log(time);
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();

