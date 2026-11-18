(function(){
const EN={
/* menú y portada */
"Inicio":"Home","Sobre mí":"About me","Habilidades":"Skills","Certificaciones":"Certifications","Experiencia":"Experience","Proyectos":"Projects","Contacto":"Contact",
"Portafolio de informática y ciberseguridad":"Computer science and cybersecurity portfolio",
"Me muevo entre":"I move between",
"Estudiante de Informática en la Universidad de Panamá. Construyo proyectos web y estoy aprendiendo ciberseguridad. 🦊":"Computer science student at the University of Panama. I build web projects and I’m learning cybersecurity. 🦊",
"Ver proyectos":"View projects","Contáctame":"Contact me","Ver mi CV":"View my CV",
"Vibras para calmarme":"Vibes to calm me down",
"Toca al zorrito":"Tap the little fox",

/* sobre mí */
"Soy estudiante de Informática para la Gestión Educativa y Empresarial en la Universidad de Panamá, con experiencia desarrollando aplicaciones web, desde el frontend hasta la integración de bases de datos y plataformas IoT.":"I’m a Computer Science for Educational and Business Management student at the University of Panama, with experience building web applications, from the frontend to database and IoT platform integration.",
"Me apasiona la tecnología y todo lo relacionado con el aprendizaje y la innovación. Siempre estoy en modo aprendizaje y disfruto explorar las distintas áreas del mundo tecnológico. Nunca le digo que no a un curso, capacitación o experiencia que me permita ampliar mis conocimientos, especialmente en informática, desarrollo de software y ciberseguridad.":"I’m passionate about technology and everything related to learning and innovation. I’m always in learning mode and I enjoy exploring the different areas of the tech world. I never say no to a course, training or experience that lets me expand my knowledge, especially in computer science, software development and cybersecurity.",
"Me gusta explorar nuevas herramientas y convertir lo aprendido en proyectos y soluciones prácticas. He construido proyectos propios como MIPA (rastreo de transporte en tiempo real) y Sendero del Saber (plataforma educativa gamificada), además de mi experiencia freelance desarrollando el sitio web institucional de CONAC. Mi interés está en el desarrollo web, las bases de datos y las tecnologías educativas.":"I like exploring new tools and turning what I learn into practical projects and solutions. I’ve built my own projects such as MIPA (real-time transport tracking) and Sendero del Saber (a gamified educational platform), plus freelance experience building CONAC’s institutional website. My interests are web development, databases and educational technology.",
"Más allá de la pantalla, disfruto la vida: compartir con mis amigos, reír, viajar y conocer nuevos lugares, y disfrutar cada etapa sin tomarme todo demasiado en serio. Ese equilibrio es lo que me mantiene motivada para seguir aprendiendo y creciendo. Siempre estoy abierta a conocer gente nueva, nuevos proyectos y nuevas oportunidades.":"Beyond the screen, I enjoy life: spending time with my friends, laughing, traveling and discovering new places, and enjoying every stage without taking everything too seriously. That balance keeps me motivated to keep learning and growing. I’m always open to meeting new people, new projects and new opportunities.",

/* habilidades */
"Lo que uso hoy y lo que quiero seguir aprendiendo.":"What I use today and what I want to keep learning.",
"Desarrollo web":"Web development","Programación y herramientas":"Programming and tools","Ciberseguridad":"Cybersecurity","DevOps y APIs":"DevOps and APIs","Bases de datos":"Databases",
"Hacking ético":"Ethical hacking","Buenas prácticas":"Best practices","Pruebas de API":"API testing",

/* certificaciones */
"Cursos, retos y capacitaciones que he completado.":"Courses, challenges and trainings I’ve completed.",
"Filtrar certificaciones":"Filter certifications",
"Todos":"All","Seminario":"Seminar","Competencias":"Competitions","Cursos":"Courses",
"★ Destacado":"★ Featured",
"Universidad del Futuro – Tendencias Pedagógicas":"University of the Future – Pedagogical Trends",
"Universidad de Panamá · 2026":"University of Panama · 2026",
"Seminario-Taller de 40 horas":"40-hour workshop seminar",
"Hackathon Copa Airlines – 7ª edición":"Copa Airlines Hackathon – 7th edition",
"DevOps, APIs y observabilidad":"DevOps, APIs and observability",
"OEA Cyber Challenge Panamá 2026":"OAS Cyber Challenge Panama 2026",
"Organización de los Estados Americanos · Oct 2026":"Organization of American States · Oct 2026",
"Certificado de finalización del curso":"Course completion certificate",
"Hacking Ético: de 0 a Hackear Aplicaciones":"Ethical Hacking: From 0 to Hacking Applications",
"Jornada de 6 horas sobre vulnerabilidades en aplicaciones":"6-hour session on application vulnerabilities",

/* experiencia */
"Proyectos reales y servicio a la comunidad.":"Real projects and community service.",
"Desarrolladora Web Freelance":"Freelance Web Developer",
"CONAC · Confederación Nacional de Asentamientos Campesinos de Panamá":"CONAC · National Confederation of Peasant Settlements of Panama",
"Freelance":"Freelance",
"Diseñé y desarrollé el sitio web institucional, incluyendo configuración como PWA.":"I designed and built the institutional website, including PWA setup.",
"Creé páginas dedicadas a los asentamientos regionales y gestioné contenido multimedia.":"I created pages for the regional settlements and managed multimedia content.",
"Elaboré un anexo fotográfico académico tras trabajo de campo en asentamientos de Veraguas.":"I produced an academic photo annex after fieldwork in settlements in Veraguas.",
"Maestra Voluntaria":"Volunteer Teacher",
"Escuela Llano Largo · La Chorrera, Panamá Oeste":"Llano Largo School · La Chorrera, West Panama",
"Servicio social · 120 horas":"Social service · 120 hours",
"Impartí clases a niños de educación primaria.":"I taught primary school children.",
"Diseñé y ejecuté actividades educativas.":"I designed and ran educational activities.",
"Preparé material didáctico digital utilizando Canva y PowerPoint.":"I prepared digital teaching materials using Canva and PowerPoint.",

/* proyectos */
"Trabajos propios y colaboraciones: qué hace cada uno y cómo lo construí.":"My own work and collaborations: what each one does and how I built it.",
"Filtrar proyectos":"Filter projects",
"Propios":"Own","Colaboración":"Collaboration","Proyecto propio":"Own project",
"Lenguajes":"Languages","Colaboradores":"Collaborators",
"Objetivo":"Goal","Implementación":"Implementation",
"Ver más":"Show more","Ver menos":"Show less",
"Ver proyecto":"View project","Ver código":"View code",
/* Sendero del Saber */
"Plataforma educativa para niños y niñas de Panamá, con cursos interactivos en islas de español, matemáticas, programación y lenguaje de señas, además de perfil, tienda y panel para padres.":"Educational platform for children in Panama, with interactive courses on Spanish, math, programming and sign language islands, plus a profile, a store and a parent dashboard.",
"Que los niños aprendan a su propio ritmo, jugando, en un espacio pensado para ellos, y que los padres puedan acompañar su avance.":"Let children learn at their own pace, through play, in a space designed for them, while parents can follow their progress.",
"Páginas en HTML5 y CSS, una por isla, con registro e inicio de sesión para estudiantes y padres (vinculados con un código) usando Supabase. Panel para padres, perfil, tienda y publicación en Netlify.":"HTML5 and CSS pages, one per island, with sign-up and login for students and parents (linked with a code) using Supabase. Parent dashboard, profile, store and deployment on Netlify.",
/* CONAC */
"Sitio informativo de varias páginas para la Confederación Nacional de Asentamientos Campesinos de Panamá.":"Multi-page informational website for the National Confederation of Peasant Settlements of Panama.",
"Organizar el acceso a la historia, actividades e información comunitaria de la organización.":"Organize access to the history, activities and community information of the organization.",
"Páginas de organización, asentamientos, campañas, galería y noticias; navegación móvil; diseño responsive; publicación en GitHub Pages.":"Pages for the organization, settlements, campaigns, gallery and news; mobile navigation; responsive design; published on GitHub Pages.",
/* Gimnasio Mental */
"Proyecto colaborativo del repositorio de 0bregon.":"Collaborative project from 0bregon’s repository.",
"Crear el sitio web de un centro de entrenamiento cognitivo para niños, que presenta sus programas de pensamiento analítico (Lógica Matemática, Comprensión Lectora y Algoritmos Básicos) y permite a los padres reservar en línea una evaluación diagnóstica gratuita, eligiendo programa, fecha y horario.":"Build the website of a cognitive training center for children, presenting its analytical-thinking programs (Mathematical Logic, Reading Comprehension and Basic Algorithms) and letting parents book a free diagnostic assessment online, choosing the program, date and time.",
"Sitio web multipágina con HTML, CSS y JavaScript puro. La página de inicio presenta los programas, beneficios y testimonios, y dirige a una página de agendamiento con formulario completo: datos del acudiente y del niño, programa de interés, fecha (con bloqueo de fechas pasadas) y horario disponible. Las reservas se guardan en una base de datos Supabase. Diseño responsive con menú móvil.":"Multi-page website built with plain HTML, CSS and JavaScript. The home page presents the programs, benefits and testimonials, and leads to a booking page with a full form: guardian and child details, program of interest, date (past dates are blocked) and available time slot. Bookings are saved in a Supabase database. Responsive design with a mobile menu.",

/* galería (ventana del zorrito) */
"Galería":"Gallery",
"Momentos que me gusta recordar.":"Moments I like to remember.",
"¿Quieres ver la galería?":"Want to see the gallery?","Ver galería":"View gallery",
"Toca al zorrito para ver la galería":"Tap the little fox to see the gallery",
"Abrir álbum":"Open album","Álbumes":"Albums",
"Universidad":"University",

/* contacto y pie */
"¿Quieres colaborar o conocer más de mi trabajo? Escríbeme.":"Want to collaborate or learn more about my work? Write to me.",
"Enviar correo":"Send email",
"La Chorrera, Panamá":"La Chorrera, Panama",
"Siempre abierta a aprender, colaborar y crecer ✨":"Always open to learning, collaborating and growing ✨",
"Volver al inicio":"Back to top",

/* botones y etiquetas */
"Cambiar tema":"Change theme","Menú":"Menu","Principal":"Main","Cerrar":"Close","Anterior":"Previous","Siguiente":"Next"
};
const ES={};for(const k in EN)ES[EN[k]]=k;
const WS=['desarrollo web','ciberseguridad','DevOps y APIs','hacking ético'],
      WE=['web development','cybersecurity','DevOps and APIs','ethical hacking'];
const q=s=>document.querySelector(s);
let lang='es';
window.trad=s=>(lang==='en'&&EN[s])?EN[s]:s;

/* estilo y botón (se crean solos) */
const st=document.createElement('style');
st.textContent='.tools{display:flex;gap:8px;align-items:center;justify-self:end}#lang{width:auto;padding:0 14px;font-weight:700;font-size:.85rem;letter-spacing:.04em}';
document.head.appendChild(st);
const th=q('#theme');
let tools=q('.tools');
if(!tools&&th){tools=document.createElement('div');tools.className='tools';th.parentNode.insertBefore(tools,th);tools.appendChild(th)}
let b=q('#lang');
if(!b){b=document.createElement('button');b.className='ib';b.id='lang';b.textContent='EN';b.setAttribute('aria-label','Switch to English');
  if(tools)tools.insertBefore(b,th);else document.body.appendChild(b)}

function tr(s,map){
  const t=s.replace(/\s+/g,' ').trim();if(!t)return null;
  if(map[t])return map[t];
  if(t.includes(' — ')){const r=t.split(' — ').map(x=>map[x]||x).join(' — ');return r!==t?r:null}
  return null;
}
function run(root){
  const map=lang==='en'?EN:ES,w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;
  while(n=w.nextNode()){
    if(n.parentNode.closest('script,style,#ty'))continue;
    const r=tr(n.nodeValue,map);
    if(r!==null)n.nodeValue=n.nodeValue.match(/^\s*/)[0]+r+n.nodeValue.match(/\s*$/)[0];
  }
  const els=[...root.querySelectorAll('[aria-label],[title]')];
  if(root.matches&&root.matches('[aria-label],[title]'))els.push(root);
  els.forEach(e=>['aria-label','title'].forEach(a=>{const v=e.getAttribute(a);if(v&&map[v])e.setAttribute(a,map[v])}));
}
/* contenido que aparece después (ventanas, tarjetas, "Ver más / Ver menos") */
new MutationObserver(ms=>{
  if(lang!=='en')return;
  ms.forEach(m=>m.addedNodes.forEach(x=>{
    if(x.nodeType===1)run(x);
    else if(x.nodeType===3&&x.parentNode&&!x.parentNode.closest('script,style,#ty')){
      const r=tr(x.nodeValue,EN);
      if(r!==null)x.nodeValue=x.nodeValue.match(/^\s*/)[0]+r+x.nodeValue.match(/\s*$/)[0];
    }
  }));
}).observe(document.body,{childList:true,subtree:true});

function set(l){
  lang=l;document.documentElement.lang=l;
  if(typeof W!=='undefined'){W.length=0;W.push(...(l==='en'?WE:WS))}
  run(document.body);
  b.textContent=l==='en'?'ES':'EN';
  b.setAttribute('aria-label',l==='en'?'Cambiar a español':'Switch to English');
  try{localStorage.setItem('lang',l)}catch(e){}
  document.dispatchEvent(new Event('idioma'));
}
b.addEventListener('click',()=>set(lang==='es'?'en':'es'));
try{if(localStorage.getItem('lang')==='en')set('en')}catch(e){}
})();
