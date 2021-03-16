class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:450
        }
        this.rope= Matter.Constraint.create(options)
        this.pointB = pointB
        World.add(world,this.rope)
        
    }
    display(){
        if (this.rope.bodyA){
            var pointA = this.rope.bodyA.position
            var pointB = this.pointB
            push()
            strokeWeight(3)
            stroke("green")
            line(pointA.x,pointA.y,pointB.x,pointB.y)
            pop()
        }
    }
}