import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TotalService {
  totalCount = 0;

  constructor() { }

  calculateTotal(count: number){
    this.totalCount += count;
  }

}
