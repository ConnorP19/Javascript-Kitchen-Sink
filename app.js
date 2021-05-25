//Question 4
let myName = 'Connor';
console.log(myName);
//Question 5

const states = 50;
console.log(states);
//Question 6

let sum = 5 + 4;
console.log(sum);
//Question 10

let favVeggies = ['Carrots', 'Peppers', 'Lettuce', 'Potatoes'];

//Question 10.5
for (let i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i]);
};

//Question 11
let pet = {
    name: 'Charlotte',
    breed: 'Domestic Shorthair',
}
console.log(pet);

//Question 12
let friends = [
    {
        name: 'John Doe',
        age: 42
    },
    {
        name: 'Jane Doe',
        age: 40
    },
    {
        name: 'Sam Doe',
        age: 16
    },
    {
        name: 'William Doe',
        age: 18
    },
    {
        name: 'Jessica Doe',
        age: 22
    },
];

//Question 13
for (let i = 0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age);
};

//Question 8
function sayHello() {
    alert("Hello World!");
}


//Question 9
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
};

//question 9 cont.
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

//Question 14
function getLength(string) {
    return string.length;
}

let Length = getLength('Hello World!');

//Question 15
if (length % 2 === 0) {
    console.log('The World is nice and even!')
}
    else {
    console.log('The world is an odd place!')
}






