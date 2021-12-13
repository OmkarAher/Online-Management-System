import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchproductbykeyComponent } from './searchproductbykey.component';

describe('SearchproductbykeyComponent', () => {
  let component: SearchproductbykeyComponent;
  let fixture: ComponentFixture<SearchproductbykeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchproductbykeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchproductbykeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
