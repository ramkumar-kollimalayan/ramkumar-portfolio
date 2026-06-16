import { Component } from '@angular/core';
import { CountUpDirective } from '../../shared/count-up.directive';

@Component({
  selector: 'app-stats',
   imports: [CountUpDirective],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss'
})
export class StatsComponent {

}
