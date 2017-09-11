class GridWorld {
  constructor() {
    this.width = 10;
    this.height = 10;
    this.tileWidth = 50;
    this.tileHeight = 50;
    this.worldModel = null;
    this.canvas = null;
    this.context = null;
  }
  
  constructor(w,h,canvas){
    this.width = w;
    this.height = h;
    this.worldModel = null;
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.tileWidth = canvas.width/width;
    this.tileHeight = canvas.height/height;

    resetWorldModel()

  }
  
  resetWorldModel() {
    console.log("Reset");
    this.worldModel = [];
    if(width == 10 && height == 10){
      var i, j;
      for(j = 0; j < height; j++){
        this.worldModel[j] = [];
        for(i = 0; i < width; i++){
          this.worldModel[j][i] = worldPrototype10x10[j][i];
        }
      }
    } else if(width == 5 && height == 5){
      var i, j;
      for(j = 0; j < height; j++){
        this.worldModel[j] = [];
        for(i = 0; i < width; i++){
          this.worldModel[j][i] = worldPrototype5x5[j][i];
        }
      }
    } else {
      var i, j;
      // this.worldModel = []
      for(j = 0; j < height; j++){
        this.worldModel[j] = [];
        for(i = 0; i < width; i++){
          this.worldModel[j][i] = 0;
        }
      }
    }
  }




}
