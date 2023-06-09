import { Injectable } from '@angular/core';
import {
  Observable,
  of,
  timer,
  map,
  BehaviorSubject,
  take,
  Subject,
} from 'rxjs';
import { delay } from 'rxjs/operators';
import { Post } from '../models/index';

interface Estado {
  user: string;
  userImg?: string;
  puesto: string;
  texto: string;
  fecha: Date;
  image?: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostServiceService {
  estadoPreestablecido: Estado | undefined;
  private datosDialogo = new BehaviorSubject<any>(null);

  private posts: Estado[] = [
    {
      user: 'Sandra Rodriguez',
      puesto: 'Doctor ',
      texto:
        '"La importancia del trabajo en equipo: alcanzando el éxito juntos. En el mundo empresarial de hoy, el trabajo en equipo se ha convertido en una habilidad esencial para lograr el éxito. Ya sea en una pequeña startup o en una gran corporación, el trabajo en equipo puede marcar la diferencia entre el éxito y el fracaso. Pero, ¿por qué es tan importante. En primer lugar, el trabajo en equipo fomenta la colaboración y la sinergia. Cuando las personas trabajan juntas hacia un objetivo común, combinando sus habilidades, conocimientos y perspectivas únicas, se generan ideas más creativas y se toman mejores decisiones. El trabajo en equipo permite aprovechar el poder colectivo y maximizar el potencial de cada individuo, creando un ambiente en el que todos pueden destacar. Además, el trabajo en equipo promueve la resolución de problemas de manera más efectiva. Al enfrentar desafíos, contar con un equipo sólido significa que hay más mentes pensantes y más habilidades para abordar diferentes aspectos del problema. La diversidad de opiniones y enfoques ayuda a identificar soluciones innovadoras y a superar obstáculos de manera más rápida y eficiente.',
      fecha: new Date('2023-05-15'),
      userImg: 'assets/user3.png',
      image: 'assets/post1.png',
    },
    {
      user: 'Emilia García',
      puesto: 'Lider de recursos humanos',
      texto:
        '"Negociando tu salario: Aprende a valorar tu trabajo y obtener lo que mereces 💼💰 En el mundo profesional, es fundamental reconocer el valor de nuestro trabajo y tener la confianza para negociar un salario justo. La negociación salarial puede ser un paso crucial en el crecimiento de tu carrera, pero también puede resultar intimidante si no sabes cómo abordarlo. Aquí hay algunos consejos para ayudarte a navegar con éxito este proceso:  1️⃣ Investiga y prepárate: Antes de comenzar la negociación, investiga el mercado y obtén información sobre los rangos salariales para tu posición y ubicación. Compara tus habilidades, experiencia y logros con los estándares del mercado para respaldar tus argumentos durante la negociación. Cuanta más información tengas, más seguro te sentirás al discutir tu salario. 2️⃣ Conoce tu valor: Reflexiona sobre tus logros y contribuciones pasadas en tu trabajo. Identifica los resultados destacados que has logrado y cómo has añadido valor a la empresa. Comprender tu valor te dará la confianza necesaria para expresar tus expectativas salariales de manera convincente. Recuerda, la negociación salarial es un proceso normal en el desarrollo de tu carrera. No tengas miedo de valorar tu trabajo y defender lo que mereces. ¡Buena suerte en tus futuras negociaciones salariales! 💪💼💰"',
      fecha: new Date('2023-05-17'),
      userImg: 'assets/user4.png',
      image: 'assets/post2.png',
    },
    {
      user: 'Alejandro Zapata',
      puesto: 'Senior DevOps',
      texto:
        '"Potenciando la productividad: Las herramientas tecnológicas en el entorno laboral 🚀💻 En la era digital en la que vivimos, las herramientas tecnológicas se han convertido en aliadas indispensables en el mundo laboral. Estas herramientas nos brindan la oportunidad de maximizar nuestra productividad, optimizar nuestras tareas y colaborar de manera eficiente. Permíteme compartir contigo algunas de las ventajas clave de las herramientas tecnológicas en el trabajo:  1️⃣ Comunicación y colaboración fluida: Las herramientas de comunicación, como el correo electrónico, las plataformas de mensajería y las videoconferencias, nos permiten conectarnos con colegas y equipos de trabajo en cualquier momento y lugar. Facilitan la colaboración en tiempo real, incluso si nos encontramos en diferentes ubicaciones geográficas, y agilizan la toma de decisiones al permitirnos compartir información de manera instantánea. 2️⃣ Gestión eficiente de tareas y proyectos: Las herramientas de gestión de tareas y proyectos, como las aplicaciones de seguimiento de proyectos, los tableros Kanban y los calendarios compartidos, nos ayudan a organizar nuestras actividades, establecer plazos y dar seguimiento al progreso de los proyectos. Estas herramientas nos permiten asignar tareas, establecer recordatorios y colaborar de manera más efectiva con nuestros compañeros de equipo.  3️⃣ Almacenamiento y compartición de información: Las soluciones de almacenamiento en la nube, como Google Drive, Dropbox y OneDrive, nos brindan la posibilidad de almacenar, organizar y acceder a nuestros documentos y archivos desde cualquier dispositivo con conexión a Internet. Esto simplifica la colaboración, ya que podemos compartir archivos fácilmente con otros miembros del equipo, evitando la confusión y el desorden de las versiones obsoletas.  4️⃣ Automatización de tareas rutinarias: Las herramientas de automatización, como los chatbots, los programas de gestión de clientes (CRM) y los sistemas de flujo de trabajo, nos permiten simplificar y agilizar tareas repetitivas. La automatización libera tiempo y recursos, lo que nos permite centrarnos en actividades más estratégicas y creativas, mejorando nuestra productividad y eficiencia.  5️⃣ Análisis y toma de decisiones basadas en datos: Las herramientas de análisis y visualización de datos, como hojas de cálculo avanzadas y tableros de control interactivos, nos brindan información valiosa sobre el desempeño de nuestros proyectos y procesos. Estos datos nos ayudan a tomar decisiones fundamentadas, identificar oportunidades de mejora y optimizar nuestras estrategias. En resumen, las herramientas tecnológicas han revolucionado la forma en que trabajamos, brindándonos la capacidad de ser más eficientes, colaborativos y estratégicos. Al abrazar estas herramientas y mantenernos actualizados con las últimas innovaciones, podemos potenciar nuestra productividad y destacar en un entorno laboral cada vez más competitivo. ¿Cuáles son tus herramientas tecnológicas favoritas en el trabajo? Comparte tus experiencias y recomendaciones en los comentarios. ¡Juntos',
      fecha: new Date('2023-05-08'),
      userImg: 'assets/user5.png',
      image: 'assets/post3.png',
    },
    {
      user: 'Andrés Parra',
      puesto: 'UI | UX Designer',
      texto:
        '"El Burnout: Un recordatorio de cuidar nuestra salud y bienestar en el trabajo 🌟💼 En el mundo laboral actual, enfrentamos desafíos y presiones constantes. Nos esforzamos por alcanzar metas ambiciosas, cumplir con plazos ajustados y equilibrar múltiples responsabilidades. En este contexto, el riesgo de experimentar burnout se vuelve cada vez más real. El burnout, un estado de agotamiento físico y emocional debido al estrés laboral crónico, no solo afecta nuestra salud y bienestar, sino también nuestra productividad y satisfacción en el trabajo. Es crucial que tomemos medidas para prevenir y abordar el burnout. Aquí hay algunos consejos clave:  1️⃣ Reconoce las señales: Es fundamental estar atentos a las señales tempranas de burnout, como la fatiga constante, la falta de motivación, la disminución del rendimiento, la irritabilidad y los cambios en los patrones de sueño. Si notas estos signos, no los ignores. Presta atención a tu bienestar y considera tomar medidas proactivas.  2️⃣ Establece límites y equilibrio: A menudo, el burnout surge cuando nos entregamos por completo al trabajo sin tiempo para descansar y recargar nuestras energías. Establecer límites saludables es esencial. Asegúrate de tener tiempo para actividades de autocuidado, como ejercicio, tiempo con la familia y amigos, y actividades que te apasionen. Cultiva un equilibrio entre tu vida personal y laboral para evitar el agotamiento. Recordemos que nuestra salud y bienestar son fundamentales para nuestro éxito profesional a largo plazo. No sacrifiquemos nuestra felicidad y salud en aras de la productividad. Al cuidarnos a nosotros mismos, podemos desempeñarnos mejor, ser más creativos y disfrutar de una vida laboral más plena y satisfactoria.',
      fecha: new Date('2023-05-07'),
      userImg: 'assets/user6.png',
      image: 'assets/post4.png',
    },
    {
      user: 'Adrian Urrego',
      puesto: 'Profesor universitario',
      texto:
        '"Descubre los beneficios de trabajar al aire libre: ¡Desafía los límites de la oficina tradicional! 🌳💼 En un mundo en constante evolución, nuestras formas de trabajar también han experimentado transformaciones significativas. Una de las tendencias emergentes es la opción de trabajar en lugares exteriores, alejados de la oficina convencional. Trabajar al aire libre no solo nos permite romper la monotonía y explorar entornos naturales, sino que también brinda una serie de beneficios para nuestra productividad y bienestar. Aquí hay algunas razones para considerar trabajar fuera de casa: 1️⃣ Conexión con la naturaleza: Pasar tiempo al aire libre nos conecta con la belleza de la naturaleza y nos ayuda a recargar nuestras energías. Respirar aire fresco y disfrutar de la luz natural puede aumentar nuestra concentración, mejorar nuestro estado de ánimo y reducir el estrés. Además, los entornos naturales pueden estimular nuestra creatividad y promover una sensación de bienestar general.',
      fecha: new Date('2023-05-10'),
      userImg: 'assets/user7.png',
      image: 'assets/post5.png',
    },
  ];

  enviarDatos(datos: any) {
    this.datosDialogo.next(datos);
  }

  recibirDatos(): Observable<any> {
    return this.datosDialogo.asObservable();
  }

  getPosts(): Observable<Estado[]> {
    return of(this.posts);
  }
  agregarEstadoPreestablecido(estado: Estado) {
    this.estadoPreestablecido = estado;
  }
}
