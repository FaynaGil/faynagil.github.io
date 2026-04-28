const translations = {
    en: {
      subtitle: "Digital Interaction & Multimedia Student",
      intro: "I am currently studying Digital Interaction Techniques and Multimedia. I am interested in web design, digital content creation, UI design and multimedia projects.",
      aboutTitle: "About me",
      aboutText: "I have experience in administrative work, social media management, basic website management and digital tools. I am organized, detail-oriented and motivated to continue developing my skills in digital and multimedia projects.",
      projectsTitle: "Projects",
      figmaTitle: "Figma Projects",
      figmaText: "UI and visual design projects created with Figma.",
      figmaLink: "View project",
      videoTitle: "Video & Content Creation",
      videoText: "Digital content and video projects published on my YouTube channel.",
      youtubeLink: "View YouTube channel",
      webTitle: "University Web Projects",
      webText: "Web and multimedia projects created during my studies.",
      githubLink: "View GitHub repositories",
      skillsTitle: "Skills",
      languages: "English: B1+ (B2 in progress)"
    },
  
    es: {
      subtitle: "Estudiante de Interacción Digital y Multimedia",
      intro: "Actualmente estudio Técnicas de Interacción Digital y Multimedia. Me interesan el diseño web, la creación de contenido digital, el diseño UI y los proyectos multimedia.",
      aboutTitle: "Sobre mí",
      aboutText: "Tengo experiencia en administración, gestión de redes sociales, gestión web básica y herramientas digitales. Soy organizada, detallista y estoy motivada para seguir desarrollando mis habilidades en proyectos digitales y multimedia.",
      projectsTitle: "Proyectos",
      figmaTitle: "Proyectos en Figma",
      figmaText: "Proyectos de diseño visual e interfaz creados con Figma.",
      figmaLink: "Ver proyecto",
      videoTitle: "Vídeo y creación de contenido",
      videoText: "Proyectos de contenido digital y vídeo publicados en mi canal de YouTube.",
      youtubeLink: "Ver canal de YouTube",
      webTitle: "Proyectos web universitarios",
      webText: "Proyectos web y multimedia realizados durante mis estudios.",
      githubLink: "Ver repositorios en GitHub",
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
    document.getElementById("github-link").textContent = translations[lang].githubLink;
    document.getElementById("skills-title").textContent = translations[lang].skillsTitle;
    document.getElementById("languages").textContent = translations[lang].languages;
  }
  