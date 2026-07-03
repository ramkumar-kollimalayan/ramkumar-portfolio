import { Component } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  currentYear = new Date().getFullYear();

  constructor(private analyticsService: AnalyticsService) { }

  trackEvent(eventName: string, category: string): void {
    this.analyticsService.trackEvent(eventName, category);
  }
}