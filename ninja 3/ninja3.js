// class Dot {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     // prototype method
//     showLocation() {
//         console.log(`This Dot is at x ${this.x} and y ${this.y}`);
//     }
//     // static method
//     static getHelp() {
//         console.log("This is a Dot class, for created Dots! A Dot takes x and y coordinates, type 'new Dot' to create one!");
//     }
// } 
// const dot3 = new Dot(4, 2);
// // we can see showLocation from our instance...
// console.log(dot3.showLocation);
// // but we can't see getHelp
// console.log(dot3.getHelp);
// // however we can call getHelp this way:
// Dot.getHelp();

class Ninja
{
    constructor(name)
    {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    showStats()
    {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    sayName()
    {
        console.log(`${this.constructor.name}'s name is ${this.name}`);
    }

    drinkSake()
    {
        this.health += 10;
        console.log(`${this.constructor.name}'s health is ${this.health}`);
    }
}


class Sensei extends Ninja
{
    constructor(name) 
    {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;

    }
    speakWisdom()
    {
        super.drinkSake();
    }
}


// let ninja1 = new Ninja("Alex");
// console.log(ninja1);
// ninja1.showStats();
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.drinkSake();

let newSensei = new Sensei("Master Splinter");
console.log(newSensei);
newSensei.sayName();
newSensei.showStats();
newSensei.speakWisdom();