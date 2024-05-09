/* let numA = 4;
let numB = 6;

let resultado = (numA + numB);

console.log(resultado + 10);

class Song {
    constructor(artist, name) {
        this.artist = artist;
        this.name = name;
    };
    getSongData() {
        console.log('Artist: ' + this.artist + ' Song: ' + this.name);
    };
};

let song1 = new Song('Deftones', 'Be Quiet And Drive');
let song2 = new Song('Iglooghost', 'Coral Mimic');

song1.getSongData();
song2.getSongData(); */



/* let user = 'The Rain Maker';

console.log('Pieces of the week by ' + user);

class Piece {
    constructor(category, brand) {
        this.category = category;
        this.brand = brand;
    };
    getPieceData() {
        console.log('This is a ' + this.category + ' from the brand ' + this.brand);
    };
};

let piece1 = new Piece('Shell Waterproof Jacket', 'Acronym');
let piece2 = new Piece('APG Technical Short', 'Roa Hiking');

piece1.getPieceData();
piece2.getPieceData(); */

/* let userName = prompt('Enter your name please');
let birthdayYear = prompt('Enter your birthday year to calculate your age');

let age = 2024 - birthdayYear;

alert('Hello ' + userName + ' your age is ' + age); */


let userName = prompt('Hello!, please enter a username');
let birthdayYear = prompt('Enter your birthday year to verify your age');

let age = 2024 - birthdayYear;


if (age >= 18) {
    alert('Welcome ' + userName + ' your age is ' + age + ', you have the age to enter the JavaScript Club.');
}
else {
    alert('We are sorry ' + userName + ' your age is ' + age + ', you do not have the age to enter the JavaScript Club.');
};