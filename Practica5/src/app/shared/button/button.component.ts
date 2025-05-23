import { Component, Input } from '@angular/core';

@Component({
  selector: 'Bbutton[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() icon!: string;
}
