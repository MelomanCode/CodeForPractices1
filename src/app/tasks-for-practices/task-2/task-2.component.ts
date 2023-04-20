import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'task-2', templateUrl: './task-2.component.html', styleUrls: ['./task-2.component.css']
})
export class Task2Component implements OnInit {
  kristArray: string[][] = [[]];
  sandTimeArray: string[][] = [[]]
  snakeArray: string[][] = [[]]

  height: number = 50;
  width: number = 85;

  updateIntervalMS: number = 10000;

  snakeHeadPosition: { height: number, width: number } = {height: 20, width: 30}


  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    switch (event.code) {
      case 'ArrowUp':
        this.snakeHeadPosition.height -= 1;
        break

      case 'ArrowDown':
        this.snakeHeadPosition.height += 1;
        break

      case 'ArrowLeft':
        this.snakeHeadPosition.width -= 1;
        break

      case 'ArrowRight':
        this.snakeHeadPosition.width += 1;
        break
    }
  }

  ngOnInit(): void {
    // this.trainingCode()

    setInterval(() => {
      this.renderYLine();
    }, this.updateIntervalMS)

  }


  renderYLine(): void {
    for (let y = 0; y < this.height; y++) {
      this.snakeArray[y] = []
      this.renderXLine(y)
    }
  }

  renderXLine(y: number): void {
    for (let x = 0; x < this.width; x++) {
      this.snakeArray[y][x] = this.getBlock(y, x)
    }
  }

  getBlock(y: number, x: number): string {
    // render first and last map wall
    if (y === 0 || y === this.height - 1) {
      return '*'
    }

    // render empty map blocks and items
    if (x !== 0 && x !== this.width - 1) {

      // render snake head
      // ....
      if (x === this.snakeHeadPosition.width && y === this.snakeHeadPosition.height) {
        return '@'
      }


      // render snake body
      // ....


      // render snake eat item
      // ....


      return ''
    }


    // render left and right wall border
    return '*'
  }


  trainingCode(): void {
    const size2: number = 16;

    for (let y = 0; y < size2; y++) {

      this.kristArray[y] = [];
      for (let x = 0; x < size2; x++) {
        this.kristArray[y].push('')
      }

      for (let x = 0; x < size2; x++) {
        this.kristArray[y].push('*')
      }
    }

    for (let y = size2; y < (size2 * 2); y++) {
      this.kristArray[y] = [];
      for (let x = 0; x < size2; x++) {
        this.kristArray[y].push('*')
      }

      for (let x = 0; x < size2; x++) {
        this.kristArray[y].push('*')
      }

      for (let x = 0; x < size2; x++) {
        this.kristArray[y].push('*')
      }
    }

    for (let y = size2 * 2; y < (size2 * 3); y++) {
      this.kristArray[y] = [];
      for (let x = 0; x < size2; x++) {
        this.kristArray[y].push('')
      }

      for (let x = 0; x < size2; x++) {
        this.kristArray[y].push('*')
      }
    }

    // console.log(this.kristArray)


    const size = 10;


    for (let y = 0; y <= size; y++) {
      this.sandTimeArray[y] = []
      for (let k = 0; k < y; k++) {
        this.sandTimeArray[y].push('')
      }


      for (let x = size - y; x > 0; x--) {
        this.sandTimeArray[y].push('*')
      }


      for (let x = size - y; x >= 0; x--) {
        this.sandTimeArray[y].push('*')
      }
    }


    for (let y = size; y < (size * 2) + 1; y++) {
      this.sandTimeArray[y] = []
      for (let k = (size * 2); k > y; k--) {
        this.sandTimeArray[y].push('')
      }

      for (let x = (size * 2) - y; x < size; x++) {
        this.sandTimeArray[y].push('*')
      }

      for (let x = (size * 2) - y; x <= size; x++) {
        this.sandTimeArray[y].push('*')
      }
    }
    console.log(this.sandTimeArray)
  }
}
