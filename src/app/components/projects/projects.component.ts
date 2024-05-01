import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @Input() proyectos: any; // Input para recibir la información de experiencia laboral desde el componente padre

}
