// var payer = ['emmao', 'amaro', 'amos', 'alexo'];
// var pay = payer[(Math.random() * payer.length) | 0];

// alert(pay);

// Section1

// Question1

var arr = [[1, 2, 3], [4, 5, 6], 7, 8, 9, [[10, 11, 12, [13, 4, 112]], 136, 14]];

var arr10 = arr[5][0][0];
var arr8 = arr[3];
var arr13 = arr[5][0][3][0];
var arr136 = arr[5][1];
var arr4 = arr[1][0];

var que1 = arr10 + ", " + arr8 + ", " + arr13 + ", " + arr136 + ", and " + arr4 + ".";

alert(que1);

// Question2

var sent = ["javascript", "web", "Capacity bay"];

var java = sent[0];
var web = sent[1];
var cap = sent[2];

var que2 = "I am a " + web + " developer at " + cap + " and I love " + java;

alert(que2);

// Queston3

var que3 = {

    name: 'generalization',
    fourth: ['t'],
};

alert(que3['fourth']);

// Question4

var fruits = new Array();

fruits.push("orange", "apple", "guava", "lemon");

fruits.unshift("pea", "banana")

alert(fruits);

var fruitsB = new Array();

fruitsB.push("orange", "apple", "guava", "lemon");

fruitsB

fruitsB.push("Avocado", "mango")

alert(fruitsB);

// Section2

var i = [];

function add(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            alert("FizzBuzz");
        }
        else if (i % 3 === 0) {
            alert("Fizz");
        }
        else if (i % 5 === 0) {
            alert("Buzz");
        }
        else {
            alert(i);
        }
    }
}

add(20);