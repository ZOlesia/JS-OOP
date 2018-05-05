class Card{
    constructor(suit, value, face)
    {
        this.suit = suit;
        this.value = value;
        this.face = face;
    }
}
class Deck
{
    constructor()
    {
        this.cards = [];
        this.reset();
    }

    reset()
    {
        this.cards = [];
        let suits = ["Clubs", "Spades", "Hearts", "Diamonds"];
        let cardinfo = {
            "Ace": 1,
            "Two": 2,
            "Three": 3,
            "Four": 4,
            "Five": 5,
            "Six": 6,
            "Seven": 7,
            "Eight": 8,
            "Nine": 9,
            "Ten": 10,
            "Jack": 11,
            "Queen": 12,
            "King": 13

        }
        for(let suit of suits)
        {
            for(let card in cardinfo)
            {
                let newCard = new Card(suit, cardinfo[card], card);
                console.log("we just made a card");
                console.log(newCard);
                this.cards.push(newCard);
            }
        }
    }

    shuffle(shuffles=7)
    {
        let s = 0;
        // from the back moving to the front
        while(s <= shuffles)
        {
            for(let i = this.cards.length-1; i > 0; i--)
            {
                // randomly select a card that not been delected yet
                let rdx = Math.floor(Math.random() * 52);
    
                // swap it into our randomly assembled deck part region area thing
                let temp = this.cards[i];
                this.cards[rdx] = this.cards[i];
                this.cards[i] = temp;
            }
            s++;
        }
        // advance the border of the radprot
    }

    deal()
    {
        return this.cards.pop();   //shift()
    }
}


class Player
{
    constructor(name)
    {
        this.name = name;
        this.hand = [];

    }

    takeACard(targetDeck)
    {
        let newCard = targetDeck.deal();
        this.hand.push(newCard);
    }

    discard(idx)
    {
        idx = idx % this.hand.length;
        return this.hand.splice(this.hand[idx]);
    }
}


// let bob = new Card("clubs", 1, "Ace");
// console.log(bob);
// let b = new Deck();
// b.shuffle();
// console.log("*****");
// b.shuffle();
let bob = new Deck();
let rob = new Player("rooob");

rob.takeACard(bob);
rob.discard(10000);
console.log(rob);
console.log(rob);