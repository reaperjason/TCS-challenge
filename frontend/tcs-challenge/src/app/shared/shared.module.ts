import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';
import { HeaderComponent } from './components/header/header.component';
import { OptionsMenuComponent } from './components/options-menu/options-menu.component';



@NgModule({
  declarations: [
    ConfirmationModalComponent,
    ErrorModalComponent,
    HeaderComponent,
    OptionsMenuComponent,
  ],
  imports: [
    CommonModule
  ],
    exports: [
    HeaderComponent,
    OptionsMenuComponent,
    ConfirmationModalComponent,
    ErrorModalComponent
  ]
})
export class SharedModule { }
