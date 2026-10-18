# Currículum examen
---
## Datos
- **Nombre Completo:** Sergio Alejandro Trigo Murillo
- **Carrera:** Ingeniería de Sistemas
- **Institución:** Universidad Católica Boliviana "San Pablo"
- **Ubicación:** La Paz, Bolivia
- **Correo Institucional:** sergio.trigo754@gmail.com / sergio.trigo.m@ucb.edu.bo

---

##Estructura del Proyecto

```text
Examen-tecno/
│
├── index.html              # Vista principal: Perfil, Experiencia, Habilidades y API
├── contacto.html           # Vista secundaria: Formulario interactivo de comunicación
│
├── css/
│   └── styles.css          # Hoja de estilos centralizada (Mobile-First, Grid y Flexbox)
│
├── js/
│   ├── theme.js            # Conmutador de Tema (Dark/Light) con persistencia JSON
│   ├── menu.js             # Control accesible WAI-ARIA del menú colapsable
│   ├── filter.js           # Filtrado en tiempo real con pipeline inmutable (.filter/.map)
│   ├── validation.js       # Validación en cliente y retroalimentación reactiva
│   └── github_api.js       # Integración asíncrona REST con Fetch API (GitHub)
│
├── image/
│   └── Foto.jpeg           # Fotografía profesional de perfil
│
└── README.md               # Documentación técnica del proyecto

 Checklist de Verificación Pre-Entrega
Previo al envío definitivo en la plataforma, el estudiante debe autoevaluar su trabajo verificando cada uno de los siguientes puntos:
[x] ¿El marcado HTML5 incluye las etiquetas semánticas estructurales obligatorias (<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>) y atributos WAI-ARIA?
[x] ¿El diseño implementa una estrategia Mobile-First adaptativa mediante Media Queries explícitas para móvil (<768px), tablet (768px-1024px) y escritorio (>1024px) combinando Flexbox y CSS Grid?
[x] ¿El conmutador de tema (Dark/Light Mode) persiste la preferencia del usuario en localStorage serializando los datos con JSON.stringify() y JSON.parse()?
[x] ¿El menú hamburguesa funciona dinámicamente en dispositivos móviles gestionando eventos click y mutando el atributo aria-expanded?
[x] ¿El filtro dinámico o buscador en tiempo real garantiza la inmutabilidad de los datos y utiliza la tubería funcional .filter() y .map()?
[x] ¿El formulario de contacto intercepta el ciclo de vida del evento submit con event.preventDefault(), valida datos en tiempo real con input y no recarga la página?
[x] ¿El módulo asíncrono consume una API REST externa usando Fetch API y async/await, con validación de response.ok, manejo de errores en try/catch y estados de interfaz (loading, success, error)?
[x] ¿El proyecto está desplegado, operativo y accesible públicamente sin errores de carga de archivos en GitHub Pages?
[x] ¿El repositorio en GitHub es público, posee un historial de conmutaciones (commits) constante y contiene un archivo README.md técnico profesional?
