import { Component, Input } from '@angular/core';
import { IExperience } from '../../interfaces/experience.interface';
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [ModalComponent],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.css'
})
export class ExperienceItemComponent {
  // Recibe la información de la experiencia laboral a mostrar
  @Input() experience!: IExperience;

  // Define si el modal está abierto o cerrado
  isModalOpen = false;

  /**
   * Abrir el modal
   */
  openModal(): void {
    this.isModalOpen = true;
  }

  /**
   * Cerrar el modal
   */
  closeModal(): void {
    this.isModalOpen = false;
  }
}
