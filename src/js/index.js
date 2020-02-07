document.addEventListener('DOMContentLoaded', () => {
  console.log('it works');

  const pacboy = document.querySelector('.pacboy-active-light')

  document.addEventListener('keydown', (event) => {
    let xpos = 0; 
    if(event.key === 'ArrowRight') {
    console.log('work');
    xpos = xpos + 85 +'px'
    pacboy.style.backgroundPositionX = xpos;
    const tile_size = xpos
    pacboy.style.marginLeft = xpos;

    }

});



}); //END OF JS


// Create a class called Pacman which will hold the x position and mouth closed/opened state. For the closed/opened state use a variable called mouth.
// Create a method moveRight() inside your class that will move the pacman to the right.
// Create an update() function that will update the pacman's position on the screen.