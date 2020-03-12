const entity_wall = 'wall';
const entity_apple = 'apple';
const entity_bomb = 'bomb';


class Entity {
  constructor(xpos,ypos, type) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.type= type;
  
  }



  render () {
    this.element = document.createElement('div');
    this.element.className = 'entity--wall';
    this.element.style.left = (this.xpos * 85) + 'px';
    this.element.style.top = (this.ypos * 85)+ 'px';
    return this.element;


  }






  mount(parent) {
    this.element = this.render();
    // this.arrayPush();
    parent.appendChild(this.element);
  }


  unmount(){
    this.element.parentNode.removeChild(this.element);
    this.element = null;
  }








}



   // this.element.style.width = (this.x * 85)+ 'px';
    // this.element.style.height = (this.y * 85)+ 'px';

    // this.element.style.width = this.x;
   // this.element.style.height = this.ypos;
