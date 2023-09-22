import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'home-root', templateUrl: './home.component.html', styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {




  ngOnInit(): void {

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
    // employees[0] = {name: "Dan"}; // Правильно
    // // employees[0].name = "Dan"; //  Не правильно
    // console.log(employees);
    // console.log(people);

    // Глубокое копирование slice()
    // const users = ['Dima', 'vas9', 'sasha']
    // const people = users.slice()
    // people[1] = 'toma';
    // console.log(users)
    // console.log(people)
    // const users = ["Tom", "Sam", "Bill", "Alice", "Kate"];
    // const people = users.slice(1, 4);
    // console.log(people);

    // const people = [];
    // people.push('Tom');
    // people.push('Sam');
    // people.push('Bob','Mike');
    // console.log(people);

    // const people = ["Tom", "Sam", "Bob", "Mike"];
    // const lastPerson = people.pop();
    // console.log(lastPerson );
    // console.log(people);

    // const people = ["Tom", "Sam", "Bob", "Mike"];
    // const firstPerson = people.shift();
    // console.log(firstPerson);
    // console.log(people);

    // const people = ["Tom", "Sam", "Bob"];
    // people.unshift("Alice");
    // console.log(people);

    // const number = [2, 61, 17, 290, 33]
    // number.sort((a,b) => a-b)
    // console.log(number)

    // const people = ["Tom", "Sam", "Bob", "Tom", "Alice", "Sam"];
    // const firstIndex = people.indexOf("Tom");
    // const lastIndex = people.lastIndexOf("Sam");
    // const otherIndex = people.indexOf("Mike");
    // console.log(firstIndex);
    // console.log(lastIndex);
    // console.log(otherIndex);

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
    // const men = ["Tom", "Sam", "Bob"];
    // const women = ["Alice", "Kate"];
    // const people = men.concat(women);
    // console.log(people);

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

    // const number = [1, 2, -2, -1 , 5]
    // const passed = number.every(n => n > 0)
    // console.log(passed)

    // const number = [1, 2, -2, -1 , 5]
    // const passed = number.some(n => n > 0)
    // console.log(passed)

    // const numbers = [ 1, 2, 3, 4, 5, 6];
    // numbers.forEach(n =>
    //   console.log("Квадрат числа", n, "равен", n * n )
    // );

    // const numbers = [ 1, 2, 3, 4, 5, 6];
    // const squares = numbers.map(n => n * n);
    // console.log(squares);

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
//       }
//     }
// validate()

    // forEach() (Сумма элементов sum += elem; нужно запомнить)
    // let arr = [1, 2, 3, 4, 5];
    // let sum = 0;
    // arr.forEach(function(elem) {
    //   sum += elem;
    // });
    // console.log(sum);

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

    // let res = ['a', 'b', 'c'].fill('!', 1);
    // console.log(res);

    // let date = new Date();
    // console.log(date.getSeconds());
    // console.log(date.getMinutes());
    // console.log(date.getHours());
    // console.log(date.getDate());
    // console.log(date.getMonth());
    // console.log(date.getFullYear());
    // console.log(date.getDay());
    //
    // let date = new Date();
    // let str  = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    // console.log(str);

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
//     const sasha = Object.create(objNames)
//     sasha.name = 'sasha'
//     sasha.surname = 'falei'
//     sasha.age = 27
//
//       console.log(sasha)

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
      // //V3
      // const user3 = `${user.name} ${user.surname} ${user.patronymic}`
      // console.log(user3)
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

      // const obj11 = {
      //     array1: [1, 5, 6, 9],
      //     array2: [false , true , true , false],
      //     array3: [{name: ' vasya'}, {name: 'petya'}, {name: 'kolya'}, {name: 'dima'}]
      // }
      // const resultArray: {name:string , count: number, isValue: boolean, merge: string}[] = obj11.array1
      //     .map((value, index ) => {
      //         return {
      //             count: value,
      //             isValue: obj11.array2[index],
      //             name: obj11.array3[index].name,
      //             merge: `${obj11.array3[index].name}_${obj11.array2[index] ? 'enable' : 'disable'}_${value}`
      //         }
      // })
      // console.log(resultArray)

      const obj1 = {
        name: 'a',
          age: 1,
      obj: {name: 'b', age: 2, obj: {name: 'c', age: 3, obj: {name: 'd', age: 4, obj: {name: 'e', age: 5}}} },
          obj2: {name: 'b', age: 2, obj: {name: 'c', age: 3, obj: {name: 'd', age: 4, obj: {name: 'e', age: 5}}} },
          obj4: {obj: { obj: {obj: {}}} }
      }

      const array1: {name: string, age: number}[] = []
      const parse = (obj: any) => {
        if (obj['name'] && obj['age']){
            array1.push({name: obj['name'] || '', age: obj['age'] || 0})
        }
        Object.values(obj).forEach((value) => {
          if (value instanceof Object) {
              parse(value)
          }
        })

      }
      parse(obj1)
      console.log(array1)



      const obj10 = {
        arr: [1, 3, 7, 15, 40],
          obj1: {
          arr1: [5, 7, 99, 14, 41],
              obj1: {
                  arr1: [6, 33, 21, 19, 42],
                  obj1: {
                      arr1: [5, 2, 65, 14, 43],
                      obj1: {
                          arr1: [5, 97, 99, 14, 44]
                      }
                  }
              }
          },
          obj2: {
              arr1: [5, 7, 99, 14, 45],
              obj1: {
                  arr1: [6, 33, 34, 19, 46],
                  obj1: {
                      arr1: [5, 7, 55, 14, 47],
                      obj1: {
                          arr1: [5, 7, 99, 14, 48]
                      }
                  }
              }
          }
      }

      let arrayNum: number[] = []

      const parseNum = (obj: any) => {
        Object.values(obj).forEach(value => {
          if (Array.isArray(value)) {
            arrayNum = arrayNum.concat(value)
          } else if (value instanceof Object) {
            parseNum(value)
          }
        })
      }
      parseNum(obj10)
      arrayNum = [...new Set(arrayNum)]
      let total: number = 0
      arrayNum.forEach(value => {
        total += value
      })
      arrayNum.push(total)
      console.log(arrayNum)

      const objTree: {obj1: {}, obj2: {}} = {obj1: {obj1: {obj1: {obj1: {},obj2: {}},obj2: {obj1: {},obj2: {}}},obj2: {obj1: {obj1: {},obj2: {}},obj2: {obj1: {},obj2: {obj1: {},obj2: {obj1: {},obj2: {}}}}}},obj2: {obj1: {obj1: {obj1: {},obj2: {}},obj2: {obj1: {obj1: {},obj2: {}},obj2: {}}},obj2: {obj1: {obj1: {},obj2: {}},obj2: {obj1: {obj1: {obj1: {},obj2: {}},obj2: {}},obj2: {}}}}}

      // const objTree2: {obj1: {}, obj2: {}} = {obj1: {obj1: {}, obj2: {obj1: {obj1: {}, obj2: {}}, obj2: {}}}, obj2: {}}

      let maxDeep: number
      let minDeep :number
      let numArray: number[] = []

      const parseTree = (obj: {obj1: {}, obj2: {}} , deep: number) => {
        if (!Object.keys(obj).length) {
          numArray.push(deep)
            return
        }
        if (obj.obj1) {
          parseTree(obj.obj1 as {obj1: {}, obj2: {}}, deep + 1)
        }
        if (obj.obj2) {
            parseTree(obj.obj2 as {obj1: {}, obj2: {}}, deep + 1)
        }
      }
      parseTree(objTree, 0)
      numArray = numArray.sort((a, b) => a - b)
      minDeep = numArray[0]
      maxDeep = numArray[numArray.length - 1]
      console.log(`maxDeep: ${maxDeep} minDeep: ${minDeep}`)




















  }
}

