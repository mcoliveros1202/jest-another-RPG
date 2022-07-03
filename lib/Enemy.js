const Potion = require('../lib/Potion');
const Character = require('./Character');

class Enemy extends Character{
    constructor(name, weapon) {
        super(name);
        
        this.weapon = weapon;
        this.potion = new Potion();
    }


    // enemy description
    getDescription() {
        return `A ${this.name} hold a ${this.weapon} has appeared!`;
    };
}
module.exports = Enemy;
