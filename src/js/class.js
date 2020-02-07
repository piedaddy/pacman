class Pacman { 
  constructor(position, mouth) {
    this.position = position;   
    this.mouth = mouth;
  }

moveRight() {
  pacboy.style.marginLeft = this.position + 'px';
}


update = () => {
  this.moveRight();
}










}