
let items = document.querySelectorAll('.counter h3')

let futureDate = new Date(2022, 3, 2, 12, 00, 20)
futureDate = futureDate.getTime();


function getRemain() {
  const currentDate = new Date().getTime();

  const diff = futureDate - currentDate;
  let oneDay = 24 * 60 * 60 * 1000;
  let oneHour = 60 * 60 * 1000;
  let oneMin = 60 * 1000;
  let oneSec = 1000;

  let day = Math.floor(diff / oneDay)
  let hour = Math.floor((diff % oneDay) / oneHour)
  let min = Math.floor((diff % oneHour) / oneMin)
  let sec = Math.floor((diff % oneMin) / oneSec)

  let values = [day, hour, min, sec]

  function format(time) {
    if (time < 10) {
      return `0${time}`
    }
    return time
  }
  items.forEach((item, index) => {
    item.innerHTML = format(values[index])
  })
}

let cutDown = setInterval(getRemain, 1000);
getRemain();
