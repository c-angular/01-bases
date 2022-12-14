import { Component } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './list.component.html',
})
export class ListComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Batman'];
  deletedHero: string = '';

  deleteHero(): void{
    this.deletedHero = this.heroes.shift() || '';
  }
}
