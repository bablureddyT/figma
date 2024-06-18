const quickViewBtns = document.querySelectorAll('.btn');
const quickViewModal = document.querySelector('.quick-view-modal');
const closeBtn = document.querySelector('.close-quick-view');

quickViewBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    quickViewModal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  quickViewModal.style.display = 'none';
});
quickViewModal.addEventListener('click', (event) => {
  if (event.target === quickViewModal) {
    quickViewModal.style.display = 'none';
  }
});
