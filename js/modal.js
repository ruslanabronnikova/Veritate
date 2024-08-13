document.addEventListener('DOMContentLoaded', function () {
  const stars = document.querySelectorAll('.openModal');
  stars.forEach(openModal => {
    openModal.addEventListener('click', function () {
      const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
      myModal.show();
    });
  });
});
