document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app')
  const stage = new Stage(12,6);
  const pac = new Pacman(stage, 'Gaby', 'girl', 'light', 0, 0);
  stage.mount(app);
  pac.mount(stage.element);

  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 39) {
      pac.move('right');
    } else if (e.keyCode === 37) {
      pac.move('left');
    } else if (e.keyCode === 38) {
      pac.move('up');
    } else if (e.keyCode === 40) {
      pac.move('down');
    }
  });

  



}); 




