// function to toggle the navigation nmenu
function toggleMenu() {
  const nav = document.getElementById('primary-navigation');
  const openIcon = document.getElementById('open-icon');
  const closeIcon = document.getElementById('close-icon');

  if (nav.classList.contains('active')) {
    nav.classList.remove('active');
    closeIcon.style.display = 'none';
    openIcon.style.display = 'inline';
  } else {
    nav.classList.add('active');
    closeIcon.style.display = 'inline';
    openIcon.style.display = 'none';
  }
}

//  change text using innerHTML
// const text = document.getElementById("updating-text");

// let texts = [
//   "Frontend Developer",
//   "Backend Developer",
//   "fullstack developer",
// ]

// setInterval(() => {
//   texts.forEach(element => {
//     text.textContent = element;
//   });
// }, 3000);
