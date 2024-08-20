import { Component, Input } from '@angular/core';
import { IExperience } from '../../interfaces/experience.interface';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.css'
})
export class ExperienceItemComponent {
  @Input() experience!: IExperience;
}
