class Stone {
    constructor(x,y,width,height,angle){
        var options = {
           isStatic:false,
           restitution:0,
           friction:1,
           density:1.2
        }
        this.width = width;
        this.height = height;
        this.image = loadImage("image/stone.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}