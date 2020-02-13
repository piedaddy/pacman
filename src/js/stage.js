class Stage {
  constructor(width, height){
    let tile_size = 85;
    this.width = width * tile_size;
    this.height = height * tile_size;



  }


  render() {
    this.stage = document.createElement('div');
    this.stage.className = 'stage';
    this.stage.style.width = this.width + 'px';
    this.stage.style.height = this.height + 'px';
    
  }


    addEntity(entity) {
      entity.mount(this.element);
      this.entities.push(entity);
    }

    removeEntity(entity) {
      const idx = this.entities.indexOf(entity);
      if (idx > -1) {
        this.entities.splice(idx,1);
        entity.unmount();
      }
    }
    

    detectCollision(x,y) {
      for (const entity of this.entities) {
        if (entity.xpos === x & entity.ypos === y) {
         return entity; 
        } 
      }
      return null;
     }
  

  mount(parent) {
    this.render();
    parent.appendChild(this.stage);
  }




}





//let stage = this.stage.querySelector('.stage');
