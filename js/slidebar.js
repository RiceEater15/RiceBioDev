function animateSkills() {
    const fills = document.querySelectorAll('.fill');
    fills.forEach(fill => {
      const target = fill.getAttribute('data-fill');
      const top = fill.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) {
        fill.style.width = target;
      }
    });
  }

  window.addEventListener('scroll', animateSkills);
  window.addEventListener('load', animateSkills);

