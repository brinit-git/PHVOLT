// Initialize navbar functionality after loading the navbar partial
function initializeNavbar(){
  // Safe-select helpers
  const navlinks = document.querySelectorAll(".nav-menu .nav-link");
  const menuOpenButton = document.querySelector("#menu-open-button");
  const menuCloseButton = document.querySelector("#menu-close-button");

  // If buttons are missing (e.g., no navbar on this page), skip
  if(!menuOpenButton || !menuCloseButton) return;

  // Open menu
  menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
    menuOpenButton.style.display = "none"; // hide hamburger
  });

  // Close menu
  menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
    menuOpenButton.style.display = "block"; // show hamburger again
  });

  // Close when any nav link clicked (mobile)
  if(navlinks && navlinks.length){
    navlinks.forEach(link => {
      link.addEventListener("click", () => {
        document.body.classList.remove("show-mobile-menu");
        menuOpenButton.style.display = "block";
      });
    });
  }
}

fetch('navbar.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;

        // Initialize navbar functionality after loading
        initializeNavbar();
    });

fetch('footer.html')
    .then(res => res.text())
    .then(data => document.getElementById('footer').innerHTML = data);




// Header scroll effect - add dark background when scrolling
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});



// Navbar handlers are initialized after the navbar HTML is injected via initializeNavbar()
// Stats counter (homepage): start only when the section enters the viewport
document.addEventListener('DOMContentLoaded', () => {
  const statsSection = document.querySelector('.journey.stats-band');
  if (!statsSection) return;

  let started = false;
  const counters = statsSection.querySelectorAll('.num');

  const runCounters = () => {
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target')) || 0;
      const suffix = counter.getAttribute('data-suffix') || '';

      const steps = 60; // ~1s at 60fps
      const increment = target / steps;
      let current = 0;

      const tick = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current).toLocaleString();
          requestAnimationFrame(tick);
        } else {
          counter.textContent = Math.round(target).toLocaleString() + suffix;
        }
      };

      requestAnimationFrame(tick);
    });
  };

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        runCounters();
        obs.unobserve(statsSection);
      }
    });
  }, { threshold: 0.35 });

  io.observe(statsSection);
});

    // service html
    gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
  trigger: ".journey-section", // your stats section container
  start: "top 80%",
  once: true, // only run once
  onEnter: () => {
    const stats = document.querySelectorAll('.stat-count');
    stats.forEach(stat => {
      const updateCount = () => {
        const target = +stat.getAttribute('data-target');
        const count = +stat.innerText;
        const increment = target / 100;

        if (count < target) {
          stat.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 30);
        } else {
          stat.innerText = target + (target >= 100 ? '+' : '');
        }
      };
      updateCount();
    });
  }
});


// about section

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bars = document.querySelectorAll(".progress-bar");
          bars.forEach(bar => {
            const targetWidth = bar.getAttribute("data-width");
            bar.style.width = targetWidth;
          });
          observer.disconnect();
        }
      });
    });

    const firstBar = document.querySelector(".progress-bar");
    if (firstBar) {
      observer.observe(firstBar);
    }
    });

  // Contact form handler (contact.html) - open WhatsApp with filled details
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : null;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Opening WhatsApp...';
      }

      const data = new FormData(form);
      const name = (data.get("name") || "").toString().trim();
      const email = (data.get("email") || "").toString().trim();
      const phone = (data.get("phone") || "").toString().trim();
      const message = (data.get("message") || "").toString().trim();

      // Basic front-end validation (HTML5 'required' also in place)
      if (!name || !email || !message) {
        form.reportValidity();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }
        return;
      }

      // Build a friendly message for WhatsApp
      const lines = [
        `Hello Photonvolt, I would like to enquire about your services.`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        ``,
        `Message:`,
        message
      ].filter(Boolean).join('\n');

      const encoded = encodeURIComponent(lines);

      // Company WhatsApp number (international, no leading +). Change if you prefer another number.
      const companyPhone = '91 80751 79303';

      // api.whatsapp.com will open WhatsApp app on mobile or WhatsApp Web on desktop
      const waUrl = `https://api.whatsapp.com/send?phone=${companyPhone}&text=${encoded}`;

      // Try to open in a new tab; fall back to navigating current window if blocked
      const newWindow = window.open(waUrl, '_blank');
      setTimeout(() => {
        if (!newWindow || newWindow.closed) {
          window.location.href = waUrl;
        }
      }, 500);

      const status = document.getElementById("formStatus");
      if (status) {
        status.textContent = "Opening WhatsApp… If it doesn't open, please contact us at +91 80751 79303.";
      }

      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }
    });
  });

// Preloader
window.addEventListener('load', () => {
  setTimeout(() => {
    document.body.classList.add('loaded');
  }, 1000);
});

