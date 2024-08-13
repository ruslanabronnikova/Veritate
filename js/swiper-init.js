document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper('.mySwiper', {
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      spaceBetween: 30,
      effect: 'fade',
      autoplay: {
          delay: 3000, // Время между переключением слайдов в миллисекундах
          disableOnInteraction: false, // Автовоспроизведение не остановится при взаимодействии
      },
  });
});

