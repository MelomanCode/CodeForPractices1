import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'home-root', templateUrl: './home.component.html', styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //Типы данных
  // tmp1:string[] = ['bob' , 'vladimir', 'dima']
  // tmp2: number[] = [0 , 1 , 2 , 3 , 4]
  // tmp3: boolean[] = [true]
  // //Инициализация массивов
  // colors: string[] = ['red', 'green', 'blue'];
  // colors1: string[] = Array.of('red', 'green', 'blue');
  // // Array.from - разделение строки на несколько элементов
  // array:string[] = Array.from('hello World');
  // // Array.from() в которой this.tmp2 является массивом чисел , а второй функцией квадрата чисел для каждого элемента
  // array1:number[] = Array.from(this.tmp2, n => n * n);
  // // Array.from() с испольщованием длины
  // array3 = Array.from({length:3}, (element, index) => {
  //   return index;
  // })
  // array4 = Array.from({length:3, "0": "Tom", "1": "Sam", "2": "Bob"}, (element) => {
  //   return element;
  // });
  // //spread-оператор благодаря опеератору(...@@@@) мы можен наполнить массив значениями из другого массива
  // user: string[] = Array.of(...this.tmp1);
  // // так же можно передавать значение из нескольких массивов
  // value = [...this.tmp1, 'Alex', ...this.tmp2]



  ngOnInit(): void {
    // console.log(this.colors[0]) // Выводит определенное значение из массива по индексу
      // Первый и второй вариавнт равназначны , поэтому нет смысла писать Array.of()
    // console.log(this.colors) // 1
    // console.log(this.colors1) // 2

    //Array.from()
    // console.log(this.array)
    // console.log(this.array1)
    // console.log(this.array3)
    // console.log(this.array4)

    //spread-оператор
    // console.log(...this.tmp1)
    // console.log(this.user)
    // console.log(this.value)
    //
    // const people: string[]= ["Tom", "Bob", "Sam"];
    // const [first, second, third] = people;
    // console.log(first)
    // console.log(second)
    // console.log(third)
    // const people1: string[]= ["Tom", "Bob", "Sam"];
    // const [first1, ...rest] = people1;
    // console.log(first1);
    // console.log(rest[0]);
    // console.log(rest[1]);
    //
    // const people:string[] = ["Sam", "Tom", "Bob"];
    // const employees = [...people];
    // employees[0] = "Dan";
    // console.log(employees);
    // console.log(people);
    //
    // const people = [{name:"Sam"}, {name:"Tom"}, {name:"Bob"}];
    // const employees = [...people];
    // employees[0] = {name: "Dan"}; // Правильно,в данном случае первый элемент 2-го массива заменяется на ссылку на новый объект
    // // employees[0].name = "Dan"; //  Не правильно т.к обект ссылка и в этом случае 1 значение меняется для 2 массивов
    // console.log(employees);
    // console.log(people);

    // Глубокое копирование slice()
    // const users = ['Dima', 'vas9', 'sasha']
    // const people = users.slice()
    // people[1] = 'toma';
    // console.log(users)
    // console.log(people)
    //Копирование по индексам, P.s Второе значение индекса  говорит -  до его значения не включая его
    // const users = ["Tom", "Sam", "Bill", "Alice", "Kate"];
    // const people = users.slice(1, 4);
    // console.log(people);

    //Метод push() добавляет элемент в конец массива
    // const people = [];
    // people.push('Tom');
    // people.push('Sam');
    // people.push('Bob','Mike');
    // console.log(people);

    //Метод pop() удаляет последний элемент из массива
    // const people = ["Tom", "Sam", "Bob", "Mike"];
    // const lastPerson = people.pop();
    // console.log(lastPerson );
    // console.log(people);

    //Метод shift() извлекает и удаляет первый элемент из массива
    // const people = ["Tom", "Sam", "Bob", "Mike"];
    // const firstPerson = people.shift();
    // console.log(firstPerson);
    // console.log(people);

    //Метод unshift() добавляет новый элемент в начало массива
    // const people = ["Tom", "Sam", "Bob"];
    // people.unshift("Alice");
    // console.log(people);

    //Метод sort() сортирует массив по возрастанию( для типа string по алфавитному порядку,
    // а для number нужно прописывать функцию для правильного отоброжения
    // const number = [2, 61, 17, 290, 33]
    // number.sort((a,b) => a-b)
    // console.log(number)

    //Методы indexOf() и lastIndexOf() возвращают индекс первого и последнего включения элемента в массиве
    // const people = ["Tom", "Sam", "Bob", "Tom", "Alice", "Sam"];
    // const firstIndex = people.indexOf("Tom");
    // const lastIndex = people.lastIndexOf("Sam");
    // const otherIndex = people.indexOf("Mike");
    // console.log(firstIndex);
    // console.log(lastIndex);
    // console.log(otherIndex);

    //Метод splice() удаляет элементы с определенного индекса. Например, удаление элементов с третьего индекса
//     const people = ["Tom", "Sam", "Bill", "Alice", "Kate"];
//     const deleted = people.splice(3);
//     console.log(deleted);       // [ "Alice", "Kate" ]
//     console.log(people);         // [ "Tom", "Sam", "Bill" ]
// //
//     const people1 = ["Tom", "Sam", "Bill", "Alice", "Kate"];
//     const deleted1 = people.splice(-1);
//     console.log(deleted1);       // [ "Kate" ]
//     console.log(people1);         // ["Tom", "Sam", "Bill", "Alice"]
// //
//     const people2 = ["Tom", "Sam", "Bill", "Alice", "Kate"];
//     const deleted2 = people.splice(1, 3);
//     console.log(deleted2);       // ["Sam", "Bill", "Alice"]
//     console.log(people2);         // ["Tom", "Kate"]
// //
//     const people3 = ["Tom", "Sam", "Bill", "Alice", "Kate"];
//     const deleted3 = people.splice(1, 3, "Ann", "Bob");
//     console.log(deleted3);       // ["Sam", "Bill", "Alice"]
//     console.log(people3);         // ["Tom", "Ann", "Bob", "Kate"]
//
    //Метод concat() служит для объединения массивов. В качестве результата он возвращает объединенный массив
    // const men = ["Tom", "Sam", "Bob"];
    // const women = ["Alice", "Kate"];
    // const people = men.concat(women);
    // console.log(people);

    //Метод includes() проверяет, есть ли в массиве значение
    // const people1 = ["Tom", "Sam", "Bob", "Tom", "Alice", "Sam"];
    // console.log(people1.includes("Tom"));    // true - Tom есть в массиве
    // console.log(people1.includes("Kate"))    // false - Kate нет в массиве
    // //
    // const people2 = ["Tom", "Sam", "Bob", "Tom", "Alice", "Sam"];
    // console.log(people2.includes("Bob", 2)); // true
    // console.log(people2.includes("Bob", 4))  // false
    // //
    // const people3 = ["Tom", "Sam", "Bob", "Tom", "Alice", "Sam"];
    // console.log(people3.includes("Tom", -2)); // false - 2-й индекс с конца
    // console.log(people3.includes("Tom", -3)) // true - 3-й индекс с конца

    //Метод every() проверяет, все ли элементы соответствуют определенному условию
    // const number = [1, 2, -2, -1 , 5]
    // const passed = number.every(n => n > 0)
    // console.log(passed)

    //Метод some() тоже самое что и every() только проверяет наличие хотябы 1 соответствие определенному условию
    // const number = [1, 2, -2, -1 , 5]
    // const passed = number.some(n => n > 0)
    // console.log(passed)

    //Методы forEach() и map() осуществляют перебор элементов и выполняют с ними определенный операции.
    // Например, используем метод метода forEach() для вычисления квадратов чисел в массиве
    // const numbers = [ 1, 2, 3, 4, 5, 6];
    // numbers.forEach(n =>
    //   console.log("Квадрат числа", n, "равен", n * n )
    // );

    //map() :
    // const numbers = [ 1, 2, 3, 4, 5, 6];
    // const squares = numbers.map(n => n * n);
    // console.log(squares);

    //Метод flat() упрощает массив с учетом указанной вложенности элементов
    // const people = ["Tom", "Bob", ["Alice", "Kate", ["Sam", "Ann"]]];
    // const flattenPeople = people.flat();
    // console.log(flattenPeople); // ["Tom", "Bob", "Alice", "Kate", ["Sam", "Ann"]]
    //
    // const flattenPeople = people.flat(2);
    // console.log(flattenPeople); // ["Tom", "Bob", "Alice", "Kate", "Sam", "Ann"]

    //

    // const num1 = '1234567890';
    // const num2 = 'SamDimaLoreenLeraDominik'
    // const value1 = num1.split('')
    // const value2 = num2.split('') // Не лучшая идея))
    // console.log(num1)
    // console.log(num2)
    // console.log(value1)
    // console.log(value2)

    //

    // const date = '2025-12-31';
    // const date1 = '2025.12.31';
    // const res = date.split('-').reverse().join('.');
    // const res1 = date1.split('.').reverse().join('-');
    // console.log(res);
    // console.log(res1);

// Метод at()
    // const res = ['a', 'b', 'c'].at(-1);
    // console.log(res)

    //
//     const rule: {[key: string]: string} = {
//       ')': '(',
//       ']': '[',
//       '}': '{'
//     }
//     const tmp = ['(','{','}','[',']','(',')',')']
//     const stack: string[] = []
//     const validate = () => {
//       for (const el of tmp) {
//         if (!rule[el]) {
//           stack.push(el)
//         } else {
//           const lastEl = stack.pop()
//           if (lastEl !== rule[el]) {
//             console.log('Invalid ' + el)
//             return
//           }
//         }
//
//       }
//     }
// validate()

    // forEach() Сумма элементов sum += elem; нужно запомнить
    // let arr = [1, 2, 3, 4, 5];
    // let sum = 0;
    // arr.forEach(function(elem) {
    //   sum += elem;
    // });
    // console.log(sum);

//
    //Метод reduce()
    // let arr = [1, 2, 3, 4, 5, 6];
    // let res = arr.reduce(function(sum, elem) {
    //   return sum + elem;
    // }, );
    // console.log(res);
    //
    // let arr = [1, -2, -3, 4, 5, -6];
    // let res = arr.reduce(function(sum, elem) {
    //   if (elem >= 0) {
    //     return sum + elem;
    //   } else {
    //     return sum;
    //   }
    // });
    // console.log(res);

    // Метод fill()
    // let res = ['a', 'b', 'c'].fill('!', 1);
    // console.log(res);

    //Объект Date
    // let date = new Date();
    // console.log(date.getSeconds());  // секунды
    // console.log(date.getMinutes());  // минуты
    // console.log(date.getHours());    // часы
    // console.log(date.getDate());     // дни
    // console.log(date.getMonth());    // месяцы с нуля
    // console.log(date.getFullYear()); // год
    // console.log(date.getDay());      // текущий день недели
    //
    // let date = new Date();
    // let str  = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    // console.log(str);

    //SetInterval()
    // let i = 0;
    // let id = setInterval(function() {
    //   i++;
    //   if (i == 10) {
    //     clearInterval(id);
    //   } else {
    //     console.log(i);
    //   }
    // }, 1000);











    //
    // const name: string[] = ['a', 'b', 'c', 'd', 'e']
    //
    // const array1: {key: string}[] = name.map((el) => ({key: el}))
    // console.log(array1)
    //
    // const numbers = [10, 3, 5, 15, 33, 45]
    //
    // const name2: string[] = array1.map((el) => el.key)
    // console.log(name2)
    //
    // const name3 = name2.concat(numbers.map(el => el.toString()))
    // console.log(name3)
    // const item = numbers.join().split(',')
    // console.log(item)
    // console.log(numbers.length)

    // const obj = {
    // i: 46,
    // e: 'vas',
    //   kaka: '+',
    //   el: {el: 4},
    //   vv: [1]
    // }
    //
    // const arrayNum: number[] = []
    // const arrayStr: string[] = []

    // console.log(Object.keys(obj))
    // console.log(Object.values(obj))
    // console.log(Object.entries(obj))
    // console.log(Array.isArray(obj.i))
    // console.log(Array.isArray(obj.vv))
    // @ts-ignore
    // console.log(typeof (obj.kaka))
    // console.log(arrayNum)
    // console.log(arrayStr)
    // let str = '123'
    // let num = Number(str)
    // console.log(num)
    // console.log(str)

    // const tmp: string = name.slice(4).toString()
    // console.log(tmp)
    // console.log(name[4])

    // const array: {[key: string]: string}[] = [{'a': 'aaaa', 'b': 'bbbb'}, {'c': 'cccc','d': 'dddd'}, {'e': 'eeee', 'f': 'ffff'}]
    // const value  = array.find((obj) => obj['e'])?.['e']
    // console.log(value)

    // const total: number = numbers.reduce((previousValue, currentValue) => previousValue + currentValue)
    // console.log(total)

//     const array3: number[][] = [[1, 2, 3, 4], [1,2], [1, 2, 3, 4, 5], [1, 2, 3]]
//
//     const array4: number[][] = array3.filter((value) => value.length > 3)
//     console.log(array4)
//
//
//     const array9 = [1, 6, 38, 42, 5, 63, 7]
//     const obj5: {[key: string]: number} = {}
//     let total: number = 0;
//
//     const array9ArrayV1 = String(array9).split(',')
//     const array9ArrayV2 = array9.sort((a, b) => a - b).join().split(',')
//     console.log(array9ArrayV1)
//     console.log(array9ArrayV2)
//
//       const num = array9ArrayV1.join('')
//       const numArray = Number(num)
//       const ara = Array.of(numArray)
//       console.log(ara)
//       console.log(numArray)
//
//       const sumArray = array9.reduce((previousValue, currentValue) => previousValue + currentValue)
//       console.log(sumArray)
//
//
//     array9.forEach((el, index) => {
//       obj5[index.toString()] = el
//       total += el
//       if (index === array9.length - 1) {
//         obj5['total'] = total
//       }
//     })
//     console.log(obj5)
//
//
//     const obj0 = Object.values(obj5).slice(0, -1)
//     const obj01 = Object.keys(obj5)
//     const obj02 = Object.entries(obj5).filter(([key, value]) => key !== 'total' )
//       .map(([key, value]) => value)
//     console.log(obj0)
//     console.log(obj01)
//     console.log(obj02)
//
// const objNames: {[key: string]: string} = {
//   'vasya':  'pupkin',
//   'petya':  'kosich',
//   'dima':  'lenin',
// }
//
// const objAge: {[key: string]: number} = {
//   'vasya':  46,
//   'petya':  17,
//   'dima':  27,
// }
//
//     const objColor: {[key: string]: string} = {
//       'red':  'vasya',
//       'green':  'petya',
//       'blue':  'dima',
//     }
//
//
//     const sasha = Object.create(objNames)
//     sasha.name = 'sasha'
//     sasha.surname = 'falei'
//     sasha.age = 27
//
//       console.log(sasha)
//
//
//
//     const findColor = (key: string) => {
//     return Object.entries(objColor).find(([, value1]) => value1 === key)?.[0] || ''
//     }
//
//     const getObj = (key: string, value: string) => ({name: key, surname: value, age: objAge[key], color: findColor(key)})
//
//     const arrayPeoples: {name: string, age: number, surname: string, color: string}[] =
//     Object.entries(objNames).map(([key, value]) => getObj(key, value))


// const tmpArray = []
//     tmpArray.push(Object.assign({}, objAge))
    // tmpArray.push(objAge)
    // tmpArray.push(objAge)
    // const tmpArray = Object.assign([],{}, objAge)
    //
    // console.log(tmpArray)
    // objAge['vasya'] = 58

    // console.log(arrayPeoples)

      //
      //mission 1
      // const user = {
      //     name: 'dima',
      //     surname: 'kezik',
      //     patronymic: 'Sergeevich'
      // }
      // //V1
      // console.log(user.name + ' ' + user.surname + ' ' + user.patronymic)
      // //V2
      // const user2 = Object.values(user).join(' ')
      // console.log(user2)
      // //mission 2
      // const date = {
      // years: 2023,
      //     month: 9,
      //     day: 12
      // }
      // //V1
      // console.log(date.years + '-' + date.month + '-' + date.day)
      // //V2
      // const date2 = Object.values(date).join('-')
      // console.log(date2)
      // //mission 3
      // let obj = {x: 1, y: 2, z: 3};
      // const obj2 = Object.values(obj).map(value => value * value)
      // console.log(obj2)
      // //mission 4
      // let obj4 = {52: 'b', 1: 'a', 43: 'c'};
      // console.log(obj4[1]);
      // console.log(obj4[52]);
      // console.log(obj4[43]);
      // //mission 5
      // let obj6 = {x: 1, y: 2, z: 3};
      // const keysArray = Object.keys(obj6)
      // console.log(keysArray)
      // //mission 6
      // let key = 'key'
      // let obj10 = {
      //     [key + '1']: 1,
      //     [key + '2']: 2,
      //     [key + '3']: 3
      // };
      // console.log(obj10)
      //mission 7

      const obj11 = {
          array1: [1, 5, 6, 9],
          array2: [false , true , true , false],
          array3: [{name: ' vasya'}, {name: 'petya'}, {name: 'kolya'}, {name: 'dima'}]
      }
      const resultArray: {name:string , count: number, isValue: boolean, merge: string}[] = obj11.array1
          .map((value, index ) => {
              return {
                  count: value,
                  isValue: obj11.array2[index],
                  name: obj11.array3[index].name,
                  merge: `${obj11.array3[index].name}
                  _${obj11.array2[index] ? 'enable' : 'disable'}_${value}`
              }
      })
      console.log(resultArray)


























  }


}

