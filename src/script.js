// 1. Grab the heart element
const heart = document.querySelector('.heart');

// 2. Add a click event listener
heart.addEventListener('click', () => {
  // Fade out the heart container
  const heartContainer = document.getElementById('heart-container');
  heartContainer.style.opacity = '0';

  // After 0.5s (the duration of the CSS transition), hide the container completely
  setTimeout(() => {
    heartContainer.style.display = 'none';

    // Fade in the billiards container
    const billiards = document.getElementById('billiards-container');
    billiards.style.display = 'flex'; // Make it visible so we can animate it

    // Give a small delay before changing opacity, allowing the browser
    // to apply 'display: flex' first
    setTimeout(() => {
      billiards.style.opacity = '1'; // Trigger the fade-in transition
    }, 50);

  }, 500); // Matches the 0.5s transition in CSS
});
