import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'david';
  currentClass: string = 'toolbar';

  setClass(color: string): void {
    this.currentClass = color;
  }
}
