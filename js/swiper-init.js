const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  speed: 800, // Скорость перелистывания в миллисекундах (например, 800 = 0.8 секунды)
  effect: 'fade', // Эффект "fade" для плавного затухания и появления слайдов
  fadeEffect: {
    crossFade: true,
  },

  autoplay: {
    delay: 5000, // Задержка между переключениями в миллисекундах (например, 5000 = 5 секунд)
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});