import {Component, Input} from '@angular/core';
import {IResultArray} from "../interfaces";

@Component({
  selector: 'result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent {
  @Input() resultArray: IResultArray[] = [];

  public clearLocalStorage(): void {
    localStorage.setItem('count.list', '')
    this.resultArray = [];
  }
}
