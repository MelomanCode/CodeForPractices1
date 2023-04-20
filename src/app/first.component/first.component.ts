import {Component, Input, OnInit} from '@angular/core';
import {CalculateClass} from "../calculate.class";
import {TotalService} from "./total.service";

type CalculateAction = 'plus' | 'minus';

@Component({
  selector: 'first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent extends CalculateClass implements OnInit {
  title = 'HelloWorld';
  @Input() titleText = '';

constructor(totalService: TotalService) {
  super(totalService);

}
  ngOnInit(): void {
  }

  calculate(action: CalculateAction) {
    if (action === 'plus') {
      this.incrementCount();
    }
    else {
      this.dicrementCount();
    }
  }
}
