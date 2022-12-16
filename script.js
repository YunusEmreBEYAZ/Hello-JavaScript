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
       console.log('I am ' + 30 + ' years old.')  => javascript forces 23 to be a string and we see I am 30 years old.I
       console.log('30' - 5 - 12)  => SHOWS US 13 . javascript forces strings to be Number. but be carefull. If you use + it wont change to number !!!!
       console.log('30' + 5 + '10') => shows us 30510 !!!!!
       + ile numarayı stringe çevirir.
       - ile stringi numaraya çevirir.

       let n = 2 + 3 + 5 + '5'; // shows us 105
       console.log(n);

       Boolean convertion is little different:
       Only 0 = number zero, '' = empty string , undefined, null and NAN şs false. all others are true.
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
*/

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

