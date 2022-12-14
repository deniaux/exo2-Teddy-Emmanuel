import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourverslefuturComponent } from './retourverslefutur.component';

describe('RetourverslefuturComponent', () => {
  let component: RetourverslefuturComponent;
  let fixture: ComponentFixture<RetourverslefuturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetourverslefuturComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetourverslefuturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
