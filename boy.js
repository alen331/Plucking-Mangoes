/*class Boy {
    constructor(x,y,width,height,angle){
        var options = {
            'density':5.0,
            //isStatic:true
        }
        this.width = width;
        this.height = height;
        this.image = loadImage("image/boy.png");
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
}*/