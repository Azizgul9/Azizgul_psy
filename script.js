// Function to set the active language
function setLanguage(lang) {
    // Hide all language-specific elements
    document.querySelectorAll('.lang-en, .lang-ru, .lang-ky').forEach((el) => {
      el.classList.add('d-none'); // Hide all language elements
    });
  
    // Show elements for the selected language
    document.querySelectorAll('.lang-' + lang).forEach((el) => {
      el.classList.remove('d-none'); // Show only the selected language
    });
  
    // Store the selected language in local storage
    localStorage.setItem('selectedLanguage', lang);
  }
  
  // Initialize language on page load
  document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    setLanguage(savedLanguage);
  });
  