/*
Дан массив [1, 2, 3, 4, 5] с помощью метода reduce сделать объект в котором ключ будет равен элементу массива, а значение (элемент * 100)
input: [1, 2, 3, 4, 5]
output: {1: 100, 2: 200, 3: 300 ...}
*/

// const arr = [1, 2, 3, 4, 5];
// const obj = arr.reduce((acc, current) => {
//     acc[current] = current * 100;
//     return acc;
// }, {});
// console.log(obj)


/*
Дан массив ['skill1', 'skill2', ... 'skilln'] скиллы произвольные самим придумать. 
Написать функцию которая создает из массива skills объект с рандомными значениями от 1 до 100, использовать reduce и Math.random()
input: ['hook', 'blackhole']
output: {'hook': 20, 'blackhole: 100'}
 */


// const fruits = ['apple', 'orange', 'mango', 'pineapple', 'lemon', 'coconut', 'kiwi'];
// const randomFruits = fruits.reduce(function (acc, title) {
//     acc[title] = Math.floor(Math.random() * 100) + 1;
//     return acc;
// }, {});
// console.log(randomFruits)

/*
Дан произвольный массив из чисел больше 0 с помощью reduce посчитать сумму четных и нечетных чисел.
input: [1,2,3,4,5,6,7,8,9,10,11, 100, 200, 300]
output: { even: 100, odd: 100 } // 100 это для примера, сумма должна высчитываться.
*/


// const arr = [1,2,3,4,5,6,7,8,9,10,11, 100, 200, 300];
// const result = arr.reduce( (acc, currItem) => {
//     let key = currItem % 2 === 0 ? 'even' : 'odd';
//     acc[key] += currItem;
//     return acc;
// }, {even: 0, odd: 0});
// console.log(result)



/*
Дан массив  [ { name: 'Harry Potter', house: 'Gryfindor' }, 
{ name: 'Cedric Diggory', house: 'Hufflepuff' }, { name: 'Tonks', house: 'Hufflepuff' }, 
{ name: 'Ronald Weasley', house: 'Gryfindor' }, { name: 'Hermione Granger', house: 'Gryfindor' }]; 
Создайте новый массив, который будет содержать только имена мастеров из Хаффлпаффа. Сделайте эту задачу двуми способоами:
C помощью filter и map
C помощью reduce
*/

// const hogwarts = [ 
//     { name: 'Harry Potter', house: 'Gryfindor' }, 
//     { name: 'Cedric Diggory', house: 'Hufflepuff' }, 
//     { name: 'Tonks', house: 'Hufflepuff' }, 
//     { name: 'Ronald Weasley', house: 'Gryfindor' }, 
//     { name: 'Hermione Granger', house: 'Gryfindor' }
// ];
// const magicianName = hogwarts.filter(faculty => {
//     return faculty.house === 'Hufflepuff'
// }).map(faculty => {
//     return faculty.name
// })
// console.log(magicianName)


// const magicianName = hogwarts.reduce((res, currItem) => {
//     return currItem.house === 'Hufflepuff' ? [...res, currItem.name] : res
// }, [])
// console.log(magicianName)

/*
 Дан массив [3, 4, 1, 2, 7]. Создайте две переменные и запишите туда результат сортировки:
От большего к меньшему
От меньшего к большему
*/

// const arr = [3, 4, 1, 2, 7];
// const numbersOne = [...arr];
// numbersOne.sort((a, b) => b - a);

// const numbersTwo = [...arr];
// numbersTwo.sort((a, b) => a - b);

// console.log(numbersOne)
// console.log(numbersTwo)


/*
Создайте произвольный массив из строк и также создайте две переменные, куда запишите результат сортировки: 
От A-Z
От Z-A
 */

// const fruits = ['apple', 'orange', 'mango', 'pineapple', 'lemon', 'coconut', 'kiwi'];

// fruits.sort((a, b) => {
//     const nameA = a.toLowerCase();
//     const nameB = b.toLowerCase();
  
//     if (nameA < nameB)
//       return -1;
//     if (nameA > nameB)
//       return 1;
//     return 0;
//   });
  
//   console.log(fruits);

// fruits.sort((a, b) => {
//     const nameA = a.toLowerCase();
//     const nameB = b.toLowerCase();
  
//     if (nameA > nameB)
//       return -1;
//     if (nameA < nameB)
//       return 1;
//     return 0;
//   });
  
//   console.log(fruits);














