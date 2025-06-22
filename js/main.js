document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  try {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    const intervalTime = 5000; // 5 seconds

    function showItem(index) {
      items.forEach((item, i) => {
        item.style.display = i === index ? 'flex' : 'none';
      });
    }

    function nextItem() {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
    }

    if (items.length) {
      showItem(currentIndex);
      let carouselInterval = setInterval(nextItem, intervalTime);

      carousel.addEventListener('mouseenter', () => clearInterval(carouselInterval));
      carousel.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(nextItem, intervalTime);
      });
    }
  } catch (error) {
    console.error('Carousel failed to initialize:', error);
  }

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
