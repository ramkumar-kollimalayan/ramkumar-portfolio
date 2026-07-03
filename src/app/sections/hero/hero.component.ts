import { ChangeDetectionStrategy, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';

interface Star {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  @ViewChild('cursorGlow') cursorGlow?: ElementRef<HTMLElement>;

  constructor(private analyticsService: AnalyticsService) { }

  stars: Star[] = Array.from({ length: 90 }, () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2.2 + 0.8,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 3
  }));

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const glow = this.cursorGlow?.nativeElement;

    if (!glow) return;

    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }

  trackEvent(eventName: string, category: string): void {
    this.analyticsService.trackEvent(eventName, category);
  }
}