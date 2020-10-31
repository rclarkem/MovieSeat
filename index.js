const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

let count = document.querySelector('#count');
const total = document.querySelector('#total');
const movieSelect = document.querySelector('#movie');

let ticketPrice = Number(movieSelect.value);

movieSelect.addEventListener('change', (e) => {
  ticketPrice = e.target.value;
  countSeats();
});

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    countSeats();
  }
});

function countSeats() {
  let seatsSelect = document.querySelectorAll('.row .seat.selected');
  console.log(seatsSelect);

  const seatsSelectLength = seatsSelect.length;

  count.innerText = seatsSelectLength;
  return (total.innerText = seatsSelectLength * ticketPrice);

  // My original way but can do it the way above to as an node list

  // if (e.target.classList.contains('selected') && !e.target.classList.contains('occupied')) {
  //   count.innerText++;
  // } else if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
  //   count.innerText--;
  // }
  // return (total.innerText = Number(count.innerText) * ticketPrice);
}
