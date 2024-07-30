import { Component } from '@angular/core';

@Component({
  selector: 'app-console-footer',
  templateUrl: './console-footer.component.html',
  styleUrl: './console-footer.component.scss'
})
export class ConsoleFooterComponent {

  date = new Date().getFullYear();

}
