import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaligneverteComponent } from './laligneverte.component';

describe('LaligneverteComponent', () => {
  let component: LaligneverteComponent;
  let fixture: ComponentFixture<LaligneverteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaligneverteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaligneverteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
