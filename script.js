// 1.⁠ ⁠მარტივი გამრავლება
// ფუნქცია უნდა მიიღოს ორი რიცხვი და დააბრუნოს მათი ნამრავლი. მაგალითად, თუ არგუმენტები არიან 3 და 4, ფუნქციამ უნდა დააბრუნოს 12.

// function multiply(a, b) {
//     console.log(a * b);
// }
// multiply(3, 4)

//  
// 2.⁠ ⁠ასაკის შემოწმება
// ფუნქციამ უნდა მიიღოს ასაკი და დააბრუნოს "შენ ხარ სრულწლოვანი", თუ ასაკი 18-ზე მეტია ან ტოლია, წინააღმდეგ შემთხვევაში უნდა დააბრუნოს "შენ ხარ არასრულწლოვანი".

function checkAge(age) {
    // if(age < 18){
    //     console.log("შენ ხარ არასრულწლოვანი")
    // }else if(age >= 18){
    //     console.log("შენ ხარ სრულწლოვანი")
    // }
}
// checkAge(19)


//  3.⁠ ⁠რიცხვი ლუწია თუ კენტი
// ფუნქციამ უნდა მიიღოს რიცხვი და გამოითვალოს, თუ ის ლუწია ან კენტი და დააბრუნოს შესაბამისი ტექსტი.


// function isEvenOrOdd(num) {
//     if(num % 2 === 0){
//         console.log("ლუწი")
//     }else{
//         console.log("კენტი")
//     }
// }

// isEvenOrOdd(3)



//  4.⁠ ⁠switch case – დღეების დასახელება
// ფუნქციამ უნდა მიიღოს 1-დან 7-მდე რიცხვი და switch case-ების გამოყენებით დააბრუნოს შესაბამისი დღის სახელი (მაგ. 1 - ორშაბათი, 2 - სამშაბათი და ა.შ.).

// function getDayName(dayNumber) {
//     switch (dayNumber) {
//         case 1: 
//         console.log("ორშაბათი");
//         break;

//         case 2: 
//         console.log("სამშაბათი");
//         break;

//         case 3: 
//         console.log ("ოთხშაბათი");
//         break;

//         case 4: 
//         console.log("ხუთშაბათი");
//         break;

//         case 5: 
//         console.log("პარასკევი");
//         break;

//         case 6: 
//         console.log("შაბათი");
//         break;

//         case 7: 
//         console.log("კვირა");
//         break;

//         default: console.log("არასწორი ნომერი");
//         break;
//     }
// }

// getDayName(4)


//  5.⁠ ⁠ორი რიცხვის შედარება
// ფუნქციამ უნდა მიიღოს ორი რიცხვი და დააბრუნოს "პირველი რიცხვი უფრო დიდია", "მეორე რიცხვი უფრო დიდია" ან "ორივე რიცხვი ტოლია".

// function compareNumbers(a, b) {
//     if (a > b){
//         console.log("პირველი რიცხვი უფრო დიდია")
//     } else if(a < b){
//         console.log("მეორე რიცხვი უფრო დიდია")
//     }else{
//         console.log("ტოლია")
//     }
// }

// compareNumbers( 4 , 7)


//  6.⁠ ⁠ოთხი მოქმედების კალკულატორი
// ფუნქცია უნდა მიიღოს ორი რიცხვი და ოპერატორი (+, -, *, /) და შესაბამისი ოპერატორის მიხედვით გამოითვალოს შედეგი.

// function calculator(a, b, operator) {
//     switch (operator) {
//         case '+': 
//         console.log(a + b); 
//         break;
//         case '-': 
//         console.log(a - b); 
//         break;
//         case '*': 
//         console.log(a * b); 
//         break;
//         case '/': 
//         console.log(a / b); 
//             break;
//         default: console.log("არასწორი ოპერატორი");
//     }
// }

// calculator( 5 , 7 , "+")


//  7.⁠ ⁠ტემპერატურის კონვერტორი
// ფუნქცია უნდა მიიღოს ტემპერატურა ცელსიუსში და დააბრუნოს ფარენჰეიტში კონვერტირებული მნიშვნელობა. ფორმულა: 
// F=C×9/5+32.

// function celsiusToFahrenheit(celsius) {
//     console.log(celsius * 9 / 5 + 32);
// }

// celsiusToFahrenheit(12)

//  8.⁠ ⁠მაქსიმალური რიცხვის პოვნა
// ფუნქცია უნდა მიიღოს სამი რიცხვი და დააბრუნოს მათ შორის მაქსიმალური მნიშვნელობა.

// function findMax(a, b, c) {
//     if(a > b && a > c){
//         console.log(`ყველაზე მაღალი რიცხვია ${a}`)
//     }else if(b > a && b > c){
//         console.log(`ყველაზე მაღალი რიცხვია ${b}`)
//     }else if(c > a && c > b){
//         console.log(`ყველაზე მაღალი რიცხვია ${c}`)
//     }else{
//         console.log("გაურკვეველი")
//     }
// }

// findMax( 3 , 4 , 5)


//  9.⁠ ⁠რიცხვის დადებითი თუ უარყოფითი
// ფუნქციამ უნდა მიიღოს რიცხვი და შეამოწმოს, დადებითია თუ უარყოფითი. დააბრუნოს შესაბამისი ტექსტი.

// function checkSign(num) {
//     if( num > 0){
//         console.log("დადებითი")
//     }else if(num < 0){
//         console.log("უარყოფითი")
//     }else{
//         console.log("ტოლია")
//     }
// }

// checkSign( -10)

// 10.⁠ ⁠switch case – თვეების დასახელება
// ფუნქციამ უნდა მიიღოს 1-დან 12-მდე რიცხვი და switch case-ების გამოყენებით დააბრუნოს შესაბამისი თვის სახელი (მაგ. 1 - იანვარი, 2 - თებერვალი და ა.შ.).

// function getMonthName(monthNumber) {
//     switch (monthNumber) {
//         case 1: console.log("იანვარი"); break;
//         case 2: console.log("თებერვალი"); break;
//         case 3: console.log("მარტი"); break;
//         case 4: console.log("აპრილი"); break;
//         case 5: console.log("მაისი"); break;
//         case 6: console.log("ივნისი"); break;
//         case 7: console.log("ივლისი"); break;
//         case 8: console.log("აგვისტო"); break;
//         case 9: console.log("სექტემბერი"); break;
//         case 10: console.log("ოქტომბერი"); break;
//         case 11: console.log("ნოემბერი"); break;
//         case 12: console.log("დეკემბერი"); break;
//         default: console.log("არასწორი ნომერი");
//     }
// }



// 11.⁠ ⁠გამრავლების მნიშვნელობა
// ფუნქცია უნდა მიიღოს ერთი რიცხვი და თუ რიცხვი 5-ის ტოლია ან მეტი, დააბრუნოს მისი ნამრავლი 10-ზე. წინააღმდეგ შემთხვევაში დააბრუნოს "რიცხვი მცირეა".

// function multiplyIfGreaterThanFive(num) {
//     if (num >= 5) console.log(num * 10);
//     else console.log("რიცხვი მცირეა");
// }



// 12.⁠ ⁠switch case – სეზონის შემოწმება
// ფუნქციამ უნდა მიიღოს 1-დან 4-მდე რიცხვი და switch case-ებით დააბრუნოს შესაბამისი სეზონი (1 - გაზაფხული, 2 - ზაფხული, 3 - შემოდგომა, 4 - ზამთარი).

// function getSeason(seasonNumber) {
//     switch (seasonNumber) {
//         case 1: console.log("გაზაფხული"); break;
//         case 2: console.log("ზაფხული"); break;
//         case 3: console.log("შემოდგომა"); break;
//         case 4: console.log("ზამთარი"); break;
//         default: console.log("არასწორი ნომერი");
//     }
// }


// 13.⁠ ⁠მარტივი აღრიცხვის ფუნქცია
// ფუნქციამ უნდა მიიღოს ფასის მნიშვნელობა და შეამოწმოს, არის თუ არა იგი 100-ზე მეტი. თუ კი, დააბრუნოს "ფასი მაღალია", წინააღმდეგ შემთხვევაში დააბრუნოს "ფასი ნორმალურია".

// function checkPrice(price) {
//     console.log(price > 100 ? "ფასი მაღალია" : "ფასი ნორმალურია");
// }


// 14.⁠ ⁠switch case – მათემატიკური ოპერატორების შემოწმება
// ფუნქცია უნდა მიიღოს ორი რიცხვი და ოპერატორი (+, -, *, /) და switch case-ების გამოყენებით დააბრუნოს შესაბამისი მოქმედების შედეგი.

// function switchCalculator(a, b, operator) {
//     switch (operator) {
//         case '+': console.log(a + b); break;
//         case '-': console.log(a - b); break;
//         case '*': console.log(a * b); break;
//         case '/': 
//             if (b !== 0) console.log(a / b);
//             else console.log("ვერ ხდება გაყოფა ნულით");
//             break;
//         default: console.log("არასწორი ოპერატორი");
//     }
// }


// 15.⁠ ⁠რიცხვების დადებითი ჯამი
// ფუნქციამ უნდა მიიღოს ორი რიცხვი და თუ ორივე დადებითია, დააბრუნოს მათი ჯამი. წინააღმდეგ შემთხვევაში დააბრუნოს "მინიმუმ ერთი რიცხვი უარყოფითია".

// function positiveSum(a, b) {
//     if (a > 0 && b > 0) {
//         console.log(a + b);
//     } else {
//         console.log("მინიმუმ ერთი რიცხვი უარყოფითია");
//     }
// }
