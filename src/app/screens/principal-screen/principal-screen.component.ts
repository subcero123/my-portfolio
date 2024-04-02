import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-principal-screen',
  templateUrl: './principal-screen.component.html',
  styleUrls: ['./principal-screen.component.scss'],
})
export class PrincipalScreenComponent {

  lightStyle: any = {};


  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const offsetX = event.clientX;
    const offsetY = event.clientY;
    const brightness = 0.2; // Valor de brillo (ajustable según necesidades)

    this.lightStyle = {
      top: offsetY - 150 + 'px',
      left: offsetX - 150 + 'px',
      background: `radial-gradient(circle, rgba(255, 255, 255, ${brightness}), transparent)`
    };
  }
  
}
