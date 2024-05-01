import { Component, HostListener, Renderer2 } from '@angular/core';
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
export class PrincipalScreenComponent {
  showSlide1Content: boolean = true;
  experienciaHover: any = null;
  lightStyle: any = {};
  progressBarWidth: number = 0;
  // Crear timeline gsap
  timeline = gsap.timeline();

  experiencias = [
    {
      fecha: '2024-Present',
      cargo: 'Add Astra - Fullstack Engineer',
      resumen: 'Proficient Full Stack Programmer specializing in WordPress and PHP development.Skilled in improving workflows through Bash scripting and Gulp automation. Led creation of AI-powered chatbots, resulting in increased user engagement and successful launch of a newsub-brand.',
      tecnologias: ['PHP', 'Wordpress', 'Gulp', 'DialogFlow', 'Twilio', 'AI', 'GPT', 'Sales'],
      opacity: 1
    },
    {
      fecha: 'Jan 2023 - Dec 2023',
      cargo: 'CIIEC - Researcher',
      resumen: 'Worked on the developed a Python tool to graphically analyze EEG records, providing an intuitive visualization of the most active brain regions. Leveraged libraries like Matplotlib and NumPy for efficient data visualization and manipulation.Implemented machine learning methods, including K-means, to cluster and identify behavior patterns in EEG readings. This automation enhanced the analysis process, improving efficiency and precision in interpreting EEG data.',
      tecnologias: ['Python', 'Matplotlib', 'NumPy', 'Machine Learning'],
      opacity: 1
    },
    {
      fecha: 'Jan 2023 - Jul 2023',
      cargo: 'Mirai Innovation - Software Engineer - Osaka, Japan',
      resumen: 'Implemented a platform using RTSP protocol, Python, and React for real-time visualization and remote control of a vehicle. This integration allowed users to monitor and operate the vehicle seamlessly. Developed an AI capable of predicting and following roads, enhancing the ease of vehicle operation. This innovation added a predictive element to the platform, allowing for smoother and more intuitive control of the vehicle.',
      tecnologias: ['Python', 'React', 'AI', 'Computer Vision', 'Django', 'Flask', 'Arduino'],
      opacity: 1
    },
  ];

  constructor(private renderer: Renderer2) {
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
    gsap.registerPlugin(ScrollTrigger);
  }

  // ngoninit
  ngOnInit() {
    this.animacionEntrada();
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

  animacionEntrada(){
    //Obtener los elementos hijo de name
    const letras = document.querySelectorAll('.name-japanese > *');
    const letrasRomaji = document.querySelectorAll('.name-romaji > *');



    // Loop para esta animacion
    
    this.timeline
    .from(letras, { display: "none", stagger: 0.15, duration: .9})
    .from(Array.from(letras).reverse(), { display: "none", stagger: 0.15, duration: .9})
    .from(letrasRomaji, { display: "none", stagger: 0.1, duration: 0.3}, "-=.5")
  }
}
