import { Component,Input } from '@angular/core';

@Component({
  selector: 'dropdown',
  imports: [],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.css'
})
export class Dropdown {
  @Input() name: string = "dropdown";
  isHovered: boolean = false;
  @Input() options: string[] = [];
}
