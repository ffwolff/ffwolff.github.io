document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a");
  
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
  
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("text-blue-600", "font-bold");
          if (link.getAttribute("href") === `#${section.id}`) {
            link.classList.add("text-blue-600", "font-bold");
          }
        });
      }
    });
  });
  
