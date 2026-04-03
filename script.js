 // ===== MOBILE MENU TOGGLE =====
  const menuToggle = document.getElementById('mobile-menu');
  const navList = document.getElementById('nav-list');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
    });
  }

  // ===== NAV LINKS SMOOTH SCROLL =====
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if (navList.classList.contains('active')) {
        navList.classList.remove('active');
      }
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 70;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }
    });
  });

  // ===== CONTACT FORM VALIDATION + FormSubmit =====
  const contactForm = document.getElementById('contactForm');
  const feedbackPara = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const nameVal = document.getElementById('name').value.trim();
      const emailVal = document.getElementById('email').value.trim();
      const msgVal = document.getElementById('message').value.trim();

      if (!nameVal || !emailVal || !msgVal) {
        e.preventDefault();
        feedbackPara.innerHTML = '⚠️ Please fill all fields.';
        feedbackPara.style.color = '#dc2626';
        setTimeout(() => { feedbackPara.innerHTML = ''; }, 2500);
        return;
      }

      if (!emailVal.includes('@') || !emailVal.includes('.')) {
        e.preventDefault();
        feedbackPara.innerHTML = '📧 Enter a valid email address.';
        feedbackPara.style.color = '#dc2626';
        setTimeout(() => { feedbackPara.innerHTML = ''; }, 2500);
        return;
      }

      // FormSubmit handles the actual sending
      feedbackPara.innerHTML = '✨ Sending your message...';
      feedbackPara.style.color = '#2563eb';
    });
  }

  // ===== HERO BUTTONS SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === "#" || href === "") return;
      const target = document.querySelector(href);
      if (target && href !== '#') {
        e.preventDefault();
        const yOffset = -70;
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
const text = "Web Developer";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}

typeEffect();