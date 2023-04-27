import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'task-3',
  templateUrl: './task-3.component.html',
  styleUrls: ['./task-3.component.css']
})
export class Task3Component implements OnInit {

  textArray: { person: 'ai' | 'user', text: string}[] = []
  text: string = ''
  mysteriesArray: { answer: string, ask: string }[] = [
    { answer: 'Какие часы показывают верное время только два раза в сутки?', ask: 'которые остановились'},
    { answer: 'Летели утки: одна впереди и две позади, одна позади и две впереди, одна между двумя и три в ряд. Сколько всего летело уток?', ask: '3'},
    { answer: 'Горят два дома: богатый и бедный. Какой дом будет тушить полиция?', ask: 'полиция пожары не тушит'},
    { answer: 'Про что всегда говорят в будущем времени?', ask: 'про завтра'},
    { answer: 'Сколько месяцев в году имеют 28 дней?', ask: 'все'},
    { answer: 'Какой остров сам себя называет предметом белья?', ask: 'ямайка'},
    { answer: 'Почему сложные загадки опасны для головы?', ask: 'приходится ломать над ними голову'},
    { answer: 'Из какого крана нельзя помыть руки?', ask: 'из строительного'}
  ]
  isMysteryMode: boolean = false
  selectedMystery: { answer: string, ask: string } | null = null
  firstMystery: boolean = true;



  submitData(second: number) {
    if (!isNaN(second)) {
      this.dateNumber(second)
    } else {
      console.error('no-no-no:)')
    }
  }

  private dateNumber(second: number) {


    const sec = Math.round(second % 60)
    const tmpSec = second - sec
    const min = Math.round((tmpSec / 60) % 60)
    const tmpSec2 = tmpSec - (min * 60)
    const hour = Math.round((tmpSec2 / 3600) % 60 % 24)
    const tmpSec3 = tmpSec2 - (hour * 3600)
    const day = Math.round((tmpSec3 / (86400)) % 24 % 30)
    const tmpSec4 = tmpSec3 - (day * 3600 * 24)
    const month = Math.round((tmpSec4 / (2592000)) % 30 % 12)
    const tmpSec5 = tmpSec4 - (month * 2592000)
    const year = Math.round(tmpSec5 / 31536000)


    console.log(sec)
    console.log(min)
    console.log(hour)
    console.log(day)
    console.log(month)
    console.log(year)
  }


  submitData2(num: number) {
    if (!isNaN(num)) {
      this.numNumber(num)
    } else {
      console.error('no-no-no:)')
    }
  }

  numNumber(num: number) {
    let sourceNumArray: number[] = [];

    for (let i = 2; i <= num; i++) {
      if (i % 2 !== 0) {
        sourceNumArray.push(i);
      }
    }

    const clearNumbers = (dividedCount: number): number[] => {
      const tmpNumArray: number[] = [];
      for (let num of sourceNumArray) {
        if (num > 1) {
          if (num % dividedCount !== 0) {
            tmpNumArray.push(num);
          }
        }
      }
      return tmpNumArray;
    }

    if (num >= 2) {
      console.log(2);
    } else {
      console.log('not found!')
    }

    while (sourceNumArray.length) {
      console.log(sourceNumArray[0])
      sourceNumArray = clearNumbers(sourceNumArray[0]);
    }
  }

  private getRandom(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  mysteryMode() {
    const myText = this.text.trim().toLowerCase()
    if (this.selectedMystery) {
      this.firstMystery = false;
      if (this.selectedMystery.ask == myText) {
        this.textArray.push({person: 'ai', text: 'Верно!'})
        this.selectedMystery = null
      } else {
        this.textArray.push({person: 'ai', text: 'Вы ошиблись!'})
        return
      }
    } else {
      if (myText === 'да' || this.firstMystery) {
        const foundMystery = this.mysteriesArray[this.getRandom(0, this.mysteriesArray.length - 1)]
        this.selectedMystery = foundMystery
        this.textArray.push({person: 'ai', text: foundMystery.answer})
      } else {
        this.isMysteryMode = false
        this.firstMystery = true;
      }
      return;
    }

    this.textArray.push({person: 'ai', text: 'Хотите еще загадку?'})
  }




  chatGPT2000() {
    if (this.text === '') {
      return
    }

    // User answer

    this.textArray.push({person: 'user', text: this.text});


    // Chat ask
    const myText = this.text.trim().toLowerCase()

    if (this.isMysteryMode) {
      this.mysteryMode();
      this.text = ''
      return;
    }

    if (myText === 'привет') {
      this.textArray.push({person: 'ai', text: 'Приветствую вас господин'});
    } else if (myText === 'задай мне загадку' || myText === 'хочу загадку' || myText === 'загадай загадку') {
      this.textArray.push({person: 'ai', text: 'Да, конечно! Вот вам загадка:'});
      this.isMysteryMode = true;
      this.mysteryMode();
    }














    else {
      this.textArray.push({person: 'ai', text: 'Не понимаю вас'});
    }
    this.text = ''
  }













  ngOnInit(): void {
  }
}
