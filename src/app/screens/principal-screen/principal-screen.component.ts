import {
  AfterViewInit,
  Component,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
export class PrincipalScreenComponent implements OnInit, AfterViewInit {
  showSlide1Content: boolean = true;
  experienciaHover: any = null;
  proyectoHover: any = null;
  lightStyle: any = {};
  progressBarWidth: number = 0;
  // Crear timeline gsap
  timeline = gsap.timeline();
  timelineScroll = gsap.timeline({});

  // obtener todos los iframe
  iframes = document.getElementsByTagName('iframe');

  experiencias = [
    {
      fecha: '2024-Present',
      cargo: 'Add Astra - Fullstack Engineer',
      resumen:
        'Proficient Full Stack Programmer specializing in WordPress and PHP development.Skilled in improving workflows through Bash scripting and Gulp automation. Led creation of AI-powered chatbots, resulting in increased user engagement and successful launch of a newsub-brand.',
      tecnologias: ['PHP', 'Wordpress', 'Gulp', 'DialogFlow', 'AI', 'GPT'],
      opacity: 1,
    },
    {
      fecha: 'Jan 2023 - Dec 2023',
      cargo: 'CIIEC - Researcher',
      resumen:
        'Worked on the developed a Python tool to graphically analyze EEG records, providing an intuitive visualization of the most active brain regions. Leveraged libraries like Matplotlib and NumPy for efficient data visualization and manipulation.Implemented machine learning methods, including K-means, to cluster and identify behavior patterns in EEG readings. This automation enhanced the analysis process, improving efficiency and precision in interpreting EEG data.',
      tecnologias: ['Python', 'Matplotlib', 'NumPy', 'Machine Learning'],
      opacity: 1,
    },
    {
      fecha: 'Jan 2023 - Jul 2023',
      cargo: 'Mirai Innovation - Software Engineer - Osaka, Japan',
      resumen:
        'Implemented a platform using RTSP protocol, Python, and React for real-time visualization and remote control of a vehicle. This integration allowed users to monitor and operate the vehicle seamlessly. Developed an AI capable of predicting and following roads, enhancing the ease of vehicle operation. This innovation added a predictive element to the platform, allowing for smoother and more intuitive control of the vehicle.',
      tecnologias: ['Python', 'Computer Vision', 'Django', 'Flask', 'Arduino'],
      opacity: 1,
    },
  ];

  proyectos = [
    {
      id: 1,
      titulo: 'AWS-Deployed Rental Management Platform',
      videoUrl: 'https://youtu.be/ANkxRGvl1VY?si=nHEUM5AdOPyjvhjA',
      resumen:
        'Developed a comprehensive platform for a luxury car rental company, including a user-friendly interface for customers to browse and book vehicles. Integrated AWS services, including S3, Lambda, and API Gateway, to streamline the platform’s functionality. This deployment improved the platform’s scalability and performance, resulting in a 30% increase in user engagement.',
      link: 'https://armoredmex.com/',
      opacity: 1,
    },
    {
      id: 2,
      titulo: 'Animations',
      resumen:
        'A collection of animations created using CSS, JavaScript, and GSAP, including hover effects, loaders, and transitions.',
      link: 'https://github.com/subcero123/Animations',
      opacity: 1,
    },
    {
      id: 3,
      titulo: 'AI Road Tracking System',
      resumen:
        'Developed an AI capable of predicting and following roads. This innovation added a predictive element to the platform, allowing for smoother and more intuitive control of the vehicle.',
      link: 'https://www.canva.com/design/DAFoPqwZaHE/Ktgdi2DCIAFbPGVbL-cDjw/view?utm_content=DAFoPqwZaHE&utm_campaign=designshare&utm_medium=link&utm_source=editor',
      opacity: 1,
    },
  ];

  constructor(private renderer: Renderer2) {
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
    gsap.registerPlugin(ScrollTrigger);
  }

  // ngoninit
  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    this.animacionScroll();
    this.animacionEntrada();
    this.animarIframeScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    this.progressBarWidth = (scrollPosition / totalHeight) * 100;

    this.progressBarWidth = (scrollPosition / totalHeight) * 100;
  }

  hoverElementoProyecto(proyecto: any) {
    this.hoverProyecto(proyecto);

    if (proyecto) {
      // Buscar el iframe con el id del proyecto
      const iframe = document.querySelector(`#iframe-video--${proyecto.id}`);
      // Ocultamos todos los demás iframes
      for (let i = 0; i < this.iframes.length; i++) {
        if (this.iframes[i]) {
          this.iframes[i].style.display = 'none';
          if (this.iframes[i].id === `iframe-video--${proyecto.id}`) {
            this.iframes[i].style.display = 'block';
          }
        }
      }

    }
  }

  // Función para ajustar la opacidad cuando se entra en un elemento
  hoverElemento(experiencia: any) {
    this.experienciaHover = experiencia;
    this.setOpacity();
  }

  // Función para restablecer la opacidad cuando se sale del elemento
  resetOpacity(proyecto?: any) {
    this.experienciaHover = null;
    this.experiencias.forEach((experiencia) => {
      experiencia.opacity = 1; // Establece la opacidad a 1 si el elemento está en hover
    });
    this.proyectoHover = null;
    this.proyectos.forEach((proyecto) => {
      proyecto.opacity = 1; // Establece la opacidad a 1 si el elemento está en hover
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
    this.proyectos.forEach((proyecto) => {
      if (proyecto === this.proyectoHover) {
        proyecto.opacity = 1; // Establece la opacidad a 1 si el elemento está en hover
      } else {
        proyecto.opacity = 0.5; // Establece la opacidad a 0.5 si el elemento no está en hover
      }
    });
  }

  hoverProyecto(proyecto: any) {
    this.proyectoHover = proyecto;
    this.setOpacity();
  }

  animacionEntrada() {
    //Obtener los elementos hijo de name
    const letras = document.querySelectorAll('.name-japanese > *');
    const letrasRomaji = document.querySelectorAll('.name-romaji > *');
    // Obtener el .contenedor-titulos
    const contenedorTitulos = document.querySelector('.contenedor-titulos');

    // Loop para esta animacion

    this.timeline
      .from(letras, { display: 'none', stagger: 0.15, duration: 0.9 })
      .from(Array.from(letras).reverse(), {
        display: 'none',
        stagger: 0.15,
        duration: 0.9,
      })
      .from(
        letrasRomaji,
        { display: 'none', stagger: 0.1, duration: 0.3 },
        '-=.5'
      );
  }

  animacionScroll() {
    this.timelineScroll = gsap.timeline({
      scrollTrigger: {
        trigger: '.contenedor-titulos', // Elemento que se animará
        start: 'top top', // Cuando el elemento está en la parte superior del viewport
        end: 'bottom top', // Cuando el elemento está en la parte inferior del viewport
        scrub: true, // Hace que la animación esté vinculada al desplazamiento          // Opcional: agrega marcadores visuales para depuración
      },
    });

    // Obtener el .contenedor-titulos
    const contenedorTitulos = document.querySelector('.contenedor-titulos');
    this.timelineScroll.to(contenedorTitulos, {
      opacity: 0,
      duration: 1,
      y: 200,
      ease: 'power2.inOut',
    });

    // Obtener el .container-contact-me--inferior
    const containerContactMe = document.querySelector(
      '.container-contact-me--inferior'
    );
    gsap.from(containerContactMe, {
      opacity: 0,
      duration: 1,
      y: -200,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.slide-2', // Elemento que se animará
        start: '-36% top', // Cuando el elemento está en la parte superior del viewport
        end: 'top top', // Cuando el elemento está en la parte inferior del viewport
        scrub: true,
      },
    });
  }

  // animar iframe

  animarIframeScroll() {
    // Obtener el iframe
    const iframe = document.querySelector('iframe-video');
    // Obtener el .contenedor-iframe
    const contenedorIframe = document.querySelector('.contenedor-video');
    // Crear timeline
    const timeline = gsap.timeline();
    // Añadir animaciones

    gsap.from(contenedorIframe, {
      rotateY: 30,
      rotateX: 20,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.slide-2--especial', // Elemento que se animará
        start: 'top bottom', // Cuando el elemento está en la parte superior del viewport
        end: '50% top', // Cuando el elemento está en la parte inferior del viewport',
        // guias
        scrub: true,
      },
    });
  }

  animarIframeHover($event: any) {
    // Obtener cordeandas del mouse
    const x = $event.clientX;
    const y = $event.clientY;
    // Obtener el contenedor iframe
    const contenedorIframe = document.querySelector('.contenedor-video');

    // Hacer un transform en el contenedor iframe
    gsap.to(contenedorIframe, {
      rotateY: gsap.utils.mapRange(0, window.innerWidth, -15, 15, x * 3),
      rotateX: gsap.utils.mapRange(0, window.innerHeight, -15, 15, y * 2),
      duration: 0.5,
      ease: 'power2.out', // Opcional: suaviza la animación
    });
  }

  onFocus(event: any) {
    const target = event.target as HTMLElement;

    // Obtener .columna-2
    const columna2 = document.querySelector('.columna-2');
    // Cambiar su opacidad a 0.5
    gsap.to(columna2, { opacity: 0.5, duration: 0.2 });
    // Obtener about-me
    const aboutMe = document.querySelector('.about-me');
    // Cambiar su opacidad a 0.5
    gsap.to(aboutMe, { opacity: 0.5, duration: 0.1 });
  }

  // Función que se llama cuando el hover sale del elemento
  onLeave(event: Event): void {
    const target = event.target as HTMLElement;
    // Obtener .columna-2
    const columna2 = document.querySelector('.columna-2');
    // Cambiar su opacidad a 1
    gsap.to(columna2, { opacity: 1, duration: 0.2 });
    // Obtener about-me
    const aboutMe = document.querySelector('.about-me');
    // Cambiar su opacidad a 1
    gsap.to(aboutMe, { opacity: 1, duration: 0.2 });
  }
}
