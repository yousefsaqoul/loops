console.log('%c_____________lev 1_1 for loop________________', 'color:darkred')
let text = "";
for (i = 1; i < 11; i++) {
    text += ` Hello World ` + i + ` 
    ` ;

}
console.log(text)

//================================================================================//

console.log('%c_____________lev 1_2 loop Array________________', 'color:darkred')
let Nummber = [];
Nummber.push(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(Nummber)

//================================================================================//

console.log('%c_____________lev 1_4 loop Namen ________________', 'color:darkred')
let Names = ["Georg", "Anass", "Elaine", "Hakan", "Sam", "Kim", "Sergio"];
for (let i = 0; i < Names.length; i++) {
    console.log(Names[i]) //frage uber i was bedeutet genau hier
}


//================================================================================//

console.log('%c_____________lev 1_6 loop Array ________________', 'color:darkred')
let retArray = [];

for (let i = 0; i <= 100; i++) {
    retArray.push('image_' + i + ".jpg");

}
console.log(retArray)


//================================================================================//

console.log('%c_____________lev 1_7 loop do while ________________', 'color:darkred')
let number2 = " ";
let k = 0;
do {
    number2 += " the Number is" + k;
    k++;
} while (k < 5)
console.log(number2,)
document.write(number2)

//================================================================================//

console.log('%c_____________lev 1_8 loop do while ________________', 'color:darkred')
let x = 0;
while (x < 20) {
    console.log(x)
    x += 2;
}

//================================================================================//

console.log('%c_____________lev 1_9 loop input word ________________', 'color:darkred')
let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']
let userInput = document.getElementById('userInput')
let result = document.getElementById('result')


function wordPrint() {

    myresult = words.filter(word => word.length == Number(userInput.value))
    result.innerHTML = myresult
}
//================================================================================//

console.log('%c_____________lev 2_1 loop for loop Array ________________', 'color:darkred')