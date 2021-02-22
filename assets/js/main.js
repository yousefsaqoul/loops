
for (var i = 0; i < 5; i++) {
    let display = ''
    for (let j = 0; j < 10; j++)
        display += '+++'
    console.log(display)
}

let sum2 = '';
for (var j = 0; j < 6; j++) {
    sum2 = ('*')
    console.log(sum2)
}
let sum1 = 0;

for (var i = 0; i <= 8; i++) {
    sum1 += i
    console.log(sum1)
}


for (i = 50; i >= 45; i--) {

    console.log(i)
}

console.log('%cBreak______________BREAK', 'color:tomato')
let country = ['frances', 'german', 'spain']
for (i = 0; i < country.length; i++) {
    console.log(i)
    console.log(country[i].toUpperCase())
}
console.log('%cBreak______________BREAK', 'color:tomato')
let country1 = ['francess', 'germann', 'spainn']
for (i = 0; i < country1.length; i++) {
    console.log(i)
    console.log(country1[i].charAt(0).toUpperCase() + country1[i].slice(i))
}
console.log('%cBreak______________BREAK', 'color:red')

let text = 'text'
for (let i of text) {
    console.log(i)
}
console.log('%cBreak______________BREAK', 'color:tomato')

let numbers = [0, 2, 4, 8, 6]
for (let i of numbers) {
    console.log(i)
}
console.log('%cBreak______________BREAK', 'color:tomato')

let numbers2 = [10, 30, 20]
for (let i = 0; i < numbers2.length; i++) {
    console.log(numbers2[i] * 2)
}
console.log('%cBreak______________BREAK', 'color:tomato')
for (let i of numbers2) {
    console.log(i * 2)
}
console.log('%cBreak______________BREAK', 'color:tomato')
numbers2.forEach(x => console.log(x * 2))
console.log('%cBreak______________BREAK', 'color:tomato')




console.log('%cBreak______________BREAK', 'color:tomato')
let index = 0
while (index < 5) {
    console.log(index)
    index++
}
console.log('%cBreak______________BREAK', 'color:tomato')



let country2 = ['germany', 'france', 'spain']

let indexCountry = 0

while (indexCountry < country2.length) {
    console.log(country2[indexCountry].toUpperCase())
    indexCountry++;

}
console.log('%cBreak______________BREAK', 'color:tomato')
let index3 = 0
do {
    console.log(index3)
    index3++;


} while (index3 <= 1)
console.log('%cBreak______________BREAK', 'color:tomato')
// let numbers5
// do {
//     numbers5 = prompt('giv a number grosse als 100')

// } while (Number(numbers5) <= 100)
// console.log(Number(numbers5))

