import { Component } from '@angular/core';
import { CountUpDirective } from '../../shared/count-up.directive';

@Component({
  selector: 'app-creative-work',
  imports: [CountUpDirective],
  templateUrl: './creative-work.component.html',
  styleUrl: './creative-work.component.scss'
})
export class CreativeWorkComponent {

}
