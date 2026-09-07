// Blog filtering functionality
const filterButtons = [...document.querySelectorAll('.blog-filters button')];
const blogPosts = [...document.querySelectorAll('.blog-post[data-category]')];

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active button
    filterButtons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    // Filter posts
    const selectedFilter = button.getAttribute('data-filter');
    blogPosts.forEach(post => {
      if (selectedFilter === 'all' || post.dataset.category === selectedFilter) {
        post.classList.remove('is-hidden');
      } else {
        post.classList.add('is-hidden');
      }
    });
  });
});