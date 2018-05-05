function Ninja (name){
    var speed = 3;
    var strngth = 3;
    this.name = name;
    this.health = 100;
    this.sayName = function(){
        console.log("My ninja name is " + this.name);
    }

    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strngth);
    }

    this.drinkSake = function(){
        this.health += 10;
        console.log("Health: " + this.health);
    }

} 

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkSake();