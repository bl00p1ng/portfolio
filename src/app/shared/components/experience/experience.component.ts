import { Component } from '@angular/core';
import { ExperienceItemComponent } from "../experience-item/experience-item.component";
import { IExperience } from '../../interfaces/experience.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceItemComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: IExperience[] = [
    {
      date: "Diciembre 2022 - Actualidad",
      title: "Desarrollador Full Stack",
      company: "LICITARQ S.A.S",
      description: "Desarrollador Fullstack encargado de crear soluciones tecnológicas para optimizar procesos de contratación pública. Logré una reducción del 95% en tiempos de gestión documental mediante el desarrollo e implementación de una plataforma integral con Angular/Nest.js. Implementé integraciones clave entre sistemas de la empresa y la plataforma desarrollada, mejorando la trazabilidad y eficiencia operativa en todas las etapas de contratación.",
      link: "/experience/licitarq"
    },
  ];
}
