class Paper{
    constructor(x, y, r) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, r/2, options);
        this.r  = r
        this.image = loadImage("paper.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        fill("pink")
        image(this.image,0,0,70,70)
        pop();
      }
}