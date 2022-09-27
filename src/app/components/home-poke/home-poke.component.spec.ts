import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePokeComponent } from './home-poke.component';

describe('HomePokeComponent', () => {
  let component: HomePokeComponent;
  let fixture: ComponentFixture<HomePokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
