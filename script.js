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

let weightOfMark = 78;
const heightOfMark = 1.69;

let weightOfJohn = 92;
const heightOfJohn= 1.95;

let bmiOfMark = weightOfMark / (heightOfMark ** 2);
let bmiOfJohn = weightOfJohn / (heightOfJohn * heightOfJohn);
/*
const markHigherBMI = bmiOfMark > bmiOfJohn;
console.log(markHigherBMI);
 
let markHigherBMI = true;
let markLoverBMI = false;
 if (bmiOfMark > bmiOfJohn){
        console.log(markHigherBMI)
 } else {
        console.log(markLoverBMI)
 };  */ 


 if (bmiOfMark > bmiOfJohn){
       console.log("Mark's BMI is higher then Jhon's");
 } else {
       console.log("Mark's BMI is lower than Jhon's")
 }