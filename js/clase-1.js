let userName = prompt('Hello!, please enter a username');
let birthdayYear = prompt('Enter your birthday year to verify your age');

let age = 2024 - birthdayYear;


if (age >= 18) {
    alert('Welcome ' + userName + ' your age is ' + age + ', you have the age to enter the JavaScript Club.');
}
else {
    alert('We are sorry ' + userName + ' your age is ' + age + ', you do not have the age to enter the JavaScript Club.');
};

console.log('Development branch created');