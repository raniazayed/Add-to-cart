import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopinglistComponent } from './shopinglist.component';

describe('ShopinglistComponent', () => {
  let component: ShopinglistComponent;
  let fixture: ComponentFixture<ShopinglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopinglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
