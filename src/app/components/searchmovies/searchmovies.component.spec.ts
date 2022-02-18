import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmoviesComponent } from './searchmovies.component';

describe('SearchmoviesComponent', () => {
  let component: SearchmoviesComponent;
  let fixture: ComponentFixture<SearchmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchmoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
