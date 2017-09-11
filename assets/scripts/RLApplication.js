

define(['GridWorld', 'Agent', 'AgentVisual'], function (GridWorldRef, AgentRef, AVRef) {

  //This should handle ALL listeners.

  var RLApplication = function () {
    
    var canvas = null,
        buttons = {},
        settings = {},
        environment = null,
        agentX = 0,
        agentY = 0;
    
    init();
    
    function init(){
      
      buttons.start   = document.getElementById('start');
      buttons.stop    = document.getElementById('stop');
      buttons.slower  = document.getElementById('slower');
      buttons.faster  = document.getElementById('faster');

      canvas = document.getElementById('applicationCanvas');
      
      settings.width_height = document.getElementsByClassName('gridSizeSelector');
      settings.resetButton = document.getElementById('reset');

      buttons.start.addEventListener("click", onStartClick, false);
      buttons.stop.addEventListener("click", onStopClick, false);
      buttons.slower.addEventListener("click", onSlowerClick, false);
      buttons.faster.addEventListener("click", onFasterClick, false);

      canvas.addEventListener("click", onCanvasClick, false);

      settings.width_height[0].addEventListener('change', onSettingsWidthChange);
      settings.width_height[1].addEventListener('change', onSettingsHeightChange);

      //We should be able to switch this out when needed. Will work on creating a simple interface for environments.
      environment = GridWorldRef(10,10,canvas);

      // agent = AgentRef();
      agentVis = AVRef(canvas);
      environment.setTile(agentX, agentY, 1);
      console.log("Init");

    }
    


    function onStartClick(e){
      console.log("Start");
      
      console.log({agentX, agentY});
      
      

      environment.setTile(agentX, agentY, 0);
      agentX += 1;
      console.log({agentX, agentY});
      environment.setTile(agentX, agentY, 1);


    }

    function onStopClick(e){
      console.log("Stop");
    }

    function onSlowerClick(e){
      console.log("Slower");
    }

    function onFasterClick(e){
      console.log("Faster");
    }

    function onCanvasClick(e){
      console.log("Canvas");
      environment.onClick(e);
    }
    
    function onSettingsResetClicked(e){
      console.log("Reset");
      environment.reset();
      agentX = 0;
      agentY = 0;
    }

    function onSettingsWidthChange(e){
      var w = e.currentTarget.value;
      var h = environment.getHeight()
      environment.setWidthHeight(w,h);
    }
    
    function onSettingsHeightChange(e){
      var h = e.currentTarget.value;
      var w = environment.getWidth()
      environment.setWidthHeight(w,h);
    }

  }


  return RLApplication;

})



// 
// Components.utils.import("resource://_assets/scripts/GridWorld.js");
// 
// window.onload = function () {
// 
//   initializeGridWorld();
// 
// };
// 
// function initializeGridWorld () {
// 
//   var canvas = document.getElementsByClassName('gridWorld')[0];
// 
//   GridWorld.setCanvas(canvas);
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
// 
//   // console.log(canvas);
// 
//   // var context = canvas.getContext("2d");
// 
// 
//   // context.fillStyle = "#ff0000";
// 
//   // context.fillRect(0,0,50,50);
// 
// }
// 
// function onClickGridWorld(e){
//   console.log("Click")
// }
// 
// function onClickReset(e){
//   GridWorld.reset();
// }
