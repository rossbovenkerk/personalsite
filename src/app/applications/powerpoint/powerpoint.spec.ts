import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Powerpoint } from './powerpoint';

describe('Powerpoint', () => {
  let component: Powerpoint;
  let fixture: ComponentFixture<Powerpoint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Powerpoint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Powerpoint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
