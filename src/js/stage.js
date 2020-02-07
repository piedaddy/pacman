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
    

    // let stage = this.stage.querySelector('.stage');
  }

  mount(parent) {
    this.render();
    parent.appendChild(this.stage);
  }




}


