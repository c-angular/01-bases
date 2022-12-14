import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
})
export class CounterComponent {
    title: string = 'Counter APP';
    num: number = 10;
    base: number = 5;

    operations(value: number) {
        this.num += value;
    }
}
