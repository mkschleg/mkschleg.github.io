define([], function(){
  
  var AgentVisual = function(c){
    
    var canvas = c,
        context = c.getContext("2d");

    function draw( loc, size ){
      context.fillStyle = "#0000f0"
      context.fillRect(loc.X, loc.Y, size.W, size.H);
    }
  };

  return AgentVisual;


});
