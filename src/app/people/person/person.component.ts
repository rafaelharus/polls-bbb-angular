import { Component, Input } from '@angular/core';

@Component({
  selector: 'pb-person',
  templateUrl: 'person.component.html'
})
export class PersonComponent {
  @Input() id = '';
  @Input() name = '';
  @Input() photo = '';
}
