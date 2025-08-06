document.addEventListener('DOMContentLoaded', () => {
  const beneficioCards = document.querySelectorAll('.beneficio-card');
  const modalTitle = document.getElementById('beneficioModalLabel');
  const modalTexto = document.getElementById('beneficioModalTexto');

  beneficioCards.forEach(card => {
    card.addEventListener('click', () => {
      modalTitle.textContent = card.getAttribute('data-title');
      modalTexto.textContent = card.getAttribute('data-text');
    });
  });
});
