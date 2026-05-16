// ===============================
// Efek Navigasi Aktif Saat Scroll
// ===============================
window.addEventListener('scroll', () => {
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('nav a');

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
});

// ===========================================
// Efek Hover 3D (Tilt) untuk Galeri Project
// ===========================================
document.querySelectorAll('.gallery-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Tentukan seberapa besar kemiringannya
    const rotateX = ((y - centerY) / 15).toFixed(2);
    const rotateY = ((centerX - x) / 15).toFixed(2);

    // Terapkan efek transformasi 3D
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    card.style.transition = 'transform 0.1s ease';
  });

  // Kembalikan posisi normal saat mouse keluar
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    card.style.transition = 'transform 0.4s ease';
  });

  // Sedikit efek klik untuk interaksi
  card.addEventListener('mousedown', () => {
    card.style.transform = 'scale(0.98)';
  });

  card.addEventListener('mouseup', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1.02)';
  });
});

// ===========================================
// Efek Scroll Halus untuk Tombol "Jelajahi Projek"
// ===========================================
document.querySelector('.btn')?.addEventListener('click', () => {
  const projectSection = document.querySelector('#projects');
  if (projectSection) {
    projectSection.scrollIntoView({ behavior: 'smooth' });
  }
});
// ===========================================
// Animasi Progress Bar Skill Saat Scroll
// ===========================================
const skillSection = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".progress");

function showProgress() {
  progressBars.forEach(bar => {
    const value = bar.getAttribute("data-progress");
    bar.style.width = value;
  });
}

function hideProgress() {
  progressBars.forEach(bar => {
    bar.style.width = 0;
  });
}

window.addEventListener("scroll", () => {
  const sectionPos = skillSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;

  if (sectionPos < screenPos) {
    showProgress();
  } else {
    hideProgress();
  }
});
