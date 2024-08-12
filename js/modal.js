document.addEventListener('DOMContentLoaded', function () {
  const stars = document.querySelectorAll('.star');
  stars.forEach(star => {
    star.addEventListener('click', function () {
      const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
      myModal.show();
    });
  });
});
