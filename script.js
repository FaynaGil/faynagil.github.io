const translations = {
    en: {
      subtitle: "Digital Interaction & Multimedia Student",
      intro: "I am currently finishing my degree in Digital Interaction and Multimedia, with 4 subjects and my final project remaining. I am interested in UI/UX design, web development and digital content creation.",
      aboutTitle: "About me",
      aboutText: "I also have a strong interest in understanding how businesses work, analysing processes and exploring how technology can improve them. Additionally, I value teamwork and workplace well-being, and I enjoy contributing to positive and organized work environments.",
      projectsTitle: "Projects",
      figmaTitle: "Figma Projects",
      figmaText: "UI and visual design projects created with Figma.",
      figmaLink: "View project",
      videoTitle: "Video & Content Creation",
      videoText: "Digital content and video projects published on my YouTube channel.",
      youtubeLink: "View YouTube channel",
      webTitle: "University Projects",
      webText: "Multimedia projects created during my studies.",
      multimediaLink: "View multimedia projets",
      skillsTitle: "Skills",
      languages: "English: B1+ (B2 in progress)"
    },
  
    es: {
      subtitle: "Estudiante de Interacción Digital y Multimedia",
      intro: "Actualmente estoy finalizando el grado de Interacción Digital y Multimedia, con 4 asignaturas y el TFG pendientes. Me interesa el diseño UI/UX, el desarrollo web y la creación de contenido digital.",
      aboutTitle: "Sobre mí",
      aboutText: "También tengo interés en comprender cómo funcionan las empresas, analizar procesos y ver cómo la tecnología puede ayudar a mejorarlos. Además, valoro el trabajo en equipo y el bienestar laboral, y me gusta contribuir a entornos de trabajo organizados y positivos.",
      projectsTitle: "Proyectos",
      figmaTitle: "Proyectos en Figma",
      figmaText: "Proyectos de diseño visual e interfaz creados con Figma.",
      figmaLink: "Ver proyecto",
      videoTitle: "Vídeo y creación de contenido",
      videoText: "Proyectos de contenido digital y vídeo publicados en mi canal de YouTube.",
      youtubeLink: "Ver canal de YouTube",
      webTitle: "Proyectos universitarios",
      webText: "Proyectos multimedia realizados durante mis estudios.",
      multimediaLink: "Ver proyectos multimeda",
      skillsTitle: "Conocimientos",
      languages: "Inglés: B1+ (B2 en progreso)"
    }
  };
  
  function setLanguage(lang) {
    document.getElementById("subtitle").textContent = translations[lang].subtitle;
    document.getElementById("intro").textContent = translations[lang].intro;
    document.getElementById("about-title").textContent = translations[lang].aboutTitle;
    document.getElementById("about-text").textContent = translations[lang].aboutText;
    document.getElementById("projects-title").textContent = translations[lang].projectsTitle;
    document.getElementById("figma-title").textContent = translations[lang].figmaTitle;
    document.getElementById("figma-text").textContent = translations[lang].figmaText;
    document.getElementById("figma-link").textContent = translations[lang].figmaLink;
    document.getElementById("video-title").textContent = translations[lang].videoTitle;
    document.getElementById("video-text").textContent = translations[lang].videoText;
    document.getElementById("youtube-link").textContent = translations[lang].youtubeLink;
    document.getElementById("web-title").textContent = translations[lang].webTitle;
    document.getElementById("web-text").textContent = translations[lang].webText;
    document.getElementById("multimedia-link").textContent = translations[lang].multimediaLink;
    document.getElementById("skills-title").textContent = translations[lang].skillsTitle;
    document.getElementById("languages").textContent = translations[lang].languages;
  }