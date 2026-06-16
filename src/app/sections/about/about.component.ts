import { Component } from '@angular/core';
import { CountUpDirective } from '../../shared/count-up.directive';

@Component({
  selector: 'app-about',
  imports: [CountUpDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
