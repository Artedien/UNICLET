function filterModal() {
    const btns = document.querySelectorAll('.main__tab-status-title-status-image');
    const modal = document.querySelectorAll('.filter__modal-wrapper');
    const closeBtn = document.querySelectorAll('.filter__modal-close-box')

    btns.forEach((btn,i)=>{
        btn.addEventListener('click', () => {
            modal[i].classList.toggle('active');
        
        });
        closeBtn[i].addEventListener('click', () => {
            modal[i].classList.remove('active');
    
        });
    })
 


}

export default filterModal;
