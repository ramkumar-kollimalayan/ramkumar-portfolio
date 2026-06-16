import { Component } from '@angular/core';
import { CountUpDirective } from '../../shared/count-up.directive';

@Component({
  selector: 'app-projects',
  imports: [CountUpDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
