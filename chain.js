class Chain{
    constructor(bodyA,bodyB){
        var opt={
            bodyA:bird.body,
            bodyB: cLog.body,
            stiffness:0.04,
            length:10
        }
       this.chain=Constraint.create(opt);
       World.add(world,this.chain); 
    }
    display(){
        line(bird.body.position.x,bird.body.position.y,cLog.body.position.x,cLog.body.position.y);   
    }
}