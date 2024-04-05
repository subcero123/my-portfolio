import { Component, HostListener, Renderer2 } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-principal-screen',
  templateUrl: './principal-screen.component.html',
  styleUrls: ['./principal-screen.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.5s', style({ transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)' }),
        animate('0.5s', style({ transform: 'translateY(100%)' })),
      ]),
    ]),
  ],
})
export class PrincipalScreenComponent {
  showSlide1Content: boolean = true;
  experienciaHover: any = null;
  lightStyle: any = {};
  progressBarWidth: number = 0;

  experiencias = [
    {
      fecha: '2024-2025',
      cargo: 'Front end developer',
      resumen: 'FUI ASDASDASD',
      tecnologias: ['React', 'Angular'],
      opacity: 1
    },
    {
      fecha: '2022-2023',
      cargo: 'Back end developer',
      resumen: 'FUI QWEQWEQWE',
      tecnologias: ['Node.js', 'Express'],
      opacity: 1
    },
    // Agrega más objetos de experiencia laboral según sea necesario
  ];

  constructor(private renderer: Renderer2) {
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const offsetX = event.clientX;
    const offsetY = event.clientY;
    const brightness = 0.1; // Valor de brillo (ajustable según necesidades)

    this.lightStyle = {
      top: offsetY - 100 + 'px',
      left: offsetX - 100 + 'px',
      background: `radial-gradient(circle, rgba(255, 255, 255, ${brightness}), transparent)`,
    };
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    this.progressBarWidth = (scrollPosition / totalHeight) * 100;

    this.progressBarWidth = (scrollPosition / totalHeight) * 100;
  }

  // Función para ajustar la opacidad cuando se entra en un elemento
  hoverElemento(experiencia: any) {
    this.experienciaHover = experiencia;
    this.setOpacity();
  }

  // Función para restablecer la opacidad cuando se sale del elemento
  resetOpacity() {
    this.experienciaHover = null;
    this.experiencias.forEach((experiencia) => {
        experiencia.opacity = 1; // Establece la opacidad a 1 si el elemento está en hover
    });
  }

  // Función para establecer la opacidad de cada elemento
  setOpacity() {
    this.experiencias.forEach((experiencia) => {
      if (experiencia === this.experienciaHover) {
        experiencia.opacity = 1; // Establece la opacidad a 1 si el elemento está en hover
      } else {
        experiencia.opacity = 0.5; // Establece la opacidad a 0.5 si el elemento no está en hover
      }
    });
  }
}
