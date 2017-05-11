function VehicleConstructor(Name, Wheels, Passengers, Speed){
    if(!(this instanceof VehicleConstructor)){
        console.log("returning the cars and more things");
        return new VehicleConstructor(Name, Wheels, Passengers, Speed);
    }

    var distance_traveled = 0;

    var self = this;
    this.speed = Speed;
    this.Name = Name;
    this.Wheels = Wheels;
    this.Passengers = Passengers;
    function updateDistanceTravelled(){
        distance_traveled += self.speed;
        console.log("Distance Traveled: " + distance_traveled);
    }

    this.makenoise = function(){
        console.log("I am " + this.Name + ". I have " + this.Wheels + " of wheels and " + " I can take up to " + this.Passengers + " passengers. I am running as " + this.speed + " MPH.")
    };

    this.makenoise1 = function () {
      console.log("Ring ring");
    };

    this.sadannoise = function () {
      console.log("Honk Honk");
    };
    this.move = function(){
        updateDistanceTravelled();
        this.makenoise();
    }
}

var car = new VehicleConstructor('Audi', 4, 4 ,25);
var sadan = new VehicleConstructor('Sadan', 6, 6 ,25);
var bike = new VehicleConstructor('Bike', 2, 1, 12);


car.move();
bike.move();
sadan.move();