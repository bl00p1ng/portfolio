import { Component } from '@angular/core';
import { BadgeComponent } from "../../badge/badge/badge.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
