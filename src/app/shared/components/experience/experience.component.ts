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
      link: "/experience/licitarq",
      logo: "/assets/images/licitarq_logo.png",
      fullTitle: "Desarrollador Fullstack",
      overview: "Participé el desarrollo e implementación de soluciones tecnológicas innovadoras para una empresa especializada en facilitar la contratación pública. Mis contribuciones abarcaron desde el desarrollo de aplicaciones fullstack hasta la creación de sistemas de análisis de datos, resultando en mejoras significativas en eficiencia operativa y expansión del negocio.",
      achievements: [
        {
          title: "Aplicación Fullstack de Gestión de Contrataciones",
          details: [
            "Desarrollé una plataforma integral utilizando Angular, Nest.js y Firestore.",
            "Reduje en un 95% el tiempo de procesamiento de documentación para contrataciones públicas.",
            "Mejoré significativamente la gestión de clientes, entidades y procesos de contratación."
          ]
        },
        {
          title: "Integración de Sistemas y Mejora de Procesos",
          details: [
            "Implementé integraciones entre la nueva aplicación y el sistema de seguimiento basado en Notion.",
            "Optimicé la interoperabilidad entre diferentes procesos de la empresa.",
            "Mejoré la trazabilidad de los procesos de contratación en todas sus etapas."
          ]
        },
        {
          title: "Bot de Notificaciones para Clientes",
          details: [
            "Desarrollé un bot de Telegram utilizando Python y Firestore.",
            "Automaticé las notificaciones de procesos relevantes para los clientes.",
            "Integré el bot con el sistema de seguimiento para mejorar la visibilidad interna de las interacciones con clientes."
          ]
        },
        {
          title: "Sistema ELT para Análisis de Datos de Contratación",
          details: [
            "Diseñé e implementé un sistema ELT utilizando Python, Google Cloud Functions, Pub/Sub, Cloud Scheduler y BigQuery.",
            "Optimicé los costos de operación mediante un diseño eficiente basado en la nube.",
            "Automaticé la generación y envío de reportes PDF personalizados a clientes."
          ]
        },
        {
          title: "Gestión de Infraestructura",
          details: [
            "Administré el despliegue y mantenimiento de aplicaciones en Firebase y Google Cloud Platform.",
            "Gestioné una VM Ubuntu en Google Cloud para alojar servicios backend."
          ]
        }
      ],
      businessImpact: [
        "Incrementé significativamente la eficiencia operativa de la empresa.",
        "Contribuí al lanzamiento exitoso de una nueva línea de negocio basada en análisis de datos.",
        "Mejoré la satisfacción y retención de clientes mediante soluciones tecnológicas innovadoras."
      ],
      skills: [
        "Angular", "Nest.js", "Firestore", "Python", "Google Cloud Platform (Functions, Pub/Sub, Scheduler, BigQuery)",
        "Firebase", "Ubuntu", "Telegram Bot API", "Notion API", "Desarrollo Fullstack", "Arquitectura de Sistemas",
        "Integración de APIs", "Análisis de Datos", "Automatización de Procesos"
      ]
    }
  ];
}
