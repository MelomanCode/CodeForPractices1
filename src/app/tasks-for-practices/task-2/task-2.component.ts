import {Component, HostListener, OnInit} from '@angular/core';

interface ICord {
  height: number;
  width: number;
}

@Component({
  selector: 'task-2',
  templateUrl: './task-2.component.html',
  styleUrls: ['./task-2.component.css']
})
export class Task2Component implements OnInit {
  kristArray: string[][] = [[]];
  sandTimeArray: string[][] = [[]]





  mapArray: string[][] = [[]]
  mapHeight: number = 20;
  mapWidth: number = 35;
  renderIntervalMS: number = 100;
  startSnakeBodyLength: number = 2;
  snakeBodyArray: ICord[] = []
  move: string = 'Up'
  snakeHeadPosition: ICord = {height: 20, width: 30}
  snakeEatPosition: ICord = {
    height: this.getRandomInt(1, this.mapHeight - 1), width: this.getRandomInt(1, this.mapWidth - 1)
  }


  @HostListener('document:keydown', ['$event']) handleKeyboardEvent(event: KeyboardEvent): void {
    this.checkWhereBody(event.code);

  }

  ngOnInit(): void {
    // this.trainingCode()
    this.initSnakeBody();

    setInterval(() => {
      this.moveControl();
      this.eatAction();
      this.updateSnakeBodyArray();
      this.generateEat();


      this.renderYLine();
    }, this.renderIntervalMS)

  }

  eatAction(): void {
    if (this.snakeHeadPosition.width === this.snakeEatPosition.width
      && this.snakeHeadPosition.height === this.snakeEatPosition.height) {

      const tmpArray = Array.from(this.snakeBodyArray);
      const snakeLength = tmpArray.length - 1;
      this.snakeBodyArray.push(tmpArray[snakeLength])
    }
  }

  generateEat(): void {
    if (this.snakeHeadPosition.width === this.snakeEatPosition.width
      && this.snakeHeadPosition.height === this.snakeEatPosition.height) {
      this.snakeEatPosition = {
        height: this.getRandomInt(1, this.mapHeight - 1), width: this.getRandomInt(1, this.mapWidth - 1)
      }
    }
  }

  initSnakeBody(): void {
    let tmpY = this.snakeHeadPosition.height;
    for (let i = 0; i <= this.startSnakeBodyLength; i++) {
      tmpY += i;
      this.snakeBodyArray.push({height: tmpY, width: this.snakeHeadPosition.width});
    }
  }


  renderYLine(): void {
    for (let y = 0; y < this.mapHeight; y++) {
      this.mapArray[y] = []
      this.renderXLine(y)
    }
  }

  renderXLine(y: number): void {
    for (let x = 0; x < this.mapWidth; x++) {
      this.mapArray[y][x] = this.getBlock(y, x)
    }
  }

  getBlock(y: number, x: number): string {
    // render first and last map wall
    if (y === 0 || y === this.mapHeight - 1) {
      return '*'
    }

    // render empty map blocks and items
    if (x !== 0 && x !== this.mapWidth - 1) {

      // render snake head
      if (x === this.snakeHeadPosition.width && y === this.snakeHeadPosition.height) {
        return '@'
      }

      // render snake body
      let foundBodyPosition = null;
      this.snakeBodyArray.forEach((snakeBodyPosition) => {
        if (x === snakeBodyPosition.width && y === snakeBodyPosition.height) {
          foundBodyPosition = '#'
        }
      })

      if (foundBodyPosition) {
        return foundBodyPosition;
      }

      // render snake eat item
      if (x === this.snakeEatPosition.width && y === this.snakeEatPosition.height) {
        return '$'
      }
      return ''
    }

    // render left and right wall border
    return '*'
  }

  private getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  private checkWhereBody(event: string) {
    switch (event) {
      case 'ArrowUp':
        this.move = 'Up'


        // if (this.snakeBodyPosition.width === this.snakeHeadPosition.width
        //   && this.snakeBodyPosition.height === this.snakeHeadPosition.height - 1) {
        //   return
        // } else {
        //
        // }
        break

      case 'ArrowDown':
        this.move = 'Down'


        // if (this.snakeBodyPosition.width === this.snakeHeadPosition.width
        //   && this.snakeBodyPosition.height === this.snakeHeadPosition.height + 1) {
        //   return
        // } else {
        //
        // }
        break

      case 'ArrowLeft':
        this.move = 'Left'


        // if (this.snakeBodyPosition.width === this.snakeHeadPosition.width - 1
        //   && this.snakeBodyPosition.height === this.snakeHeadPosition.height) {
        //   return
        // } else {
        //
        // }
        break

      case 'ArrowRight':
        this.move = 'Right'


        // if (this.snakeBodyPosition.width === this.snakeHeadPosition.width + 1
        //   && this.snakeBodyPosition.height === this.snakeHeadPosition.height) {
        //   return
        // } else {
        //
        // }
        break
    }
  }

  private updateSnakeBodyArray(): void {
    const tmpArray = Array.from(this.snakeBodyArray);

    this.snakeBodyArray.forEach((snakeBodyPosition, index) => {
      if (index === 0) {
        this.snakeBodyArray[index] = Object.assign({}, this.snakeHeadPosition);
      } else {
        this.snakeBodyArray[index] = tmpArray[index - 1]
      }
    })
  }

  private moveControl() {
    if (this.move === 'Up') {
      this.snakeHeadPosition.height -= 1
    }

    if (this.move === 'Down') {
      this.snakeHeadPosition.height += 1
    }

    if (this.move === 'Left') {
      this.snakeHeadPosition.width -= 1
    }

    if (this.move === 'Right') {
      this.snakeHeadPosition.width += 1
    }
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
