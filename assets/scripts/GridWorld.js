

define([],function () {
  var GridWorld = (function (w,h,c) {

    var worldPrototype5x5 = [[0,0,0,0,0],
                             [0,0,0,0,0],
                             [0,0,0,0,0],
                             [0,0,0,0,0],
                             [1,1,1,1,1]]


    var worldPrototype10x10 = [[0,0,0,0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0,0,0,0],
                          [0,0,0,0,1,2,0,0,0,0],
                          [0,0,0,0,3,4,0,0,0,0],
                          [0,0,0,0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0,0,0,0]];


    var colors = ["#FFFFFF", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF","#00FFFF","#000000"];


    var width = w,
        height = h,
        tileWidth = 50,
        tileHeight = 50,
        worldModel = null,
        canvas = null,
        context = null;
        
    var agentX = 0, agentY = 0;
    //These are called when an object is created...Weird...
    privateSetCanvas(c);
    publicReset();
    console.log("Hello");

    function publicSetWidthHeight( w, h ){
      privateSetWidth(w);
      privateSetHeight(h);
      console.log(tileWidth);
      console.log(tileHeight);
      if(tileWidth < tileHeight){
        tileHeight = tileWidth;
      } else {
        tileWidth = tileHeight;
      }
      console.log(tileWidth);
      console.log(tileHeight);
      publicReset();
    }

    function publicReset(){
      console.log("Reset");
      worldModel = [];
      if(width == 10 && height == 10){
        var i, j;
        for(j = 0; j < height; j++){
          worldModel[j] = [];
          for(i = 0; i < width; i++){
            worldModel[j][i] = worldPrototype10x10[j][i];
          }
        }
      } else if(width == 5 && height == 5){
        var i, j;
        for(j = 0; j < height; j++){
          worldModel[j] = [];
          for(i = 0; i < width; i++){
            worldModel[j][i] = worldPrototype5x5[j][i];
          }
        }
      } else {
        var i, j;
        worldModel = []
        for(j = 0; j < height; j++){
          worldModel[j] = [];
          for(i = 0; i < width; i++){
            worldModel[j][i] = 0;
          }
        }
      }
      publicDrawGridWorld();
      
      // return {agentX, agentY}, 0, 0;

    }

    function privateSetWidth( w ){
      width = w;
      tileWidth = canvas.width/width;
    }

    function privateSetHeight( h ){
      height = h;
      tileHeight = canvas.height/height;
    }

    function publicGetHeight(){
      return height;
    }

    function publicGetWidth(){
      return width;
    }

    function privateSetCanvas( c ){
      canvas = c;
      context = canvas.getContext("2d");
      tileWidth = canvas.width/width;
      tileHeight = canvas.height/height;
    }
    
    function publicOnClick(e){
      var pos = privateGetClickPosition(e)
      console.log(pos);
      tile = publicFindTile(pos.x,pos.y)
      console.log(tile)
      if(worldModel[tile.y][tile.x] == 0){
        publicSetTile(tile.x,tile.y,1)
      } else {
        publicSetTile(tile.x,tile.y,0)
      }
    }
    
    function privateGetClickPosition(e){
      var xPos = 0;
      var yPos = 0;
      
      var el = e.currentTarget;

      while (el) {
        if (el.tagName == "BODY") {
          // deal with browser quirks with body/window/document and page scroll
          var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
          var yScroll = el.scrollTop || document.documentElement.scrollTop;
          
          xPos += (el.offsetLeft - xScroll + el.clientLeft);
          yPos += (el.offsetTop - yScroll + el.clientTop);
        } else {
          // for all other non-BODY elements
          xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
          yPos += (el.offsetTop - el.scrollTop + el.clientTop);
        }
        
        el = el.offsetParent;
      }
      
      xPos = e.clientX - xPos;
      yPos = e.clientY - yPos;

      return {
        x: xPos,
        y: yPos
      };
    }

    function publicFindTile (xpx,ypx){
      return {
        x:Math.floor(xpx/tileWidth),
        y:Math.floor(ypx/tileHeight)
      };
    }
    
    
    function publicSetTile (tileX, tileY, type){
      worldModel[tileY][tileX] = type;
      context.fillStyle = colors[worldModel[tileY][tileX]]
      context.fillRect(tileWidth*tileX, tileHeight*tileY, tileWidth,tileHeight);
      context.strokeRect(tileWidth*tileX, tileHeight*tileY, tileWidth,tileHeight);
    }

    function publicDrawGridWorld(){
      if(worldModel == null){
        publicReset();
      }
      var i,j;
      context.strokeStyle = "#000000";
      for( i = 0; i < width; i++ ){
        for( j = 0; j < height; j++){
          context.fillStyle = colors[worldModel[j][i]]
          context.fillRect(tileWidth*i, tileHeight*j, tileWidth,tileHeight);
          context.strokeRect(tileWidth*i, tileHeight*j, tileWidth,tileHeight);
        }
      }
      
      context.fillStyle = "#000000";
      if((width) * tileWidth < canvas.width){
        context.fillRect((width) * tileWidth, 0, canvas.width-((width) * tileWidth),canvas.height);
      } else if((height) * tileHeight < canvas.height){
        context.fillRect(0, height*tileHeight, canvas.width, canvas.height - (height*tileHeight));
      }

    }
    
    function publicDrawCheckerBoard(){
      var i, j;
      context.strokeStyle = "#000000";
      context.fillStyle = "#FFFFFF";
      for( i = 0; i < width; i+=2 ){
        for( j = 0; j < height; j+=2 ){
          context.fillRect(tileWidth*i, tileHeight*j, tileWidth,tileHeight);
          context.strokeRect(tileWidth*i, tileHeight*j, tileWidth,tileHeight);
        }
      }
      for( i = 1; i < width; i+=2 ){
        for( j = 1; j < height; j+=2 ){
          context.fillRect(tileWidth*i, tileHeight*j, tileWidth,tileHeight);
          context.strokeRect(tileWidth*i, tileHeight*j, tileWidth,tileHeight);
        }
      }
      context.strokeStyle = "#000000";
      context.fillStyle = "#FFFFFF";
      for( i = 1; i < width; i+=2 ){
        for( j = 0; j < height; j+=2 ){
          context.fillRect(tileWidth*i, tileHeight*j, tileWidth,tileHeight);
          context.strokeRect(tileWidth*i, tileHeight*j, tileWidth,tileHeight);
        }
      }
      for( i = 0; i < width; i+=2 ){
        for( j = 1; j < height; j+=2 ){
          context.fillRect(tileWidth*i, tileHeight*j, tileWidth,tileHeight);
          context.strokeRect(tileWidth*i, tileHeight*j, tileWidth,tileHeight);
        }
      }
    }



    return {
      setWidthHeight:publicSetWidthHeight,
      getHeight:publicGetHeight,
      getWidth:publicGetWidth,
      drawGridWorld:publicDrawGridWorld,
      drawCheckerBoard:publicDrawCheckerBoard,
      setTile: publicSetTile,
      reset:publicReset,
      onClick:publicOnClick
    };

  });
  
  return GridWorld;

});
