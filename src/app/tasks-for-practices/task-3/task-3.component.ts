import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'task-3',
  templateUrl: './task-3.component.html',
  styleUrls: ['./task-3.component.css']
})
export class Task3Component implements OnInit {

  numArray: number[] = []

  submitData(second: number) {
    if (!isNaN(second)) {
      this.dateNumber(second)
    } else {
      console.error('only number!')
    }
  }

  private dateNumber(second: number) {

    this.numArray = [];
    const sec = Math.round(second % 60)
    const tmpSec = second - sec
    const min = Math.round((tmpSec / 60) % 60)
    const tmpSec2 = tmpSec - (min * 60)
    const hour = Math.round((tmpSec2 / 3600) % 60 % 24)
    const tmpSec3 = tmpSec2 - (hour * 3600)
    const day = Math.round((tmpSec3 / (86400)) % 24 % 30)
    const tmpSec4 = tmpSec3 - (day * 3600 * 24)
    const month = Math.round((tmpSec4 / (2592000)) % 30 % 12)


    console.log(sec)
    console.log(min)
    console.log(hour)
    console.log(day)
    console.log(month)
  }





  ngOnInit(): void {
  }
}
