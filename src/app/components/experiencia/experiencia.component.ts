import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent {
  @Input() experiencia: any; // Input para recibir la información de experiencia laboral desde el componente padre
}
