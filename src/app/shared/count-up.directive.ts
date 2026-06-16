import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  @Input() endValue = 0;
  @Input() duration = 1200;
  @Input() suffix = '';

  private observer?: IntersectionObserver;
  private hasAnimated = false;

  constructor(private el: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    this.el.nativeElement.textContent = `0${this.suffix}`;

    this.observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animate();
          this.observer?.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private animate(): void {
    const startTime = performance.now();

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / this.duration, 1);

      const value = Math.floor(progress * this.endValue);
      this.el.nativeElement.textContent = `${value}${this.suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        this.el.nativeElement.textContent = `${this.endValue}${this.suffix}`;
      }
    };

    requestAnimationFrame(update);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}