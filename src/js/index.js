document.addEventListener('DOMContentLoaded', () => {
  console.log('it works');

  const app = document.querySelector('#app')
  // const backStage = stage.querySelector('.stage')


  const stage1 = new Stage(12,6);
  const pacman1 = new Pacman(stage1, 0, 'closed');
  const entity1 = new Entity (2,2,"wall");
  // const entity2 = new Entity (1,1,"apple");



  console.log(app);
  console.log(stage1);



  stage1.mount(app);
  pacman1.mount(stage1.stage);
  entity1.mount(stage1.stage);
  // entity2.mount(stage1.stage);

  



}); //END OF JS



/*
NOTES FROM PRESENTATIONS 



