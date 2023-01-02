'use srtict';
/*
console.log('Hello World!')
let age = 23;
console.log(age);
*/

/*
    Data Types

let javascriptIsFun = true;
console.log(javascriptIsFun);

    typeof ile datamızın tipini öğreniriz.
console.log(typeof javascriptIsFun);
console.log(typeof true);  //boolean
console.log(typeof 23);  // number
console.log(typeof 'Yunus');  //string

javascriptIsFun = "YES!";  // let ile yazılan biri valueyi daha sonra let yazmadan yeni bir value olarak değştirebilirsin.
console.log(javascriptIsFun);

let x;
console.log(typeof x); //undefined type
console.log(typeof null); // object type!!!!--be carefull this one


        //Basic Operators
let now = 2022;
const ageYunus = now - 1992;
const ageKerime= now - 1996;
console.log(ageYunus, ageKerime);
console.log(ageYunus * 2, ageKerime /2, 3 ** 4)
// 3 ** 4 => bu işlem 3 üzeri 4 tür

let firstName = 'Yunus';
let lastName = 'Beyaz';
console.log(firstName + " " + lastName);
        // Assingment Operators
let x = 12 + 7; // x =19
x += 10  // x = x + 10 = 29
x *= 2  // x = x * 2 = 58
x ++ // x = x + 1  = 59
x -- // x = x -1 = 58
console.log(x);

        //Comparison Operators
console.log(ageYunus > ageKerime); //true >, <, =, >=, <=
console.log(ageKerime >= 18); //true
console.log(ageYunus <= 28); //false

// "&& eşittir operatörü. ikisi de aynı ise true sonucu verir
// "|| or operatörü. ikisinden biri ture isi true verir. ikiside false is false verir. ikisi de ture ise true verir.
// "!" ise değilse yanlışsa anlamı taşır !true dersek false cevabını arıyoruzdur.

let goodAtCSS = true;
let goodAtJavascript = false;

let goodAtFindJob = goodAtJavascript && goodAtCSS

console.log(goodAtFindJob)


let refused = !goodAtFindJob;

console.log(refused)

let x,y;  //we created 2 variable in 1 line
x = y = 25 - 10 - 5;
console.log(x,y);

let now = 2022;
const ageYunus = now - 1992;
const ageKerime = now - 1996;
const averageAge = (ageYunus + ageKerime) / 2;
console.log(ageYunus, ageKerime, averageAge);


        //BMİ EXERCİSE

let weightOfMark = 78;
const heightOfMark = 1.69;

let weightOfJohn = 92;
const heightOfJohn= 1.95;

let bmiOfMark = weightOfMark / (heightOfMark ** 2);
let bmiOfJohn = weightOfJohn / (heightOfJohn * heightOfJohn);
const markHigherBMI = bmiOfMark > bmiOfJohn;
console.log(markHigherBMI);

let markHigherBMI = true;
let markLoverBMI = false;
 if (bmiOfMark > bmiOfJohn){
        console.log(markHigherBMI)
 } else {
        console.log(markLoverBMI)
 };


 let firstName = 'Yunus';
 let job = 'Web Developer';
 let birthYear = 1992;
 let year = 2022;

 const yunus = "I'm" + firstName + ', a ' + (year - birthYear) + ' years old' + job;
 console.log(yunus)

 const newYunus = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
 console.log(newYunus);

 console.log('string \n\ new \n\ lines');

 console.log(`string
 new
 lines`);
                //Control Structure -- IF/ELSE statements:
 const age = 2;
 const isOldEnough = age >= 18; // but we dont need this we can use direct age >= 18

 if(age >= 18){
        console.log('Yunus can apply for driver license.')
 } else {
        const yearsLeft = 18 - age;
        console.log(`Yunus has to wait ${yearsLeft} years for apply :()`)
 }

 const birthYearr = 2005;
 let century;
 if(birthYearr <= 2000) {
        century = 20;
 } else {
        century = 21;
 };

 console.log(century);
*/
/*
       //Ternary Operator:
 let age = 18;
 let message;
 age >= 16? (message = 'You can drive'):(message = 'You can not drive.');
 console.log(message); 

 let authenticated = false;
 let nextURL = authenticated? (alert('You will redirect to admin area'), '/admin'):(alert('Access denied'), '/403');
 
 console.log(nextURL);

 let cigarette = 8.40;
 let price;
 cigarette >= 8 ? (price = 'Too Expensive'):(price = 'I can buy it.');
 console.log(price);

 let speed = 70;
let message = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'OK';

*/
/*
let weightOfMark = 78;
const heightOfMark = 1.69;

let weightOfJohn = 92;
const heightOfJohn= 1.95;

let bmiOfMark = weightOfMark / (heightOfMark ** 2);
let bmiOfJohn = weightOfJohn / (heightOfJohn * heightOfJohn);

const markHigherBMI = bmiOfMark > bmiOfJohn;
console.log(markHigherBMI);
 
let markHigherBMI = true;
let markLoverBMI = false;
 if (bmiOfMark > bmiOfJohn){
        console.log(markHigherBMI)
 } else {
        console.log(markLoverBMI)
 };  


 if (bmiOfMark > bmiOfJohn){
       console.log("Mark's BMI is higher then Jhon's");
 } else {
       console.log("Mark's BMI is lower than Jhon's")
 }
 */ 


       //TYPE CONVERTION AND COERTION:

      // bize genelde veriler string olarak gelecektir. bu nedenle hesaplama yapmak istediğimizde hata alırız. burada value değiştirme ve değiştirmeye zorlamayı öğreneceğiz.
/*
const birthYear = '1992';
//typeof birthyear is =String
//if we want to calculate as a number we should use Number(birthYear) function.
console.log(Number(birthYear) + 18); //= 2010
let yunus = 25
console.log(String(yunus));
// We can convert to a number, string or boolean. Only 3 types.

        coertion is very different :
       When we use + like this;
       console.log('I am ' + 30 + ' years old.')  => javascript forces 30 to be a string and we see I am 30 years old.I
       console.log('30' - 5 - 12)  => SHOWS US 13 . javascript forces strings to be Number. but be carefull. If you use + it wont change to number !!!!
       console.log('30' + 5 + '10') => shows us 30510 !!!!!
       + ile numarayı stringe çevirir.
       - ile stringi numaraya çevirir.

       let n = 2 + 3 + 5 + '5'; // shows us 105
       console.log(n);

       Boolean convertion is little different:
       Only 0 = number zero, '' = empty string , undefined, null and NAN is false. all others are true.
       console.log(Boolean(0));  //false
       console.log(Boolean('')); //false
       console.log(Boolean('yunus'));  //true
       console.log(Boolean({}));  //true


      //  PROMPT bu bir form çeşididir sayfanın başında alert gibi ekran gelir ve bilgi girilebilir. console de sonuç gözükür.

const favouriteNumber = prompt("What is your favourite number?");

if(favouriteNumber === 55){
       console.log("That's a GREAT number!")
}

//bu şekilde kullanıcı 55 yazarsa sonuç alamaz çünkü girdiği zaman javacript bunu string olarak algılar. bunu çözmek için prompun başıa number function getirmelisin

const favouriteNumber = Number(prompt("What is your favourite number?"));
if(favouriteNumber === 55){
       console.log("That's a GREAT number!")
} else if (favouriteNumber === 12){
       console.log("12 is a great number too!")
} else if (favouriteNumber === 45){
       console.log("45 is not the coolest number")
} else {
       console.log('You choosed wrong number.')
};

  //     && and , || or , ! not
const yunusIsGoodDeveloper = true;
const yunusHasResistentPermit = false;
console.log(yunusIsGoodDeveloper && yunusHasResistentPermit); //false
console.log(yunusIsGoodDeveloper || yunusHasResistentPermit); //true
console.log(!yunusIsGoodDeveloper); //false

const celebrateNewYear = yunusIsGoodDeveloper && yunusHasResistentPermit;
if (celebrateNewYear){
       console.log("Happy New Year!!!")
} else {
       console.log("Just keep working, you can celebrate in 2024 :(")
};


const dolphins = 96 + 108 + 89;
const koalas = 88 + 91 + 110;
const winnerTeam = dolphins - koalas;

if (winnerTeam > 0){
       console.log("The winner is Dolphins!")
} else if(winnerTeam < 0){
       console.log("The winner is Koalas!")
} else {
       console.log("There is no winner!")
};


const dolphins = (97 + 112 + 1) / 3;
const koalas = (109 + 95 + 1) / 3;
console.log(dolphins, koalas);

if (dolphins > koalas && dolphins >= 100){
       console.log("Dolphins is the winner!");
} else if(koalas > dolphins && koalas >= 100) {
       console.log("Koalas is the winner!");
} else if (dolphins === koalas && dolphins >= 100 && koalas >= 100){
       console.log("There is no winner!");
} else {
       console.log("Both team are LOOSERS!")
}

let myString = 'hello,this,is,a,difficult,to,read,sentence';
myString = myString.split(',').join(' ');
console.log(myString);
*/

              //PREP EXERCISE

"use strict";
/**
 * The `state` property says what the traffic light's state (i.e. colour) is at
 * that moment.

const trafficLight = {
  state: "green",
};

let rotations = 0;
while (rotations < 2) {
  const currentState = trafficLight.state;
  console.log("The traffic light is on", currentState);

  // TODO
  // if the color is green, turn it orange
  // if the color is orange, turn it red
  // if the color is red, add 1 to rotations and turn it green
}
*/
/**
 * The output should be:
The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red
*/

       // The Switch Statement
/*
const day = 'sunday';

switch(day) {
       case 'monday':
              console.log('Just work Javascript');
              break;
       case 'tuesday':
              console.log('Go to the camp for stamp');
              break;
       case 'wednesday':
              break;
       case 'thursday':
              break;
       case 'friday':
              console.log('Go to the cuma');
              break;
       case 'saturday':
       case 'sunday':
              console.log('Keep Working!');
              break;
       default:
              console.log('There is no longer days after');

}

if(day === 'monday'){
       console.log('Just work Javascript');
} else if(day === 'tuesday'){
       console.log('Go to the camp for stamp');

} else if(day === 'wednesday'){

} else if(day === 'thursday'){

} else if(day === 'friday'){
       console.log('Go to the cuma');
} else if(day === 'saturday' || day === 'sunday'){
       console.log('Keep Working!');
} else {
       console.log('There is no longer days after');
}
*/
/*
const myAge = 30;
//myAge >= 18 ? console.log('I am allowed to drive car.') : console.log('I am not allowed to drive car.');
const canDrive = myAge >= 18 ? 'Allowed' : 'Not Allowed';
console.log(`Can I drive car? : ${myAge >= 18 ? 'Allowed' : 'Not Allowed'}`);



// eğer fatura 50 ile 300 arasında ise %15 tip farklı değer ise %20 tip alacağınızı hesaplayın

const earnedTip = 40;
const expectedTip = earnedTip >= 50 && earnedTip <= 300 ? earnedTip * 0.15 : earnedTip * 0.2;
console.log(`The bill was ${earnedTip}, the expected tip is ${expectedTip}, and expected total value is ${earnedTip + expectedTip}`);
*/
/*
function myname(){
       console.log('My name is Yunus Emre BEYAZ');
}

myname();
myname();
myname();
*/
/*
function juiceProcess(apples, oranges){
       const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
       return juice;
}

const appleJuice = ` You can make tasty apple ${juiceProcess(4, 1)}.`;
console.log(appleJuice);
const orangeAppleJuice = `If you want to make tasty orange juice, you can use ${juiceProcess(2,5)}`;
console.log(orangeAppleJuice);
*/
/*
function ageCalculate(birthYear){
       
       //const age = 2022 - birthYear; ==> bunu kısaltabiliriz.
       //return age;
      
      return 2022 - birthYear;
}

const yunusAge = `Yunus is ${ageCalculate(1992)} years old and Kerime is ${ageCalculate(1996)} years old.`;
console.log(yunusAge);

const seymaAge = birthYear => 2022 - birthYear;
const seyma = seymaAge(1996);
console.log(seyma);

function yearsForRetirement(birthYear, firstName){
       const ageCurrent = 2022 - birthYear;
       const retirement = 65 - ageCurrent;
       return `${firstName} needs to work ${retirement} years for retiring.`
}
console.log(yearsForRetirement(1992, 'Yunus'));

              //  ARRAYS
const friends = ['Kerime', 'Seyma', 'Yasin', 'Fatih', 'Mirza']; // bu normal kullanımıdır. bunu yapmaslıyız.
//console.log(friends);

const cars = new Array('Tesla', 'BMW', 'AUDI'); // bu da farklı yapılışı ancak bunu tavsiye etmiyorlar.
//console.log(cars);
console.log(friends.length); // Array de kaç element olduğunu gösterir => 5
console.log(friends[friends.length - 1]); // Shows us the last element in Array.

friends[0] = 'Emin';  // we can change elements in array even if it's a const !!!
console.log(friends);

//friends =  ['ali', 'veli']; // But we can't change all array with new value.
//we can change values 1 by 1

const firstName = 'Yunus';
const yunus = [firstName, 'BEYAZ', 2022 - 1992, 'Web Developer', friends];
console.log(yunus);

const calcAge = function(birthYear1){
       return 2022 - birthYear1;
}
const years = [1992, 1996, 1964, 2000, 2020];

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


const friends = ['Kerime', 'Seyma', 'Yasin',]; // bu normal kullanımıdır. bunu yapmaslıyız.
friends.push('Ali'); // this is using for add new element to end of the array.

friends.unshift('Myself'); // this is using for add new element to the beggining of array
friends.pop(); //this is using to remove the last element.
friends.shift(); // this is using to remove the first element.
console.log(friends); 
console.log(friends.indexOf('Yasin')); // for finding the element's position.
console.log(friends.indexOf('Kamuran')); // if you use an not existing element, console will shows us -1 .
console.log(friends.includes('Yasin')); // if you want to check if an element is in your array or not? "includes" gives you an true/false boolean for that.
console.log(friends.includes('Mahmut'));

if (friends.includes('Seymas')){
       console.log("She is not your friend. She is your sister!");
} else if(friends.includes('Kerimes')){
       console.log("She is not your friend she is your wife!");
} else {
       console.log("You have realy good friends.")
}


//const bill = 40;
//const tip= bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//console.log(`The bill was ${bill}, the expected tip is ${tip}, and expected total value is ${bill + tip}`);
       // calculate tip exercise
const calcTip = function calcTip(bill){
       return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
       
}

const bill = [125, 555, 44];
const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
console.log(bill, tip);

const total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]];
console.log(total);

              // OBJECTS


const yunus = {
       firstName: 'Yunus',
       lastName: 'Beyaz',
       age: 2022 - 1992,
       job: 'Web Developer',
       friends: ['Ali', 'Ahmet', 'Ayse']
};

//console.log(yunus);
console.log(yunus.age);
console.log(yunus['age']);

// We can add new values inside of object:

yunus.location = 'Netherlands';
yunus['email'] = 'yebeyaz@gmail.com';

const keyName = 'Name';
console.log(yunus['first' + keyName]);

const whatYouWant = prompt('What do you want to learn about Yunus? Write below one of them: firstName, lastName, age, job, friends');
console.log(yunus[whatYouWant]);

console.log(yunus);


const jonas = {
       friends: ['Ali', 'Veli', 'Yunus'],
       

}

console.log(jonas.friends[0]);


const yunus = {
       firstName: 'Yunus',
       lastName: 'Beyaz',
       birthYear: 1992,
       job: 'Web Developer',
       friends: ['Ali', 'Ahmet', 'Ayse'],
       hasDriverLicense: true,

       calcAge: function(birthYear){
              return 2022 - birthYear;
       }
     
    calcAge: function(){
              return 2022 - this.birthYear;
       }
       
       calcAge: function () {
              this.age = 2022 - this.birthYear;
              return this.age;
       },

       getSummary: function () {
              return `${this.firstName} is a ${this.calcAge()} years old ${yunus.job} and he ${this.hasDriverLicense ? "has" : "hasn't"} driver license.`
       }



};

//console.log(yunus.calcAge());
//console.log(yunus.calcAge(1992));
console.log(yunus.getSummary());
/
              // LOOPS
const months = [
       'Ocak',
       'Şubat',
       'mart',
       'nisan',
       'mayıs',
       'haziran',
       'temmuz',
       'ağustos',
       'eylül',
       'ekim',
       'kasım',
       'aralık',
];
       // while loop
let i = 0;
let uzun = months.length;

while (i < uzun){
       console.log('Güzel Günler')
       i++;
}

              //for loop
for (let days = 1; days <= 7; days++){
       console.log(`What a beautiful ${days}.`);
}



const yunusArray = [
       'Yunus',
       'Beyaz',
       2022 - 1992,
       'Web Developer',
       ['Ali', 'Veli', 'Mehmet'],
       true
];

const types = [];

for (let i = 0; i< yunusArray.length ; i++){
       if (yunusArray[i] === 'Web Developer') break;
       
       console.log(yunusArray[i]);
}

/*
let years = [1990, 1992, 1996, 2000];
let ages = [];

for(let i = 0; i < years.length; i++){
       ages.push(2022 - years[i]);
}
console.log(ages);


let spor = [ '15xMekik', '15xŞınav', '10xÇök-Kalk'];

for (let set = 1; set < 4; set++){

       console.log(`Spor set: ${set}`);

       
       for (let i = 0 ; i <= spor.length - 1; i++) {
              console.log(spor[i]);
       }
}


let randomNumber = Math.trunc(Math.random() * 6) + 1;
//console.log(randomNumber);

while (randomNumber !== 6){
       console.log(`Our lucky number is not ${randomNumber}`);
       randomNumber = Math.trunc(Math.random() * 6) + 1;
       
}
       console.log(`Lucky Number is ${randomNumber}`);


let i = 6;

do {
       console.log(`While Loop ${i}`);
       i++;
} while (i < 5)

       // for of loop:
const months = [
       'Ocak',
       'Şubat',
       'mart',
       'nisan',
       'mayıs',
       'haziran',
       'temmuz',
       'ağustos',
       'eylül',
       'ekim',
       'kasım',
       'aralık',
];

for (const month of months){
       console.log(month);
}


const calcTip = function (bill){
       return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
       
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++){
       const tip = calcTip(bills[i]);
       tips.push(tip);
       totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr){
       let sum = 0;
       for(let i = 0; i < arr.length; i++){
              sum += arr[i];
       }
       return sum / arr.length;
}

console.log(calcAverage(totals));

let sum = 0;
tips.forEach(i => {
       sum += i;
});
console.log(sum / tips.length);


let myString = 'hello,this,is,a,difficult,to,read,sentence';

myString = myString.split(',').join(' ');
console.log(myString);

for (let i = 0; i <= 20; i++){
       if (i % 2 == 0){
              console.log(`the ${i} is even.`);
       } else {
              console.log(`the ${i} is odd.`);
       }

};

              // FOR İN LOOP:

const yunus = {
       firstName: 'Yunus',
       lastName: 'Beyaz',
       age: 2022 - 1992,
       job: 'Web Developer',
       friends: ['Ali', 'Ahmet', 'Ayse']
};

for (let key in yunus){
       console.log(key, yunus[key]);
}

for (let indexOfBooks in listOfBooks){
       const myBooks = listOfBooks[indexOfBooks];

       if(myBooks.alreadyRead){
              console.log(`${myBooks.title} by ${myBooks.author} is already read`);
       } else {
              console.log(`${myBooks.title} by ${myBooks.author} is need to read.`)
       }
}



const listOfBooks = {
first: {
       title: 'suç ve ceza',
       author: 'dostoyevski',
       alreadyRead: true
},
second: {
       title: 'cin ali',
       author: 'ali baba',
       alreadyRead: true
},
third: {
       title: 'ezel',
       author: 'tuncel kurtiz',
       alreadyRead: false
}
};

//for(let key  in listOfBooks.first){
for(let key  in listOfBooks){     
       const myBooks = listOfBooks[key];
       console.log(key);
     
       if(myBooks.alreadyRead){
              console.log(`${myBooks .title} is already read.`);
       } else {
              console.log(`${myBooks .title} is needs to read.`);
       }
     
     
}


let kerime = "i love you.";
kerime = kerime.toUpperCase();
console.log(kerime);


       // sayıları küçükten büyüğe dizme
var sayilar = [13, 34, 22, 150, 130];
 
console.log(sayilar.sort(function(a, b){return a - b}));

var arabalar = ["Toyota","Volvo","BMW","Hyundai","Audi"];
 
console.log(arabalar.sort().reverse());



let firstLetter = function(){
       return "Hello World!";
}

console.log(firstLetter());


let firstMessage = 'Hello,my,name,is,yunus.';
firstMessage = firstMessage.replace(/,/ig, " ");
console.log(firstMessage);


let fruitsStr = "Apple, Banana, Mango, Orange, Papaya";
let fruitsArr = fruitsStr.split(", ");
//console.log(fruitsArr[0]);
for (let key in fruitsArr){
       console.log(fruitsArr[key]);
}

let x = "3.86 half pass";
console.log(parseInt(x));
*/

/**
 * You're at a party and you feel thirsty! However, you've got 5 friends who are also in need of a drink. Let's go get them a drink.
 *
 * Declare a variable that holds an empty array, called drinkTray.
 * Create a loop that runs 5 times. On each iteration, push a drink into the drinkTray variable. The drinkTray can only hold at most two instances of the same drink type, for example it can only hold 2 colas, 2 lemonades, 2 waters.
 * 
 * Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" (For example: "Hey guys, I brought a cola, cola, lemonade, lemonade, water!")
 */

// There are 3 different types of drinks:
/*
let drinkTypes =['cola', 'lemonade', 'water'];
let drinkTray = [];

for (let i = 0; i < drinkTypes.length; i++) {
       for (let j = 0; j < 2; j++){
              if (drinkTray.length < 5) {
              drinkTray.push(drinkTypes[i]);  
       }
}
}
console.log(`Hey guys, I brought a ${drinkTray.join(', ')}!`);


//customer wants to calculate amplitude of the temperatures.

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];


const tempAmplitude = function(temps){
       let max = temps[0];
       let min = temps[0];
       
       for(let i = 0; i < temps.length; i++){

              if(typeof temps[i] !== 'number') continue;

              if (temps[i] > max) max = temps[i];
              if (temps[i] < min) min = temps[i];
       }    
       console.log(min, max);
       return max - min;
/*
       let min = temps[0];
       for(let m = 0; m < temps.length; m++){
              if(temps[m] < min ) min = temps[m];
       }
       console.log(min);
      
}

const amplitude = tempAmplitude(temperatures);
console.log(amplitude);
 */

/*
let now = new Date();
console.log(now);
let dayOfWeek = now.getDay();

for(let i = 0; i <7; i++){
switch(i){
       case 0:
       console.log('Today is Sunday. You must study Web Development!');
       

       case 1:
              console.log('Today is Monday. You must study Web Development!');
       

       case 2:
              console.log('Today is Tuesday. You must go to camp for stamp!');
       

       case 3:
              console.log('Today is Wednesday. You must study Web Development!');
       

       case 4:
              console.log('Today is Thursday. You must study Web Development!');
       

       case 5:
              console.log('Today is Friday. You must go to CUMA!');
       

       case 6:
              console.log('Today is Saturday. You must study Web Development!');
       

       };
       return i;
}


var counts = ["one", "two", "three", "four", "five"];
var reversed = counts.reverse(); 

console.log('counts', counts); // Outputs: five,four,three,two,one
//console.log(reversed); // Output: five,four,three,two,one


let numbers = [ -8, 15, 88, -150, 150, 888];

console.log(Math.max(...numbers));

function findMin(array){
       return Math.min.apply(null,array);
};

console.log(findMin(numbers), findMax(numbers));

let ankara = "hello world";
function disemvowel(str) {
       return str.replace(/[aeiou]/ig, "");
     
   }


console.log(disemvowel(ankara));


let numbers = [ -8, 15, 88, -150, 150, 888];

function findMax(array){
       return Math.max(...array);
}

function findMin(array){
       return Math.min.apply(null,array);
};
*/

const persons = [
       {name: "Yunus", age: 30},
       {name: 'Kerime', age:26},
       {name: 'Mirza', age:25}
]
/*
persons.sort(function(a,b){return a.age - b.age});
console.log(persons);

persons.push({name: 'Fatih', age: 31});
console.log(persons);
*/

persons.sort(function(a,b){
       let x = a.name.toLocaleLowerCase();
       let y = b.name.toLocaleLowerCase();
       if(x < y){
              return -1;
       }
       if(x > y){
              return 1;
       }

       return 0;
})

console.log(persons);

