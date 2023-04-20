import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'task-1',
  templateUrl: './task-1.component.html',
  styleUrls: ['./task-1.component.css']
})
export class Task1Component implements OnInit {
  public resultArray: string[] = []
  public resultArray2: number[] = []

  submitData(data: number) {
    if (!isNaN(data)) {
      this.splitNumber(data)
    } else {
      console.error('only number!')
    }
  }

  private splitNumber(data: number) {
    this.resultArray = data.toString().split(''); // когда есть опыт =)

    // this.resultArray = [];
    // const length = data.toString().split('').length         //Для бесконечного значения
    //
    //
    // for (let i = 0; i < length; i++) {
    //   const res = data % 10;                    //Хорошо
    //   this.resultArray.push(res)
    //   data = (data - res) / 10;
    // }
    //
    //
    // const tmp1 = (data % 100);
    // const tmp2 = (data % 1000);
    // const tmp3 = (data % 10000);                      //Не красиво,  но можно( если статическое кол-во цифр)
    // const num3 = (tmp2 - tmp1) / 100;
    // const num4 = (tmp3 - tmp2) / 1000;
    // const num5 = ((data % 100000) - tmp3) / 10000;
    //
    //
    // let number = data
    // while (number > 0) {                         //Опасно
    //   const digit = number % 10;
    //   this.resultArray.push(digit)
    //   number = (number - digit) / 10;
    // }
    //
    // this.resultArray.reverse()
    // this.resultArray.push(num5,num4,num3,num2,num1)
  }

  submitData2(data: number) {
    if (!isNaN(data)) {
      this.getKilometers(data);
    } else {
      console.error('only number!')
    }
  }

  public getKilometers(data: number): void {
    this.resultArray2.push(data / 1000)
  }

  ngOnInit(): void {
    // let value: string = 'vasya'
    //
    // const capitalizeFirstLetter = (value: string) => {
    //   let firstLetter = value[0].toUpperCase()
    //   return firstLetter + value.slice(1)
    // }
    // value = capitalizeFirstLetter(value)
    // console.log(value)
    console.log(`
           /\\
          /  \\
         /    \\
        /------\\
       / |    | \\
         |    |
         |    |
         |____|
         `
    );

    const size = 7;
    let res = ''
    for (let i = 1; i <= size; i++) {             // Y cord
      for (let k = size - i; k >= 1; k--) {
        res += '  '
      }

      for (let j = 1; j <= i; j++) {              // X cord
        res += '0 '
      }

      for (let j = 1; j < i; j++) {              // X cord
        res += '0 '
      }
      res += '\n'
    }


    for (let i = 1; i <= size; i++) {
      for (let j = 1; j <= size; j++) {
        res += '0 '
      }
      for (let j = 1; j < size; j++) {
        res += '0 '
      }
      res += '\n'
    }


    for (let i = size; i > 1; i--) {                 // Y cord
      for (let k = size - i; k >= 0; k--) {
        res += '  '
      }
      for (let j = i; j > 1; j--) {                  // X cord
        res += '0 '
      }
      for (let j = i; j > 2; j--) {                  // X cord
        res += '0 '
      }
      res += '\n'
    }
    console.log(res)



































  }
}
