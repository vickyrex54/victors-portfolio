// Interactive cards
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("expanded");
    });
  });
 
  // Modal
  const modal = document.getElementById("modal");
  const closeModal = document.querySelector(".close");
 
  document.querySelectorAll('a[href="#learn"]').forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
    });
  });
 
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
 
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
  // Typewriter effect
  const heroText = "Welcome to the Future of Web Design";
  let index = 0;
 
  function typeWriter() {
    if (index < heroText.length) {
      document.querySelector(".hero h1").textContent += heroText.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
 
  window.onload = typeWriter;

  //navbar-toggle, navbar-menue and them-toggle
  document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Toggle mobile menu
    navbarToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('active');
    });

    // Close the menu when a link is clicked
    const navbarLinks = document.querySelectorAll('.navbar-link');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbarMenu.classList.remove('active');
        });
    });

    // Toggle dark mode
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    });

    // Check for saved theme preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        body.classList.add('dark-mode');
    }

 

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar-item')) {
            document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});