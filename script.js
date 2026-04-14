document.addEventListener('DOMContentLoaded', () => {
  /* =========================================
     Typing Animation
     ========================================= */
  const textToType = "Priyam Chaudhury";
  const typeWriterElement = document.getElementById('typewriter');
  let index = 0;

  function type() {
    if (index < textToType.length) {
      typeWriterElement.innerHTML += textToType.charAt(index);
      index++;
      // Randomize typing speed slightly for realism
      setTimeout(type, Math.random() * 50 + 100);
    }
  }

  // Start typing animation after a short delay
  setTimeout(type, 500);

  /* =========================================
     Theme Toggle Logic
     ========================================= */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  
  // SVGs for the buttons
  const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;

  // Check local storage for saved theme, default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);
  
  // Set initial icon
  themeToggleBtn.innerHTML = savedTheme === 'dark' ? sunIcon : moonIcon;

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Update DOM and local storage
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update Icon (if turning dark, show sun icon to allow switching back to light, and vice versa)
    themeToggleBtn.innerHTML = newTheme === 'dark' ? sunIcon : moonIcon;
  });
});