class Chain{
    constructor(bodyA,bodyB){
        var options ={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5
        }
        this.chin = constrant.create(options);
        World.add(myWorld,this.chain);
    }

    show(){
        var pos1 = this.chain.bodyA.position;
        var pos2 = this.chain.bodyB.position;
        stroke(0)
        strokeWeight(5);
        line(pos1.x,pos1.y,pos2.x,pose2.y);
    }
}