import { Component } from '@angular/core';
import { ModalService } from './core/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showErrorModal = false;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    // Suscríbete al estado del modal de errores
    this.modalService.errorModalState$.subscribe(state => {
      this.showErrorModal = state;
    });
  }

  closeErrorModal(): void {
    this.modalService.closeErrorModal();
  }
}
