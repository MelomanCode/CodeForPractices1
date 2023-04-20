import {Component, OnInit} from '@angular/core';
import {IResultArray, SelectionValue} from "./interfaces";


type Sing = '<' | '>' | '=';

@Component({
  selector: 'task-component', templateUrl: './task.component.html', styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public firstCount: number = 0;
  public secondCount: number = 0;
  public result: number | string = 0;
  public selection: SelectionValue = 'perimeter';
  public selectionsList: SelectionValue[] = ['perimeter', 'square', 'hypotenuse', 'more', 'less']
  public resultArray: IResultArray[] = [];

  get sign(): string {
    return this.signLogic();
  }

  get isShowMark(): boolean {
    return this.selection === 'more' || this.selection === 'less';
  }

  ngOnInit(): void {
    let tmpItem = localStorage.getItem('count.list');
    if (tmpItem) {
      tmpItem = tmpItem.toString();
      this.resultArray = JSON.parse(tmpItem);
    }
  }

  public consider() {
    switch (this.selection) {
      case "perimeter": {
        this.perimeterAction()
        break;
      }
      case "square": {
        this.squareAction()
        break;
      }
      case "hypotenuse": {
        this.hypotenuse()
        break;
      }
      case "more": {
        this.more()
        break;
      }
      case "less": {
        this.less()
        break;
      }
    }

    this.addInArray();
  }


  private addInArray(): void {
    const tmpResult: IResultArray = {
      result: this.result,
      selection: this.selection,
      firstCount: this.firstCount,
      secondCount: this.secondCount
    }
    this.resultArray.push(tmpResult);
    this.saveInLocalStorage();
  }

  private saveInLocalStorage(): void {
    const res = JSON.stringify(this.resultArray)
    localStorage.setItem('count.list', res);
  }

  private perimeterAction() {
    this.result = (this.firstCount + this.secondCount) * 2;
  }

  private squareAction() {
    this.result = this.firstCount * this.secondCount
  }

  private hypotenuse() {
    this.result = Math.sqrt(Math.pow(this.firstCount, 2) + Math.pow(this.secondCount, 2))
    this.result = +this.result.toFixed(2)
  }

  private more() {
    let result: number | string = 'Равные значения';
    if (this.firstCount > this.secondCount) {
      result = this.firstCount
    } else if (this.firstCount < this.secondCount) {
      result = this.secondCount
    }
    this.result = result
  }

  private less() {
    let result: number | string = 'Равные значения';
    if (this.firstCount < this.secondCount) {
      result = this.firstCount
    } else if (this.firstCount > this.secondCount) {
      result = this.secondCount
    }
    this.result = result
  }

  private signLogic(): Sing {
    let result: Sing = '=';
    if (this.firstCount > this.secondCount) {
      result = ">"
    } else if (this.firstCount < this.secondCount) {
      result = "<"
    }
    return result;
  }
}
