import { ComponentFixture, TestBed } from '@angular/core/testing';

import { creative-workComponent } from './creative-work.component';

describe('creative-workComponent', () => {
  let component: creative-workComponent;
  let fixture: ComponentFixture<creative-workComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [creative-workComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(creative-workComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
