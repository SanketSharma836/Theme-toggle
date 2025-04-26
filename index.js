const toggleBtn = document.getElementById('toggle-btn'); //first we get element//
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');

  if (body.classList.contains('dark')) {
    toggleBtn.textContent = 'Switch to Light Mode';
  } else {
    toggleBtn.textContent = 'Switch to Dark Mode';
  }
});
