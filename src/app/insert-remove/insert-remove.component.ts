import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-insert-remove',
  templateUrl: 'insert-remove.component.html',
  styleUrls: ['insert-remove.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 }))
      ])
    ]),

    trigger('myOtherInsertRemoveTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('0.5s', style({ transform: 'translateX(100%)' }))
      ]),
      transition('* => active', [
        animate('2s', keyframes([
          style({ backgroundColor: 'blue', offset: 0 }),
          style({ backgroundColor: 'red', offset: 0.8 }),
          style({ backgroundColor: 'orange', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class InsertRemoveComponent {
  isShown = false;

  toggle() {
    this.isShown = !this.isShown;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
