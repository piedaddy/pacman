// class Pacman {
//   constructor(stage, name, gender, skinTone, xpos, ypos) {
//       this.stage = stage;
//       this.name = name;
//       this.gender = gender;
//       this.skinTone = skinTone;
//       this.position = { x: xpos, y: ypos };
//       this.mouth = "open";
//       this.facing = 'right';
//       this.score = 0;
//       this.alive = true;
//   }
//     mouthChange() {
//       if (this.mouth == "closed") {
//       this.pacboy.style.backgroundPositionX = 0 + 'px';
//       this.mouth = "open";
//     } else if (this.mouth == "open") {
//       this.pacboy.style.backgroundPositionX = 85 + 'px';
//       this.mouth = "closed";
//     }
//   }


//   // resolveInteraction(newPos) {
//   //   const collisionEntity = this.stage.detectCollision(newPos.x, newPos.y);
//   //   if (collisionEntity === null) {
//   //     return newPos;
//   //   }
//   //   if(collisionEntity.type === entity_wall) {
//   //     return this.position;
//   //   }
//   //   if(collisionEntity.type === entity_apple) {
//   //     this.stage.removeEntity(collisionEntity);
//   //   } else if(collisionEntity.type === entity_bomb) {

//   //   }

//   // }

//   resolveInteraction(newPos) {
//     if (!this.stage.withinBorders(newPos.x, newPos.y)) {
//       return this.position;
//     }
//     const collisionEntity = this.stage.detectCollision(newPos.x, newPos.y);

//     if (collisionEntity === null) {
//       return newPos;
//     }

//     if (collisionEntity.type === ENTITY_WALL) {
//       return this.position;
//     }

//     if (collisionEntity.type === ENTITY_APPLE) {
//       this.score += 1;
//       this.stage.removeEntity(collisionEntity);
//     } else if (collisionEntity.type === ENTITY_BOMB) {
//       this.alive = Math.random() < 0.5;
//       this.stage.removeEntity(collisionEntity);
//     }
//     return newPos;
//   }
  


//   move() {
//     document.addEventListener('keydown', (event) => { 
//       console.log(this.xpos, this.ypos, this.stage.width, this.stage.height);
//         this.mouthChange();

//         if(event.key === 'ArrowRight') {
//           if (this.xpos < this.stage.width - 85) {
//             this.pacboy.style.transform = "scale(1,1)";
//             this.xpos = this.xpos + 85;
//             this.pacboy.style.left = this.xpos + 'px';
//           }
//         }

//         if (event.key === 'ArrowLeft') {
//           if (this.xpos > 0) {
//             this.pacboy.style.transform = "scale(-1,1)";
//             this.xpos = this.xpos - 85;
//             this.pacboy.style.left = this.xpos + 'px';
//           }
//         }
    
//         if (event.key === 'ArrowUp') {
//           if (this.ypos > 0) {
//           this.pacboy.style.transform = "rotate(-90deg)";
//           this.ypos = this.ypos - 85;
//           this.pacboy.style.top = this.ypos + 'px';
//           }
//         }
    
//         if (event.key === 'ArrowDown') {
//           if (this.ypos < this.stage.height -85 ) {
//           this.pacboy.style.transform = "rotate(90deg)";
//           this.ypos = this.ypos + 85;
//           this.pacboy.style.top = this.ypos + 'px';
//           }
//         } 
//     });
  
//   }


//   render () {
//   //   this.element = document.createElement('div');
//   //   this.element.className = 'pacman-container';
//   //   this.element.innerHTML = (`
//   //     <div class="entity entity--pac pacboy-active-light"></div>
//   //   `)
//   //  this.pacboy = this.element.querySelector('.pacboy-active-light')

//   // }
//   this.element = document.createElement('div');
//   return this.element;
//   }

//   update() {
//     this.move();
//     this.updateAppearance();
//   }




//   updateAppearance() {
//     if (this.alive) {
//       this.element.className = (
//         `entity entity--pac pac${this.gender}-active-${this.skinTone}`
//       );
//       this.element.textContent = `${this.name}: ${this.score}`;
//     } else {
//       this.element.className = 'entity entity--tomb';
//       this.element.textContent = '';
//     }
//   }




//   mount(parent) {
//     parent.appendChild(this.render());
//     this.update();
//   }
  
//  }





class Pacman {
  constructor(stage, name, gender, skinTone, xpos, ypos) {
    this.stage = stage;
    this.name = name;
    this.gender = gender;
    this.skinTone = skinTone;
    this.position = { x: xpos, y: ypos };
    this.mouth = 'open';
    this.facing = 'right';
    this.score = 0;
    this.alive = true;
  }

  move(direction) {
    if (!this.alive) {
      return;
    }

    this.resolveMouthAndFacing(direction);
    this.position = this.resolveInteraction(
      this.computeNewPosition(direction),
    );
    this.update();
  }

  computeNewPosition(dir) {
    switch (dir) {
      case 'right': return { x: this.position.x + 1, y: this.position.y };
      case 'left': return { x: this.position.x - 1, y: this.position.y };
      case 'up': return { x: this.position.x, y: this.position.y - 1 };
      case 'down': return { x: this.position.x, y: this.position.y + 1 };
      default: return { x: this.position.x, y: this.position.y };
    }
  }

  resolveMouthAndFacing(direction) {
    if (this.mouth === 'open') {
      this.mouth = 'close';
    } else {
      this.mouth = 'open';
    }

    this.facing = direction;
  }

  resolveInteraction(newPos) {
    if (!this.stage.withinBorders(newPos.x, newPos.y)) {
      return this.position;
    }

    const collisionEntity = this.stage.detectCollision(newPos.x, newPos.y);

    if (collisionEntity === null) {
      return newPos;
    }

    if (collisionEntity.type === ENTITY_WALL) {
      return this.position;
    }

    if (collisionEntity.type === ENTITY_APPLE) {
      this.score += 1;
      this.stage.removeEntity(collisionEntity);
    } else if (collisionEntity.type === ENTITY_BOMB) {
      this.alive = Math.random() < 0.5;
      this.stage.removeEntity(collisionEntity);
    }

    return newPos;
  }

  render() {
    this.element = document.createElement('div');
    return this.element;
  }

  mount(parent) {
    parent.appendChild(this.render());
    this.update();
  }

  update() {
    this.updateAppearance();
    this.updatePosition();

    if (this.alive) {
      this.updateMouth();
      this.updateFacing();
    }
  }

  updateAppearance() {
    if (this.alive) {
      this.element.className = (
        `entity entity--pac pac${this.gender}-active-${this.skinTone}`
      );
      this.element.textContent = `${this.name}: ${this.score}`;
    } else {
      this.element.className = 'entity entity--tomb';
      this.element.textContent = '';
    }
  }

  updatePosition() {
    this.element.style.left = `${this.position.x * TILE_SIZE}px`;
    this.element.style.top = `${this.position.y * TILE_SIZE}px`;
  }

  updateMouth() {
    if (this.mouth === 'open') {
      this.element.style.backgroundPositionX = '0px';
    } else {
      this.element.style.backgroundPositionX = `${TILE_SIZE}px`;
    }
  }

  updateFacing() {
    if (this.facing === 'right') {
      this.element.style.backgroundPositionY = '0px';
    } else if (this.facing === 'left') {
      this.element.style.backgroundPositionY = `${-TILE_SIZE}px`;
    } else if (this.facing === 'down') {
      this.element.style.backgroundPositionY = `${-2 * TILE_SIZE}px`;
    } else if (this.facing === 'up') {
      this.element.style.backgroundPositionY = `${-3 * TILE_SIZE}px`;
    }
  }
}