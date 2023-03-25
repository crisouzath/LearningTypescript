//Exercício 1 - atribuindo tipo as variaveis

let firstName:string;
let lastName:string;
let fullName:string;
let age:number;
let ukCitizen:boolean;

firstName = 'Rebecca';
lastName = 'Smith';
age = 42;
ukCitizen = false;
fullName = firstName + " " + lastName;

if (ukCitizen) {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
} else {
    console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
}

let x:number;
let y:number;
let a:number;

x = 5;
y = 7;
a = x + y;

console.log(a);

//Exercício 3 - usando o tipo enum

enum season{
  Fall,
  Winter,
  Spring,
  Summer
}

function whichMonths(season:season) {
    let monthsInSeason: string;
    switch (season) {
        case season.Fall:
            monthsInSeason = "September to November";
            break;
        case season.Winter:
            monthsInSeason = "December to February";
            break;
        case season:
            monthsInSeason = "March to May";
            break;
      case season.Summer:
            monthsInSeason = "June to August";
    }
    return monthsInSeason;
}

console.log(whichMonths("Fall"));

//exercicio 4 - usando array

let randomNumbers:number[]=[];
let nextNumber:number;
for (let i = 0; i < 10; i++) {
    nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    randomNumbers.push(nextNumber);
}

console.log(randomNumbers
