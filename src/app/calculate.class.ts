import {TotalService} from "./first.component/total.service";

export class CalculateClass {
  counter = 0;
  constructor(public totalService: TotalService) {
  }

  incrementCount() {
    console.log(this.counter)
    this.counter = this.counter + 1;
    this.totalService.calculateTotal(1)
  }

  dicrementCount() {
    console.log(this.counter)
    this.counter = this.counter - 1;
    this.totalService.calculateTotal(-1)
  }
}
