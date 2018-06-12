class Car
{
    name:String;
    acceleration:number;

    constructor(name:String)
    {
        this.name=name;
        this.acceleration=0;
    }
    honk()
    {
        console.log(`${this.name} is saying: Toooooooooot!`);
    }
    accelerate(speed:number)
    {
        this.acceleration=this.acceleration+speed;
    }
}
let car=new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);