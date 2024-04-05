import { Component, HostListener, Renderer2} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-principal-screen',
  templateUrl: './principal-screen.component.html',
  styleUrls: ['./principal-screen.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('0.5s', style({ transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateY(0)' }),
        animate('0.5s', style({ transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class PrincipalScreenComponent {

  showSlide1Content: boolean = true;
  lightStyle: any = {};
  progressBarWidth: number = 0;

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
      background: `radial-gradient(circle, rgba(255, 255, 255, ${brightness}), transparent)`
    };
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    this.progressBarWidth = (scrollPosition / totalHeight) * 100;



    this.progressBarWidth = (scrollPosition / totalHeight) * 100;
  }
  
}
