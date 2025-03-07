// Hero Section
export const heroData = {
    greeting: "Hello, I'm",
    name: "Nithish Chandrasekaran",
    title: "Fullstack Developer & AI Engineer",
    description: "I build intelligent applications that combine modern web technologies with cutting-edge AI capabilities. Specializing in machine learning, data science, and full-stack development.",
    buttons: {
      primary: {
        text: "View My Work",
        link: "#projects"
      },
      secondary: {
        text: "Contact Me",
        link: "#contact"
      }
    }
  };
  
  // About Section
  export const aboutData = {
    title: "About Me",
    description: "Get to know more about my experience as a fullstack developer and AI engineer.",
    bio: [
      "I'm a Software Engineer with 2 years of industry experience in financial services, specializing in backend development with Python. Successfully streamlined a high-performance web application, improving response time by 50%, and implemented micro-services to optimize workload.",
      "A quick learner and team player, I'm always eager to take on new challenges.My unique combination of skills allows me to create end-to-end solutions that incorporate machine learning models, data processing pipelines, and intuitive user interfaces."
    ],
    certifications: [
      {
        name: "Python for Data Science",
        issuer: "NPTEL",
        link: "#credential-link"
      }
    ],
    buttons: {
      cv: {
        text: "Download CV",
        link: "/Resume.pdf"
      },
      contact: {
        text: "Let's Talk",
        link: "#contact"
      }
    },
    avatar: "/DSC_0353.JPG"
  };
  
  // Projects Section
  export const projectsData = {
    title: "My Projects",
    description: "Here are some of my recent projects. Each project is unique and showcases different skills and technologies."
  };
  
  // Skills Section
  export const skillsData = {
    title: "My Skills",
    description: "As both a fullstack developer and AI engineer, I work with a diverse set of technologies to build intelligent applications."
  };
  
  // Contact Section
  export const contactData = {
    title: "Get In Touch",
    description: "Have a project in mind or want to collaborate? Feel free to reach out and I'll get back to you as soon as possible.",
    intro: "Fill out the form and I'll be in touch as soon as possible. You can also reach me directly using the contact information below.",
    contactInfo: [
      {
        icon: "lucide:mail",
        title: "Email",
        value: "john.doe@example.com",
        link: "mailto:john.doe@example.com"
      },
      {
        icon: "lucide:phone",
        title: "Phone",
        value: "+1 (555) 123-4567",
        link: "tel:+15551234567"
      },
      {
        icon: "lucide:map-pin",
        title: "Location",
        value: "San Francisco, CA",
        link: "https://maps.google.com/?q=San+Francisco,+CA"
      }
    ],
    socialTitle: "Connect With Me",
    socialLinks: [
      { icon: "lucide:github", link: "https://github.com", color: "#333" },
      { icon: "lucide:linkedin", link: "https://linkedin.com", color: "#0077B5" },
      { icon: "lucide:twitter", link: "https://twitter.com", color: "#1DA1F2" },
      { icon: "lucide:instagram", link: "https://instagram.com", color: "#E4405F" }
    ],
    formLabels: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Send Message",
      success: "Message Sent!",
      successMessage: "Thank you for reaching out. I'll get back to you as soon as possible."
    }
  };
  
  // Navigation
  export const navigationData = {
    brand: "NC",
    links: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Skills", href: "#skills" },
      { name: "Contact", href: "#contact" }
    ],
    ctaButton: {
      text: "Get In Touch",
      href: "#contact"
    }
  };
  
  // Footer
  export const footerData = {
    brand: "NC",
    copyright: "All rights reserved.",
    tagline: "Designed and built with React, Tailwind CSS, and HeroUI"
  };
  