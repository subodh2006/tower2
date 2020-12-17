class Polygon extends BaseClass {
    constructor(x, y){
      super(x,y,5,5);
      this.image = loadImage("polygon.png");
      this.Visiblity = 255;
    }
  
   display(){
    // console.log(this.body.speed);
      super.display();
      push();  
       var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
   // strokeWeight(4);
    //stroke("green");
    //fill(255);
    pop();
     }
     
   }
  
  
  
  