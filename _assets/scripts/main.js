require(['RLApplication','RLGridWorld'], function (RLApplicationRef, GridWorldRef) {
  
  
  var canvas = document.getElementById('applicationCanvas');
  // var GridWorld = new GridWorldref(10,10,canvas);
  var application = RLApplicationRef();

  function main(){



    // initializeGridWorld();
    // GridWorld.getName();
  }

  //
  // function initializeGridWorld () {
  // 
  //   // var canvas = document.getElementsByClassName('gridWorld')[0];
  // 
  //   // GridWorld.setCanvas(canvas);
  // 
  //   canvas.addEventListener("click", onClickGridWorld, false);
  // 
  //   // GridWorld.setWidthHeight(5,5);
  //   GridWorld.drawGridWorld();
  // 
  //   var resetButton = document.getElementById('reset');
  // 
  //   resetButton.addEventListener("click", onClickReset, false);
  // 
  // }
  // 
  // function onClickGridWorld(e){
  //   console.log("Click");
  // }
  // 
  // function onClickReset(e){
  //   GridWorld.reset();
  // }

  main();


});
