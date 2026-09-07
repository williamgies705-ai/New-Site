// FAQ Search & Filter Functionality
const searchInput = document.getElementById('faqSearch');
const faqItems = document.querySelectorAll('.faq-item');
const faqCategories = document.querySelectorAll('.faq-category');

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();

    if (!searchTerm) {
      // Show all if search is empty
      faqItems.forEach(item => item.classList.remove('is-hidden'));
      faqCategories.forEach(cat => cat.classList.remove('all-hidden'));
      return;
    }

    // Filter items
    faqItems.forEach(item => {
      const summary = item.querySelector('summary span').textContent.toLowerCase();
      const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
      const matches = summary.includes(searchTerm) || answer.includes(searchTerm);
      item.classList.toggle('is-hidden', !matches);
    });

    // Hide categories with no visible items
    faqCategories.forEach(category => {
      const visibleItems = category.querySelectorAll('.faq-item:not(.is-hidden)');
      category.classList.toggle('all-hidden', visibleItems.length === 0);
    });
  });
}

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});