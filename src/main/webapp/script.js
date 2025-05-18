window.onload = () => {
  setTimeout(() => {
    const text = document.querySelector('.dialogue p');
    text.textContent = '💖 Pavani, life with you is a dream. Will you marry me? 💍';
  }, 4000);

  setTimeout(() => {
    const heart = document.querySelector('.pavani .heart');
    heart.style.background = 'hotpink';
    heart.style.boxShadow = '0 0 20px pink';
  }, 6000);
};
