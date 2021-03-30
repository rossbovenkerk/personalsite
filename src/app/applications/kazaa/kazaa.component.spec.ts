import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KazaaComponent } from './kazaa.component';

describe('KazaaComponent', () => {
  let component: KazaaComponent;
  let fixture: ComponentFixture<KazaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KazaaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KazaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
