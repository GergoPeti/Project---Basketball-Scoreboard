'use strict';

const homeScore = document.querySelector('.home-score');
const addOneHome = document.querySelector('.add1-home');
const addTwoHome = document.querySelector('.add2-home');
const addThreeHome = document.querySelector('.add3-home');

const guestScore = document.querySelector('.guest-score');
const addOneGuest = document.querySelector('.add1-guest');
const addTwoGuest = document.querySelector('.add2-guest');
const addThreeGuest = document.querySelector('.add3-guest');

const newGameEl = document.querySelector('.new-game');

const leaderHome = document.querySelector('.leader-home');
const leaderGuest = document.querySelector('.leader-guest');

let homePoints, guestPoints;

const refreshHomeScore = function () {
  homeScore.textContent = homePoints;
};

const refreshGuestScore = function () {
  guestScore.textContent = guestPoints;
};

const leader = function () {
  console.log(homePoints);
  if (homePoints > guestPoints) {
    leaderHome.textContent = 'L E A D E R';
  } else if (homePoints < guestPoints) {
    leaderGuest.textContent = 'L E A D E R';
  } else if (homePoints === guestPoints) {
    leaderHome.textContent = '';
    leaderGuest.textContent = '';
  }
};

const init = function () {
  homePoints = 0;
  guestPoints = 0;
  refreshHomeScore();
  refreshGuestScore();
  leader();
};
init();

// const newGame = function () {
//   homePoints = 0;
//   guestPoints = 0;
//   refreshHomeScore();
//   refreshGuestScore();
//   leader();
// };

newGameEl.addEventListener('click', init);

addOneHome.addEventListener('click', function () {
  homePoints++;
  refreshHomeScore();
  leader();
});

addTwoHome.addEventListener('click', function () {
  homePoints += 2;
  refreshHomeScore();
  leader();
});

addThreeHome.addEventListener('click', function () {
  homePoints += 3;
  refreshHomeScore();
  leader();
});

addOneGuest.addEventListener('click', function () {
  guestPoints++;
  refreshGuestScore();
  leader();
});

addTwoGuest.addEventListener('click', function () {
  guestPoints += 2;
  refreshGuestScore();
  leader();
});

addThreeGuest.addEventListener('click', function () {
  guestPoints += 3;
  refreshGuestScore();
  leader();
});
