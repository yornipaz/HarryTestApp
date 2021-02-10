import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMenberComponent } from './card-menber.component';

describe('CardMenberComponent', () => {
  let component: CardMenberComponent;
  let fixture: ComponentFixture<CardMenberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMenberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMenberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
