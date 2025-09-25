// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Counter animation
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for counter animation
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                if (!counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    animateCounter(counter);
                }
            });
        }
    });
}, { threshold: 0.5 });

// Observe stats section
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    counterObserver.observe(statsSection);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Dynamic wave animation speed based on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const waves = document.querySelector('.waves');
    if (waves) {
        const speed = 10 + scrolled * 0.02; 
        waves.style.animationDuration = `${speed}s`;
    }
});

// Add floating animation to service cards on hover
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Portfolio item click handler
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function() {
        // Add your portfolio modal or navigation logic here
        console.log('Portfolio item clicked:', this.querySelector('h5').textContent);
    });
});

// Contact button interaction
document.querySelectorAll('.btn-ocean').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Add ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn-ocean {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Mobile menu close on link click
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add entrance animation for hero content
    setTimeout(() => {
        document.querySelector('.hero-content').style.opacity = '1';
        document.querySelector('.hero-content').style.transform = 'translateY(0)';
    }, 500);
});

// Add some extra CSS for loading animation
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    .hero-content {
        opacity: 0;
        transform: translateY(50px);
        transition: all 1s ease-out;
    }
    
    body.loaded .hero-content {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(loadingStyle);

// Scroll to top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: var(--aqua);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 5px 15px rgba(0, 168, 204, 0.3);
`;

document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

// Add hover effect to scroll to top button
scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px)';
    this.style.boxShadow = '0 8px 25px rgba(0, 168, 204, 0.4)';
});

scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 5px 15px rgba(0, 168, 204, 0.3)';
});

// Data gallery
const galleries = { 
    service1: ["https://picsum.photos/seed/service1a/800/500", "https://picsum.photos/seed/service1b/800/500"], 
    service2: ["https://picsum.photos/seed/service2a/800/500", "https://picsum.photos/seed/service2b/800/500"], 
    service3: ["https://picsum.photos/seed/service3a/800/500", "https://picsum.photos/seed/service3b/800/500"], 
    service4: ["https://picsum.photos/seed/service4a/800/500", "https://picsum.photos/seed/service4b/800/500"], 
    service5: ["https://picsum.photos/seed/service5a/800/500", "https://picsum.photos/seed/service5b/800/500"], 
    service6: ["https://picsum.photos/seed/service6a/800/500", "https://picsum.photos/seed/service6b/800/500"], 
    service7: ["https://picsum.photos/seed/service7a/800/500", "https://picsum.photos/seed/service7b/800/500"], 
    service8: ["https://picsum.photos/seed/service8a/800/500", "https://picsum.photos/seed/service8b/800/500"], 
    service9: ["https://picsum.photos/seed/service9a/800/500", "https://picsum.photos/seed/service9b/800/500"], 
    service10: ["https://picsum.photos/seed/service10a/800/500", "https://picsum.photos/seed/service10b/800/500"], 
    service11: ["https://picsum.photos/seed/service11a/800/500", "https://picsum.photos/seed/service11b/800/500"], 
    service12: ["https://picsum.photos/seed/service12a/800/500", "https://picsum.photos/seed/service12b/800/500"], 
    // Portfolio (dummy) 
    project1: ["https://picsum.photos/seed/project1a/800/500","https://picsum.photos/seed/project1b/800/500"], 
    project2: ["https://picsum.photos/seed/project2a/800/500","https://picsum.photos/seed/project2b/800/500"], 
    project3: ["https://picsum.photos/seed/project3a/800/500","https://picsum.photos/seed/project3b/800/500"], 
    project4: ["https://picsum.photos/seed/project4a/800/500","https://picsum.photos/seed/project4b/800/500"] 
};
  
  const modal = document.getElementById("galleryModal");
  const slider = document.getElementById("slider");
  const thumbnails = document.getElementById("thumbnails");
  const closeBtn = document.querySelector(".modal-close");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  
  let currentIndex = 0;
  let autoSlideInterval;
  
  // Open modal
  document.querySelectorAll(".service-card, .portfolio-card").forEach(item => {
    item.addEventListener("click", () => {
      const galleryKey = item.dataset.gallery;
      openGallery(galleries[galleryKey]);
    });
  });
  
  function openGallery(images) {
    slider.innerHTML = "";
    thumbnails.innerHTML = "";
  
    images.forEach((img, i) => {
      // slider item
      const slide = document.createElement("div");
      slide.classList.add("slide");
      slide.innerHTML = `<img src="${img}" alt="Gallery image">`;
      slider.appendChild(slide);
  
      // thumbnail
      const thumb = document.createElement("img");
      thumb.src = img;
      thumb.addEventListener("click", () => {
        currentIndex = i;
        updateSlider();
        resetAutoSlide();
      });
      thumbnails.appendChild(thumb);
    });
  
    currentIndex = 0;
    updateSlider();
    modal.style.display = "flex";
  
    startAutoSlide();
  }
  
  function updateSlider() {
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;
    thumbnails.querySelectorAll("img").forEach((img, i) => {
      img.classList.toggle("active", i === currentIndex);
    });
  }
  
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      nextSlide();
    }, 2000); // ganti foto tiap 4 detik
  }
  
  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slider.children.length;
    updateSlider();
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
    updateSlider();
  }
  
  // Controls
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });
  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });
  
  // Close modal
  closeBtn.addEventListener("click", closeGallery);
  window.addEventListener("click", e => {
    if (e.target === modal) closeGallery();
  });
  
  function closeGallery() {
    modal.style.display = "none";
    clearInterval(autoSlideInterval);
  }  