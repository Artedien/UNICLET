function filterModal() {
    const btn = document.querySelector('.main__tab-status-title-status-image');
    const modal = document.querySelector('.filter__modal-wrapper');
    const closeBtn = document.querySelector('.filter__modal-close-box')

    
    btn.addEventListener('click', () => {
        modal.classList.toggle('active');
    
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');

    });
}

export default filterModal;
