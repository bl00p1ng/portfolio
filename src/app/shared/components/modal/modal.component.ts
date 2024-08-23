import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IExperience } from '../../interfaces/experience.interface';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() experience!: IExperience;
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();

  /**
   * Cerrar modal
   */
  close(): void {
    this.closeModal.emit();
  }
}
