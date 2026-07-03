import { Injectable } from '@angular/core';

declare const gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  trackEvent(eventName: string, category: string): void {
    if (typeof gtag === 'function') {
      gtag('event', eventName, {
        event_category: category
      });
    }
  }
}