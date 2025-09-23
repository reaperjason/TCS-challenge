import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';
import { HeaderComponent } from './components/header/header.component';
import { OptionsMenuComponent } from './components/options-menu/options-menu.component';
import { ProductsFormSkeletonComponent } from './components/products-form-skeleton/products-form-skeleton.component';



@NgModule({
  declarations: [
    ConfirmationModalComponent,
    ErrorModalComponent,
    HeaderComponent,
    OptionsMenuComponent,
    ProductsFormSkeletonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
