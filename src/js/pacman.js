class Pacman { 
  constructor(stage, position, mouth) {
    this.stage = stage;
    this.xpos = position;   
    this.mouth = mouth;
    this.ypos= 0;
    
  }

    mouthChange() {
      if (this.mouth === "closed") {
      this.pacboy.style.backgroundPositionX = 0 + 'px';
      this.mouth = "open";
    } else if (this.mouth === "open") {
      this.pacboy.style.backgroundPositionX = 85 + 'px';
      this.mouth = "closed";
    }
  }


  resolveInteraction(newPos) {
    const collisionEntity = this.stage.detectCollision(newPos.x, newPos.y);
    if (collisionEntity === null) {
      return newPos;
    }
    if(collisionEntity.type === entity_wall) {
      return this.position;
    }
    if(collisionEntity.type === entity_apple) {
      this.stage.removeEntity(collisionEntity);
    } else if(collisionEntity.type === entity_bomb) {

    }

  }
  



  move() {

    document.addEventListener('keydown', (event) => { 
      console.log(this.xpos, this.ypos, this.stage.width, this.stage.height);
      
      
        this.mouthChange();

        if(event.key === 'ArrowRight') {
            // this.detectCollision(this.xpos, this.ypos);

          if (this.xpos < this.stage.width - 85) {
            this.pacboy.style.transform = "scale(1,1)";
            this.xpos = this.xpos + 85;
            this.pacboy.style.left = this.xpos + 'px';
          }
        }

        if (event.key === 'ArrowLeft') {
          if (this.xpos > 0) {
            this.pacboy.style.transform = "scale(-1,1)";
            this.xpos = this.xpos - 85;
            this.pacboy.style.left = this.xpos + 'px';
          }
        }
    
        if (event.key === 'ArrowUp') {
          if (this.ypos > 0) {
          this.pacboy.style.transform = "rotate(-90deg)";
          this.ypos = this.ypos - 85;
          this.pacboy.style.top = this.ypos + 'px';
          }
        }
    
        if (event.key === 'ArrowDown') {
          if (this.ypos < this.stage.height -85 ) {
          this.pacboy.style.transform = "rotate(90deg)";
          this.ypos = this.ypos + 85;
          this.pacboy.style.top = this.ypos + 'px';
          }
        } 
  });
  
  }


  render () {
    this.element = document.createElement('div');
    this.element.className = 'pacman-container';
    this.element.innerHTML = (`
      <div class="entity entity--pac pacboy-active-light"></div>
    `)
   this.pacboy = this.element.querySelector('.pacboy-active-light')

    // let position = (Stage());
  }



  update = () => {
    this.move();
  }



  mount(parent) {
    this.render();
    this.update();
    parent.appendChild(this.element);
  }
  
 }



// Create a variable holding which way is the pacman facing (up/down/right/left). Change the moveRight function to just move with an input specifying the direction.
// Implement all four arrow keys so that the pacman can move in all directions turning its face accordingly..