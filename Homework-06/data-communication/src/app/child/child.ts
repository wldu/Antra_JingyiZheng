import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../interface/card';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {
  @Input() dataFromParent: Card | undefined;
  @Output() triggerParentEvent = new EventEmitter<number>();

  changeParentColor() {
    if (this.dataFromParent) {
      this.triggerParentEvent.emit(this.dataFromParent?.id);
      console.log('id: ', this.dataFromParent?.id);
    }
  }
}
