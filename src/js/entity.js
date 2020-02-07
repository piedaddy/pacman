class Entity {
  constructor(x,y, type) {
    this.x = (x * 85) + 'px';
    this.y = y;
    this.type= type;
    // this.wall;
  
  
  }


  render () {
    this.element = document.createElement('div');
    this.element.className = 'entity--wall';

    let wall = this.element.querySelector('.entity--wall');
    // wall.style.width = (this.x * 85)+ 'px';
    // wall.style.height = (this.y * 85)+ 'px';
    // console.log(wall.style.height);
      // this.x = (this.x * 85) + 'px';
      console.log(this.x);
    wall.style.left = this.x;

  }

  mount(parent) {
    this.render();
    parent.appendChild(this.element);
  }















}