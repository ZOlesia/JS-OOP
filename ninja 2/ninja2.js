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
        console.log(this.name + " - Health: " + this.health);
    }

    this.punch = function(ninja)
    {
        if(ninja instanceof Ninja)
        {
            Ninja.health -= 5;
            console.log(this.name + " - health: " + this.health);
            console.log(ninja.name + " - health: " + ninja.health);
        }
        else
        {
            console.log("Punch only");
        }
    }

    this.kick = function(ninja)
    {
        if(ninja instanceof Ninja)
        {
            ninja.health -= 15 * strngth;
            console.log(ninja.name + " - health: " + ninja.health );
            console.log("***");
            console.log(this.name + " - health: " + this.health);
        }
        else
        {
            console.log("Kick only");
        }
    }

} 

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkSake();
console.log("***************");
var ninja2 = new Ninja("Alex");
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();
console.log("***************");
ninja2.punch(ninja1);
console.log("***************");
ninja2.punch(ninja1);
console.log("***************");
ninja2.punch(ninja1);
console.log("***************");
ninja1.punch(ninja2);
console.log("***************");
console.log("***************");
console.log("***************");
ninja2.kick(ninja1);