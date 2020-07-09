// TODO: React to a click on the button!
// DOM Import for the button
const theButton = document.querySelector('#clickme')
const audio = new Audio('sound.mp3');


//Adding an event listener
theButton.addEventListener('click', () => {
  theButton.innerText = "Bingo !";
  audio.play()
  //theButton.remove();
})
