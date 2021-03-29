import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsodComponent } from './bsod.component';

describe('BsodComponent', () => {
  let component: BsodComponent;
  let fixture: ComponentFixture<BsodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
