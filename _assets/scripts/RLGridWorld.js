define(['GridWorld'], function(GridWorldref){
  var RLGridWorld = function(w,h,c) {
    
    var gridWorld = new GridWorldref(w,h,c),
        agentX = 0,
        agentY = 0,
        canvas = c,
        context = c.getContext("2d");
    // gridWorld.setCanvas(c);
    // gridWorld.setWidthHeight(w,h);


    function publicSetCanvas(c){
      canvas = c;
      context = c.getContext("2d");
      gridWorld.setCanvas(c);
      gridWorld.setWidthHeight(w,h);
    }

    function publicDrawGridWorld(){
      gridWorld.drawGridWorld();
    }
    
    function publicDrawAgent(){

    }

    function publicGetName(){
      console.log("RLGridWorld");
    }

    
    function publicReset(){
      gridWorld.reset();
      agentX = 0;
      agentY = 0;
    }

    return {
      getName:publicGetName,
      setWidthHeight:gridWorld.publicSetWidthHeight,
      setCanvas:gridWorld.publicSetCanvas,
      getHeight:gridWorld.publicGetHeight,
      getWidth:gridWorld.publicGetWidth,
      drawGridWorld:publicDrawGridWorld,
      drawCheckerBoard:gridWorld.publicDrawCheckerBoard,
      reset:publicReset
    }

  }
  return RLGridWorld;
})
