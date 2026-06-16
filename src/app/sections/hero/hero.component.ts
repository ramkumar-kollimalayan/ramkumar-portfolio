import { Component, HostListener } from '@angular/core';

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
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  mouseX = 0;
  mouseY = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    const glow = document.querySelector('.cursor-glow') as HTMLElement;

    if (!glow) return;

    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }

  stars: Star[] = Array.from({ length: 90 }, () => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2.2 + 0.8,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 3
  }));
}