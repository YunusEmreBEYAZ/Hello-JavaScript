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
*/

        //BMİ EXERCİSE

let weightOfMark = 78;
const heightOfMark = 1.69;

let weightOfJohn = 92;
const heightOfJohn= 1.95;

let bmiOfMark = weightOfMark / (heightOfMark ** 2);
let bmiOfJohn = weightOfJohn / (heightOfJohn * heightOfJohn);
const markHigherBMI = bmiOfMark > bmiOfJohn;
console.log(markHigherBMI);
/*
let markHigherBMI = true;
let markLoverBMI = false;
 if (bmiOfMark > bmiOfJohn){
        console.log(markHigherBMI)
 } else {
        console.log(markLoverBMI)
 };
 */
