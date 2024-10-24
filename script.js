const navMenu = document.getElementById('nav-menu');
const navBtn = document.getElementById('nav-btn');

// Add a click event listener to the toggle button
navBtn.addEventListener('click', () => {
  // Toggle the 'hidden' class on the nav menu to show or hide it
  navMenu.classList.toggle('hidden');
});