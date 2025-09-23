import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFormSkeletonComponent } from './products-form-skeleton.component';

describe('ProductsFormSkeletonComponent', () => {
  let component: ProductsFormSkeletonComponent;
  let fixture: ComponentFixture<ProductsFormSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsFormSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsFormSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
