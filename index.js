const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
let arr = [];
let count = document.querySelector('#count');
const total = document.querySelector('#total');
const movieSelect = document.querySelector('#movie');

let ticketPrice = Number(movieSelect.value);

populateFromLocalStorage();

movieSelect.addEventListener('change', (e) => {
  ticketPrice = Number(e.target.value);
  setMovieData(e.target.selectedIndex, e.target.value);
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

  const seatsIndex = [...seatsSelect].map((seat) => [...seats].indexOf(seat));

  const seatsSelectLength = seatsSelect.length;

  count.innerText = seatsSelectLength;
  total.innerText = seatsSelectLength * ticketPrice;
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
}

function setMovieData(index, value) {
  localStorage.setItem('selectedMovieIndex', index);
  localStorage.setItem('selectedMoviePrice', value);
}

function populateFromLocalStorage() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }
  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

countSeats();

// ---------
// NOTES
// ---------
// My original for CountSeats function way.
// function countSeats(e, list) {
//   if (e.target.classList.contains('selected') && !e.target.classList.contains('occupied')) {
//     count.innerText++;
//     list.push(e.target);
//   } else if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
//     count.innerText--;
//     list.pop();
//   }
//   total.innerText = Number(count.innerText) * ticketPrice;

// }
