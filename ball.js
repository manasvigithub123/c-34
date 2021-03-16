class Ball{
    constructor(x,y,width,height){
        var options= {
            frictionAir:0.005,
            density:0.04

        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
        this.width=width
        this.height=height
    }
    display(){
        var pos= this.body.position
        var angle= this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill("grey") 
        stroke("orange")
        strokeWeight(4)
        ellipseMode(CENTER)
        ellipse(0,0,this.width,this.height)
        pop()

        
    }
}
