import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Counter APP';
  num: number = 10;
  base: number = 5;

  operations(value: number){
    this.num += value;
  }
}
