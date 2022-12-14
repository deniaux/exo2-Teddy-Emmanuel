import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarwarsIIIComponent } from './starwars-iii.component';

describe('StarwarsIIIComponent', () => {
  let component: StarwarsIIIComponent;
  let fixture: ComponentFixture<StarwarsIIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarwarsIIIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarwarsIIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
