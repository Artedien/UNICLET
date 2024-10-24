/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/components/mainTabs.js
function mainTabs() {
  const tabsDesk = document.querySelectorAll('.main__tab-title');
  const infoBoxDesk = document.querySelectorAll('.main__tab-item');
  // infoBoxDesk.forEach((innerInfoBox) => {
  //     innerInfoBox.style.transition = 'visibility 0.5s, opacity 0.5s'
  // });

  tabsDesk.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      tabsDesk.forEach(innerTab => {
        innerTab.classList.remove('active');
      });
      tab.classList.add('active');
      infoBoxDesk.forEach(innerInfoBox => {
        innerInfoBox.classList.remove('active');
      });
      infoBoxDesk[i].classList.add('active');
    });
  });
}
/* harmony default export */ var components_mainTabs = (mainTabs);
;// CONCATENATED MODULE: ./src/js/components/filterModal.js
function filterModal() {
  const btns = document.querySelectorAll('.main__tab-status-title-status-image');
  const modal = document.querySelectorAll('.filter__modal-wrapper');
  const closeBtn = document.querySelectorAll('.filter__modal-close-box');
  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      modal[i].classList.toggle('active');
    });
    closeBtn[i].addEventListener('click', () => {
      modal[i].classList.remove('active');
    });
  });
}
/* harmony default export */ var components_filterModal = (filterModal);
;// CONCATENATED MODULE: ./src/js/components/filterMainModal.js
function mainModalOpen() {
  const filterBtn = document.querySelectorAll('.main__tab-option-filter-btn');
  filterBtn.forEach(item => {
    item.addEventListener('click', () => {
      item.parentElement.querySelector('.filter__main-box').classList.toggle('isActive');
    });
  });
}
function mainModalTabs() {
  const tabsDesk = document.querySelectorAll('.filter__main-tab-item');
  const infoBoxDesk = document.querySelectorAll('.filter__main-tab-item');
  const filterOption = document.querySelectorAll('.filter__main-option');
  tabsDesk.forEach((tab, i) => {
    infoBoxDesk.forEach(() => {});
    tab.addEventListener('click', () => {
      tabsDesk.forEach(innerTab => {
        innerTab.classList.remove('active');
      });
      filterOption.forEach(innerTab => {
        innerTab.classList.remove('isActive');
      });
      tab.classList.add('active');
      infoBoxDesk.forEach(innerInfoBox => {
        innerInfoBox.classList.remove('active');
      });
      infoBoxDesk[i].classList.add('active');
      filterOption[i].classList.add('isActive');
    });
  });
}

;// CONCATENATED MODULE: ./src/js/components/pagination.js
const footerPagination = () => {
  const pagination = (paginationSelector, totalPages, currentPage) => {
    // Выбираем элемент с классом 'pagination ul' в DOM
    const element = document.querySelector(paginationSelector);

    // Задаем общее количество страниц и текущую страницу

    // Функция для генерации разметки пагинации
    function createPagination(totalPages, currentPage) {
      // Инициализируем пустую строку для разметки
      let liTag = '';

      // Переменная для отслеживания активной страницы
      let active;

      // Определяем сколько цифр отображать с каждой стороны
      const sideNumbers = 2;

      // Вычисляем страницы, которые будут отображены перед и после текущей страницы
      let beforePage = Math.max(currentPage - sideNumbers, 1);
      let afterPage = Math.min(currentPage + sideNumbers, totalPages);

      // Если текущая страница не первая, добавляем кнопку "Prev"
      if (currentPage > 1) {
        liTag += `<button class="pagination__pagination-btn  pagination__pagination-btn--prev"><span style='display:flex;gap:1rem;align-items:center;'>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.6668 6.00016H1.3335M1.3335 6.00016L6.00016 10.6668M1.3335 6.00016L6.00016 1.3335" stroke="#1E1E1E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
</svg> 
Предыдущая</span></button>`;
      } else {
        liTag += `<button disabled class="pagination__pagination-btn  pagination__pagination-btn--prev"><span style='display:flex;gap:1rem;align-items:center;'><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10.6668 6.00016H1.3335M1.3335 6.00016L6.00016 10.6668M1.3335 6.00016L6.00016 1.3335" stroke="#1E1E1E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
</svg> Предыдущая</span></button>`;
      }
      // Если есть страницы перед текущей, добавляем "..." и первую страницу
      if (currentPage > sideNumbers + 1) {
        liTag += `<li class="pagination__pagination-item  pagination__pagination-item--numb"><span>1</span></li>`;
        if (currentPage > sideNumbers + 2) {
          liTag += `<li class="pagination__pagination-item  pagination__pagination-item--dots"><span>...</span></li>`;
        }
      }

      // Генерируем разметку для страниц, которые будут отображены перед и после текущей страницы
      for (let plength = beforePage; plength <= afterPage; plength++) {
        // Определяем активную страницу
        active = currentPage === plength ? 'isActive' : '';
        // Добавляем тег <li> с номером страницы
        liTag += `<li class="pagination__pagination-item  pagination__pagination-item--numb ${active}"><span>${plength}</span></li>`;
      }

      // Если есть страницы после текущей, добавляем "..." и последнюю страницу
      if (currentPage < totalPages - sideNumbers) {
        if (currentPage < totalPages - sideNumbers - 1) {
          liTag += `<li class="pagination__pagination-item pagination__pagination-item--dots"><span>...</span></li>`;
        }
        liTag += `<li class="pagination__pagination-item  pagination__pagination-item--numb"><span>${totalPages}</span></li>`;
      }

      // Если текущая страница не последняя, добавляем кнопку "Next"
      if (currentPage < totalPages) {
        liTag += `<button class="pagination__pagination-btn  pagination__pagination-btn--next"><span style='display:flex;gap:1rem;align-items:center;'>Следующая <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.3335 6.00016H10.6668M10.6668 6.00016L6.00016 1.3335M10.6668 6.00016L6.00016 10.6668" stroke="#1E1E1E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
</svg></span></button>`;
      } else {
        liTag += `<button disabled class="pagination__pagination-btn   pagination__pagination-btn--next"><span style='display:flex;gap:1rem;align-items:center;'>Следующая <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.3335 6.00016H10.6668M10.6668 6.00016L6.00016 1.3335M10.6668 6.00016L6.00016 10.6668" stroke="#1E1E1E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
</svg></span></button>`;
      }

      // Устанавливаем сгенерированную разметку внутрь элемента с классом 'pagination ul'

      // element.innerHTML = liTag;

      element.innerHTML = liTag;

      // Добавляем обработчики событий после обновления HTML
      addEventListeners();
    }

    // Функция для добавления обработчиков событий на элементы пагинации
    function addEventListeners() {
      // Получаем все элементы с классами 'numb', 'prev' и 'next'
      const pageLinks = element.querySelectorAll('.pagination__pagination-item--numb, .pagination__pagination-btn--prev, .pagination__pagination-btn--next');

      // Для каждого элемента добавляем обработчик события при клике
      pageLinks.forEach(link => {
        link.addEventListener('click', function () {
          // Получаем номер страницы из текста элемента, на который кликнули
          const pageNumber = parseInt(this.textContent);

          // Обновляем текущую страницу в зависимости от действия пользователя
          if (!isNaN(pageNumber)) {
            currentPage = pageNumber;
          } else if (this.classList.contains('pagination__pagination-btn--prev')) {
            currentPage--;
          } else if (this.classList.contains('pagination__pagination-btn--next')) {
            currentPage++;
          }

          // Генерируем пагинацию с обновленными значениями
          createPagination(totalPages, currentPage);
        });
      });
    }

    // Вызываем функцию создания пагинации при загрузке страницы
    createPagination(totalPages, currentPage);
  };
  pagination('.pagination__pagination--1', 68, 1);
  pagination('.pagination__pagination--2', 14, 5);
  pagination('.pagination__pagination--3', 21, 9);
  pagination('.pagination__pagination--4', 31, 15);
  pagination('.pagination__pagination--5', 6, 1);
  pagination('.pagination__pagination--6', 28, 3);
  pagination('.pagination__pagination--7', 44, 15);
  pagination('.pagination__pagination--8', 22, 3);
  pagination('.pagination__pagination--9', 61, 25);
  pagination('.pagination__pagination--10', 16, 1);
  const dropDowns = document.querySelectorAll('.pagination__order-dropdown');
  dropDowns.forEach(dropdown => {
    const text = dropdown.querySelector('.pagination__order-dropdown-header-text');
    const inputs = dropdown.querySelectorAll('.pagination__order-dropdown-item label');
    const headerDropdown = dropdown.querySelector('.pagination__order-dropdown-header-box');
    const dropdownListBox = dropdown.querySelector('.pagination__order-dropdown-list-box');
    inputs.forEach(input => {
      const inputInner = input.querySelector('input');
      if (inputInner.checked) {
        text.textContent = input.parentElement.textContent.trim();
      }
    });
    headerDropdown.addEventListener('click', () => {
      dropdownListBox.classList.toggle('isActive');
    });
    inputs.forEach(input => {
      input.addEventListener('click', () => {
        let value = input.parentElement.textContent.trim();
        text.textContent = value;
        dropdownListBox.classList.remove('isActive');
      });
    });
  });
};

// Экспортируем функцию guests
/* harmony default export */ var pagination = (footerPagination);
;// CONCATENATED MODULE: ./src/js/components/filterTabs.js
function filterTabs() {
  function tabs(selector) {
    const tabsDesk = document.querySelectorAll(`${selector} .main__tab-btn`);
    const infoBoxDesk = document.querySelectorAll(`${selector} .main__tab-status`);
    tabsDesk.forEach((tab, i) => {
      infoBoxDesk.forEach(innerInfoBox => {
        innerInfoBox.style.transition = 'visibility 0.5s, opacity 0.5s';
      });
      tab.addEventListener('click', () => {
        tabsDesk.forEach(innerTab => {
          innerTab.classList.remove('active');
        });
        tab.classList.add('active');
        infoBoxDesk.forEach(innerInfoBox => {
          innerInfoBox.classList.remove('active');
        });
        infoBoxDesk[i].classList.add('active');
      });
    });
  }
  tabs(`.main__tab-item--1`);
  tabs(`.main__tab-item--2`);
}
/* harmony default export */ var components_filterTabs = (filterTabs);
;// CONCATENATED MODULE: ./src/js/components/reviewModal.js
function reviewModal() {
  function openModal(modal) {
    const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
    let scrollWith = getScrollbarWidth();
    document.body.style.paddingRight = `${scrollWith}px`;
    modal.classList.add('isActive');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(modal) {
    modal.classList.remove('isActive');
    document.body.style.paddingRight = ``;
    document.body.style.overflow = '';
  }
  const reviewBtn = document.querySelectorAll('.feedback');
  const reviewModal = document.querySelector('.reviewModal__wrapper');
  const reviewModalCloseBtn = document.querySelector('.reviewModal__reject');
  const successReviewBtn = document.querySelector('.reviewModal__submit');
  const successRevievModal = document.querySelector('.successReviewModal__wrapper');
  const closeBtn = document.querySelector('.successModal__btn');
  reviewBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openModal(reviewModal);
    });
  });
  reviewModalCloseBtn.addEventListener('click', e => {
    e.preventDefault();
    closeModal(reviewModal);
  });
  reviewModal.addEventListener('click', e => {
    if (e.target.classList.contains('reviewModal__wrapper')) {
      closeModal(reviewModal);
    }
  });
  successReviewBtn.addEventListener('click', e => {
    e.preventDefault();
    closeModal(reviewModal);
    openModal(successRevievModal);
  });
  successRevievModal.addEventListener('click', e => {
    if (e.target.classList.contains('successReviewModal__wrapper')) {
      closeModal(successRevievModal);
    }
  });
  closeBtn.addEventListener('click', e => {
    e.preventDefault();
    closeModal(successRevievModal);
  });
}
/* harmony default export */ var components_reviewModal = (reviewModal);
;// CONCATENATED MODULE: ./src/js/components/hoverTransition.js
function addSmooth(item) {
  document.querySelectorAll(`${item}`).forEach(innerInfoBox => {
    innerInfoBox.style.transition = 'opacity 0.5s, visibility 0.5s';
  });
}
/* harmony default export */ var hoverTransition = (addSmooth);
;// CONCATENATED MODULE: ./src/js/components/burger.js
const burger = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.header__nav');
  const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
  function openBurger() {
    let scrollWith = getScrollbarWidth();
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollWith}px`;
    burger.classList.add('active');
    burger.style.paddingRight = `${scrollWith}px`;
    nav.classList.add('active');
  }
  function closeBurger() {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    burger.classList.remove('active');
    burger.style.paddingRight = ``;
    nav.classList.remove('active');
  }
  burger.addEventListener('click', () => {
    burger.classList.contains('active') ? closeBurger() : openBurger();
  });
  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      closeBurger();
    }
  });
  nav.addEventListener('click', e => {
    if (e.target.classList.contains('header-top__nav-link')) {
      closeBurger();
    }
  });
};
/* harmony default export */ var components_burger = (burger);
;// CONCATENATED MODULE: ./src/index.js

// import reservationSelect from './js/components/reservationSelect';








window.addEventListener('DOMContentLoaded', () => {
  try {
    components_mainTabs();
  } catch {}
  try {
    components_filterModal();
  } catch {}
  try {
    mainModalTabs();
  } catch {}
  try {
    mainModalOpen();
  } catch {}
  try {
    pagination();
  } catch {}
  try {
    components_filterTabs();
  } catch {}
  try {
    components_burger();
  } catch {}
  try {
    components_reviewModal();
  } catch {}
  try {
    hoverTransition('.main__tab-item');
    hoverTransition('.main__tab-status-title-product-list-item-link-hover');
  } catch {}
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsaUJBQWlCLENBQUM7SUFDNUJBLGVBQVMsQ0FBQyxzREFBc0QsQ0FBQztFQUNyRSxDQUFDLE9BQUssQ0FBQztBQUNYLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2NvbXBvbmVudHMvbWFpblRhYnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2NvbXBvbmVudHMvZmlsdGVyTW9kYWwuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2NvbXBvbmVudHMvZmlsdGVyTWFpbk1vZGFsLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9jb21wb25lbnRzL3BhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2NvbXBvbmVudHMvZmlsdGVyVGFicy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvY29tcG9uZW50cy9yZXZpZXdNb2RhbC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvY29tcG9uZW50cy9ob3ZlclRyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2NvbXBvbmVudHMvYnVyZ2VyLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtYWluVGFicygpIHtcclxuICAgIGNvbnN0IHRhYnNEZXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW5fX3RhYi10aXRsZScpO1xyXG4gICAgY29uc3QgaW5mb0JveERlc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbl9fdGFiLWl0ZW0nKTtcclxuICAgIC8vIGluZm9Cb3hEZXNrLmZvckVhY2goKGlubmVySW5mb0JveCkgPT4ge1xyXG4gICAgLy8gICAgIGlubmVySW5mb0JveC5zdHlsZS50cmFuc2l0aW9uID0gJ3Zpc2liaWxpdHkgMC41cywgb3BhY2l0eSAwLjVzJ1xyXG4gICAgLy8gfSk7XHJcblxyXG5cclxuICAgIHRhYnNEZXNrLmZvckVhY2goKHRhYiwgaSkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGFic0Rlc2suZm9yRWFjaCgoaW5uZXJUYWIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlubmVyVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgaW5mb0JveERlc2suZm9yRWFjaCgoaW5uZXJJbmZvQm94KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpbm5lckluZm9Cb3guY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaW5mb0JveERlc2tbaV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFpblRhYnM7XHJcbiIsImZ1bmN0aW9uIGZpbHRlck1vZGFsKCkge1xyXG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluX190YWItc3RhdHVzLXRpdGxlLXN0YXR1cy1pbWFnZScpO1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19tb2RhbC13cmFwcGVyJyk7XHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX21vZGFsLWNsb3NlLWJveCcpXHJcblxyXG4gICAgYnRucy5mb3JFYWNoKChidG4saSk9PntcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1vZGFsW2ldLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNsb3NlQnRuW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtb2RhbFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuIFxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpbHRlck1vZGFsO1xyXG4iLCJmdW5jdGlvbiBtYWluTW9kYWxPcGVuKCkge1xyXG4gICAgY29uc3QgZmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW5fX3RhYi1vcHRpb24tZmlsdGVyLWJ0bicpO1xyXG5cclxuICAgIGZpbHRlckJ0bi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX21haW4tYm94JykuY2xhc3NMaXN0LnRvZ2dsZSgnaXNBY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYWluTW9kYWxUYWJzKCkge1xyXG4gICAgY29uc3QgdGFic0Rlc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19tYWluLXRhYi1pdGVtJyk7XHJcbiAgICBjb25zdCBpbmZvQm94RGVzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX21haW4tdGFiLWl0ZW0nKTtcclxuICAgIGNvbnN0IGZpbHRlck9wdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX21haW4tb3B0aW9uJyk7XHJcblxyXG4gICAgdGFic0Rlc2suZm9yRWFjaCgodGFiLCBpKSA9PiB7XHJcbiAgICAgICAgaW5mb0JveERlc2suZm9yRWFjaCgoKSA9PiB7fSk7XHJcblxyXG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGFic0Rlc2suZm9yRWFjaCgoaW5uZXJUYWIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlubmVyVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGZpbHRlck9wdGlvbi5mb3JFYWNoKChpbm5lclRhYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaW5uZXJUYWIuY2xhc3NMaXN0LnJlbW92ZSgnaXNBY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGluZm9Cb3hEZXNrLmZvckVhY2goKGlubmVySW5mb0JveCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaW5uZXJJbmZvQm94LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGluZm9Cb3hEZXNrW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBmaWx0ZXJPcHRpb25baV0uY2xhc3NMaXN0LmFkZCgnaXNBY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBtYWluTW9kYWxUYWJzLCBtYWluTW9kYWxPcGVuIH07XHJcbiIsImNvbnN0IGZvb3RlclBhZ2luYXRpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwYWdpbmF0aW9uID0gKHBhZ2luYXRpb25TZWxlY3RvciwgdG90YWxQYWdlcywgY3VycmVudFBhZ2UpID0+IHtcclxuICAgICAgICAvLyDQktGL0LHQuNGA0LDQtdC8INGN0LvQtdC80LXQvdGCINGBINC60LvQsNGB0YHQvtC8ICdwYWdpbmF0aW9uIHVsJyDQsiBET01cclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYWdpbmF0aW9uU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICAvLyDQl9Cw0LTQsNC10Lwg0L7QsdGJ0LXQtSDQutC+0LvQuNGH0LXRgdGC0LLQviDRgdGC0YDQsNC90LjRhiDQuCDRgtC10LrRg9GJ0YPRjiDRgdGC0YDQsNC90LjRhtGDXHJcblxyXG4gICAgICAgIC8vINCk0YPQvdC60YbQuNGPINC00LvRjyDQs9C10L3QtdGA0LDRhtC40Lgg0YDQsNC30LzQtdGC0LrQuCDQv9Cw0LPQuNC90LDRhtC40LhcclxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQYWdpbmF0aW9uKHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgICAgIC8vINCY0L3QuNGG0LjQsNC70LjQt9C40YDRg9C10Lwg0L/Rg9GB0YLRg9GOINGB0YLRgNC+0LrRgyDQtNC70Y8g0YDQsNC30LzQtdGC0LrQuFxyXG4gICAgICAgICAgICBsZXQgbGlUYWcgPSAnJztcclxuXHJcbiAgICAgICAgICAgIC8vINCf0LXRgNC10LzQtdC90L3QsNGPINC00LvRjyDQvtGC0YHQu9C10LbQuNCy0LDQvdC40Y8g0LDQutGC0LjQstC90L7QuSDRgdGC0YDQsNC90LjRhtGLXHJcbiAgICAgICAgICAgIGxldCBhY3RpdmU7XHJcblxyXG4gICAgICAgICAgICAvLyDQntC/0YDQtdC00LXQu9GP0LXQvCDRgdC60L7Qu9GM0LrQviDRhtC40YTRgCDQvtGC0L7QsdGA0LDQttCw0YLRjCDRgSDQutCw0LbQtNC+0Lkg0YHRgtC+0YDQvtC90YtcclxuICAgICAgICAgICAgY29uc3Qgc2lkZU51bWJlcnMgPSAyO1xyXG5cclxuICAgICAgICAgICAgLy8g0JLRi9GH0LjRgdC70Y/QtdC8INGB0YLRgNCw0L3QuNGG0YssINC60L7RgtC+0YDRi9C1INCx0YPQtNGD0YIg0L7RgtC+0LHRgNCw0LbQtdC90Ysg0L/QtdGA0LXQtCDQuCDQv9C+0YHQu9C1INGC0LXQutGD0YnQtdC5INGB0YLRgNCw0L3QuNGG0YtcclxuICAgICAgICAgICAgbGV0IGJlZm9yZVBhZ2UgPSBNYXRoLm1heChjdXJyZW50UGFnZSAtIHNpZGVOdW1iZXJzLCAxKTtcclxuICAgICAgICAgICAgbGV0IGFmdGVyUGFnZSA9IE1hdGgubWluKGN1cnJlbnRQYWdlICsgc2lkZU51bWJlcnMsIHRvdGFsUGFnZXMpO1xyXG5cclxuICAgICAgICAgICAgLy8g0JXRgdC70Lgg0YLQtdC60YPRidCw0Y8g0YHRgtGA0LDQvdC40YbQsCDQvdC1INC/0LXRgNCy0LDRjywg0LTQvtCx0LDQstC70Y/QtdC8INC60L3QvtC/0LrRgyBcIlByZXZcIlxyXG4gICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICBsaVRhZyArPSBgPGJ1dHRvbiBjbGFzcz1cInBhZ2luYXRpb25fX3BhZ2luYXRpb24tYnRuICBwYWdpbmF0aW9uX19wYWdpbmF0aW9uLWJ0bi0tcHJldlwiPjxzcGFuIHN0eWxlPSdkaXNwbGF5OmZsZXg7Z2FwOjFyZW07YWxpZ24taXRlbXM6Y2VudGVyOyc+XHJcbiAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTIgMTJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICA8cGF0aCBkPVwiTTEwLjY2NjggNi4wMDAxNkgxLjMzMzVNMS4zMzM1IDYuMDAwMTZMNi4wMDAxNiAxMC42NjY4TTEuMzMzNSA2LjAwMDE2TDYuMDAwMTYgMS4zMzM1XCIgc3Ryb2tlPVwiIzFFMUUxRVwiIHN0cm9rZS13aWR0aD1cIjEuNlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIC8+XHJcbjwvc3ZnPiBcclxu0J/RgNC10LTRi9C00YPRidCw0Y88L3NwYW4+PC9idXR0b24+YDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxpVGFnICs9IGA8YnV0dG9uIGRpc2FibGVkIGNsYXNzPVwicGFnaW5hdGlvbl9fcGFnaW5hdGlvbi1idG4gIHBhZ2luYXRpb25fX3BhZ2luYXRpb24tYnRuLS1wcmV2XCI+PHNwYW4gc3R5bGU9J2Rpc3BsYXk6ZmxleDtnYXA6MXJlbTthbGlnbi1pdGVtczpjZW50ZXI7Jz48c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTIgMTJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICA8cGF0aCBkPVwiTTEwLjY2NjggNi4wMDAxNkgxLjMzMzVNMS4zMzM1IDYuMDAwMTZMNi4wMDAxNiAxMC42NjY4TTEuMzMzNSA2LjAwMDE2TDYuMDAwMTYgMS4zMzM1XCIgc3Ryb2tlPVwiIzFFMUUxRVwiIHN0cm9rZS13aWR0aD1cIjEuNlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIC8+XHJcbjwvc3ZnPiDQn9GA0LXQtNGL0LTRg9GJ0LDRjzwvc3Bhbj48L2J1dHRvbj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vINCV0YHQu9C4INC10YHRgtGMINGB0YLRgNCw0L3QuNGG0Ysg0L/QtdGA0LXQtCDRgtC10LrRg9GJ0LXQuSwg0LTQvtCx0LDQstC70Y/QtdC8IFwiLi4uXCIg0Lgg0L/QtdGA0LLRg9GOINGB0YLRgNCw0L3QuNGG0YNcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID4gc2lkZU51bWJlcnMgKyAxKSB7XHJcbiAgICAgICAgICAgICAgICBsaVRhZyArPSBgPGxpIGNsYXNzPVwicGFnaW5hdGlvbl9fcGFnaW5hdGlvbi1pdGVtICBwYWdpbmF0aW9uX19wYWdpbmF0aW9uLWl0ZW0tLW51bWJcIj48c3Bhbj4xPC9zcGFuPjwvbGk+YDtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA+IHNpZGVOdW1iZXJzICsgMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpVGFnICs9IGA8bGkgY2xhc3M9XCJwYWdpbmF0aW9uX19wYWdpbmF0aW9uLWl0ZW0gIHBhZ2luYXRpb25fX3BhZ2luYXRpb24taXRlbS0tZG90c1wiPjxzcGFuPi4uLjwvc3Bhbj48L2xpPmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vINCT0LXQvdC10YDQuNGA0YPQtdC8INGA0LDQt9C80LXRgtC60YMg0LTQu9GPINGB0YLRgNCw0L3QuNGGLCDQutC+0YLQvtGA0YvQtSDQsdGD0LTRg9GCINC+0YLQvtCx0YDQsNC20LXQvdGLINC/0LXRgNC10LQg0Lgg0L/QvtGB0LvQtSDRgtC10LrRg9GJ0LXQuSDRgdGC0YDQsNC90LjRhtGLXHJcbiAgICAgICAgICAgIGZvciAobGV0IHBsZW5ndGggPSBiZWZvcmVQYWdlOyBwbGVuZ3RoIDw9IGFmdGVyUGFnZTsgcGxlbmd0aCsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDQntC/0YDQtdC00LXQu9GP0LXQvCDQsNC60YLQuNCy0L3Rg9GOINGB0YLRgNCw0L3QuNGG0YNcclxuICAgICAgICAgICAgICAgIGFjdGl2ZSA9IGN1cnJlbnRQYWdlID09PSBwbGVuZ3RoID8gJ2lzQWN0aXZlJyA6ICcnO1xyXG4gICAgICAgICAgICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INGC0LXQsyA8bGk+INGBINC90L7QvNC10YDQvtC8INGB0YLRgNCw0L3QuNGG0YtcclxuICAgICAgICAgICAgICAgIGxpVGFnICs9IGA8bGkgY2xhc3M9XCJwYWdpbmF0aW9uX19wYWdpbmF0aW9uLWl0ZW0gIHBhZ2luYXRpb25fX3BhZ2luYXRpb24taXRlbS0tbnVtYiAke2FjdGl2ZX1cIj48c3Bhbj4ke3BsZW5ndGh9PC9zcGFuPjwvbGk+YDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g0JXRgdC70Lgg0LXRgdGC0Ywg0YHRgtGA0LDQvdC40YbRiyDQv9C+0YHQu9C1INGC0LXQutGD0YnQtdC5LCDQtNC+0LHQsNCy0LvRj9C10LwgXCIuLi5cIiDQuCDQv9C+0YHQu9C10LTQvdGO0Y4g0YHRgtGA0LDQvdC40YbRg1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPCB0b3RhbFBhZ2VzIC0gc2lkZU51bWJlcnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA8IHRvdGFsUGFnZXMgLSBzaWRlTnVtYmVycyAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaVRhZyArPSBgPGxpIGNsYXNzPVwicGFnaW5hdGlvbl9fcGFnaW5hdGlvbi1pdGVtIHBhZ2luYXRpb25fX3BhZ2luYXRpb24taXRlbS0tZG90c1wiPjxzcGFuPi4uLjwvc3Bhbj48L2xpPmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsaVRhZyArPSBgPGxpIGNsYXNzPVwicGFnaW5hdGlvbl9fcGFnaW5hdGlvbi1pdGVtICBwYWdpbmF0aW9uX19wYWdpbmF0aW9uLWl0ZW0tLW51bWJcIj48c3Bhbj4ke3RvdGFsUGFnZXN9PC9zcGFuPjwvbGk+YDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g0JXRgdC70Lgg0YLQtdC60YPRidCw0Y8g0YHRgtGA0LDQvdC40YbQsCDQvdC1INC/0L7RgdC70LXQtNC90Y/Rjywg0LTQvtCx0LDQstC70Y/QtdC8INC60L3QvtC/0LrRgyBcIk5leHRcIlxyXG4gICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPCB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBsaVRhZyArPSBgPGJ1dHRvbiBjbGFzcz1cInBhZ2luYXRpb25fX3BhZ2luYXRpb24tYnRuICBwYWdpbmF0aW9uX19wYWdpbmF0aW9uLWJ0bi0tbmV4dFwiPjxzcGFuIHN0eWxlPSdkaXNwbGF5OmZsZXg7Z2FwOjFyZW07YWxpZ24taXRlbXM6Y2VudGVyOyc+0KHQu9C10LTRg9GO0YnQsNGPIDxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAxMiAxMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gIDxwYXRoIGQ9XCJNMS4zMzM1IDYuMDAwMTZIMTAuNjY2OE0xMC42NjY4IDYuMDAwMTZMNi4wMDAxNiAxLjMzMzVNMTAuNjY2OCA2LjAwMDE2TDYuMDAwMTYgMTAuNjY2OFwiIHN0cm9rZT1cIiMxRTFFMUVcIiBzdHJva2Utd2lkdGg9XCIxLjZcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiAvPlxyXG48L3N2Zz48L3NwYW4+PC9idXR0b24+YDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxpVGFnICs9IGA8YnV0dG9uIGRpc2FibGVkIGNsYXNzPVwicGFnaW5hdGlvbl9fcGFnaW5hdGlvbi1idG4gICBwYWdpbmF0aW9uX19wYWdpbmF0aW9uLWJ0bi0tbmV4dFwiPjxzcGFuIHN0eWxlPSdkaXNwbGF5OmZsZXg7Z2FwOjFyZW07YWxpZ24taXRlbXM6Y2VudGVyOyc+0KHQu9C10LTRg9GO0YnQsNGPIDxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCAxMiAxMlwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gIDxwYXRoIGQ9XCJNMS4zMzM1IDYuMDAwMTZIMTAuNjY2OE0xMC42NjY4IDYuMDAwMTZMNi4wMDAxNiAxLjMzMzVNMTAuNjY2OCA2LjAwMDE2TDYuMDAwMTYgMTAuNjY2OFwiIHN0cm9rZT1cIiMxRTFFMUVcIiBzdHJva2Utd2lkdGg9XCIxLjZcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiAvPlxyXG48L3N2Zz48L3NwYW4+PC9idXR0b24+YDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0YHQs9C10L3QtdGA0LjRgNC+0LLQsNC90L3Rg9GOINGA0LDQt9C80LXRgtC60YMg0LLQvdGD0YLRgNGMINGN0LvQtdC80LXQvdGC0LAg0YEg0LrQu9Cw0YHRgdC+0LwgJ3BhZ2luYXRpb24gdWwnXHJcblxyXG4gICAgICAgICAgICAvLyBlbGVtZW50LmlubmVySFRNTCA9IGxpVGFnO1xyXG5cclxuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBsaVRhZztcclxuXHJcbiAgICAgICAgICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INGB0L7QsdGL0YLQuNC5INC/0L7RgdC70LUg0L7QsdC90L7QstC70LXQvdC40Y8gSFRNTFxyXG4gICAgICAgICAgICBhZGRFdmVudExpc3RlbmVycygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g0KTRg9C90LrRhtC40Y8g0LTQu9GPINC00L7QsdCw0LLQu9C10L3QuNGPINC+0LHRgNCw0LHQvtGC0YfQuNC60L7QsiDRgdC+0LHRi9GC0LjQuSDQvdCwINGN0LvQtdC80LXQvdGC0Ysg0L/QsNCz0LjQvdCw0YbQuNC4XHJcbiAgICAgICAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgICAgIC8vINCf0L7Qu9GD0YfQsNC10Lwg0LLRgdC1INGN0LvQtdC80LXQvdGC0Ysg0YEg0LrQu9Cw0YHRgdCw0LzQuCAnbnVtYicsICdwcmV2JyDQuCAnbmV4dCdcclxuICAgICAgICAgICAgY29uc3QgcGFnZUxpbmtzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAgICAgJy5wYWdpbmF0aW9uX19wYWdpbmF0aW9uLWl0ZW0tLW51bWIsIC5wYWdpbmF0aW9uX19wYWdpbmF0aW9uLWJ0bi0tcHJldiwgLnBhZ2luYXRpb25fX3BhZ2luYXRpb24tYnRuLS1uZXh0J1xyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8g0JTQu9GPINC60LDQttC00L7Qs9C+INGN0LvQtdC80LXQvdGC0LAg0LTQvtCx0LDQstC70Y/QtdC8INC+0LHRgNCw0LHQvtGC0YfQuNC6INGB0L7QsdGL0YLQuNGPINC/0YDQuCDQutC70LjQutC1XHJcbiAgICAgICAgICAgIHBhZ2VMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vINCf0L7Qu9GD0YfQsNC10Lwg0L3QvtC80LXRgCDRgdGC0YDQsNC90LjRhtGLINC40Lcg0YLQtdC60YHRgtCwINGN0LvQtdC80LXQvdGC0LAsINC90LAg0LrQvtGC0L7RgNGL0Lkg0LrQu9C40LrQvdGD0LvQuFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2VOdW1iZXIgPSBwYXJzZUludCh0aGlzLnRleHRDb250ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0J7QsdC90L7QstC70Y/QtdC8INGC0LXQutGD0YnRg9GOINGB0YLRgNCw0L3QuNGG0YMg0LIg0LfQsNCy0LjRgdC40LzQvtGB0YLQuCDQvtGCINC00LXQudGB0YLQstC40Y8g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihwYWdlTnVtYmVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZSA9IHBhZ2VOdW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygncGFnaW5hdGlvbl9fcGFnaW5hdGlvbi1idG4tLXByZXYnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UGFnZS0tO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2luYXRpb25fX3BhZ2luYXRpb24tYnRuLS1uZXh0JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2UrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vINCT0LXQvdC10YDQuNGA0YPQtdC8INC/0LDQs9C40L3QsNGG0LjRjiDRgSDQvtCx0L3QvtCy0LvQtdC90L3Ri9C80Lgg0LfQvdCw0YfQtdC90LjRj9C80LhcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVQYWdpbmF0aW9uKHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vINCS0YvQt9GL0LLQsNC10Lwg0YTRg9C90LrRhtC40Y4g0YHQvtC30LTQsNC90LjRjyDQv9Cw0LPQuNC90LDRhtC40Lgg0L/RgNC4INC30LDQs9GA0YPQt9C60LUg0YHRgtGA0LDQvdC40YbRi1xyXG4gICAgICAgIGNyZWF0ZVBhZ2luYXRpb24odG90YWxQYWdlcywgY3VycmVudFBhZ2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwYWdpbmF0aW9uKCcucGFnaW5hdGlvbl9fcGFnaW5hdGlvbi0tMScsIDY4LCAxKTtcclxuICAgIHBhZ2luYXRpb24oJy5wYWdpbmF0aW9uX19wYWdpbmF0aW9uLS0yJywgMTQsIDUpO1xyXG4gICAgcGFnaW5hdGlvbignLnBhZ2luYXRpb25fX3BhZ2luYXRpb24tLTMnLCAyMSwgOSk7XHJcbiAgICBwYWdpbmF0aW9uKCcucGFnaW5hdGlvbl9fcGFnaW5hdGlvbi0tNCcsIDMxLCAxNSk7XHJcbiAgICBwYWdpbmF0aW9uKCcucGFnaW5hdGlvbl9fcGFnaW5hdGlvbi0tNScsIDYsIDEpO1xyXG4gICAgcGFnaW5hdGlvbignLnBhZ2luYXRpb25fX3BhZ2luYXRpb24tLTYnLCAyOCwgMyk7XHJcbiAgICBwYWdpbmF0aW9uKCcucGFnaW5hdGlvbl9fcGFnaW5hdGlvbi0tNycsIDQ0LCAxNSk7XHJcbiAgICBwYWdpbmF0aW9uKCcucGFnaW5hdGlvbl9fcGFnaW5hdGlvbi0tOCcsIDIyLCAzKTtcclxuICAgIHBhZ2luYXRpb24oJy5wYWdpbmF0aW9uX19wYWdpbmF0aW9uLS05JywgNjEsIDI1KTtcclxuICAgIHBhZ2luYXRpb24oJy5wYWdpbmF0aW9uX19wYWdpbmF0aW9uLS0xMCcsIDE2LCAxKTtcclxuXHJcblxyXG4gICAgY29uc3QgZHJvcERvd25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2luYXRpb25fX29yZGVyLWRyb3Bkb3duJyk7XHJcbiAgICBkcm9wRG93bnMuZm9yRWFjaChkcm9wZG93bj0+e1xyXG4gICAgICAgIGNvbnN0ICB0ZXh0ID0gZHJvcGRvd24ucXVlcnlTZWxlY3RvcignLnBhZ2luYXRpb25fX29yZGVyLWRyb3Bkb3duLWhlYWRlci10ZXh0Jyk7XHJcbiAgICAgICAgY29uc3QgIGlucHV0cyA9IGRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdpbmF0aW9uX19vcmRlci1kcm9wZG93bi1pdGVtIGxhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyRHJvcGRvd24gPSBkcm9wZG93bi5xdWVyeVNlbGVjdG9yKCcucGFnaW5hdGlvbl9fb3JkZXItZHJvcGRvd24taGVhZGVyLWJveCcpXHJcbiAgICAgICAgY29uc3QgZHJvcGRvd25MaXN0Qm94ID0gZHJvcGRvd24ucXVlcnlTZWxlY3RvcignLnBhZ2luYXRpb25fX29yZGVyLWRyb3Bkb3duLWxpc3QtYm94JylcclxuXHJcblxyXG4gICAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0PT57XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbnB1dElubmVyID0gaW5wdXQucXVlcnlTZWxlY3RvcignaW5wdXQnKVxyXG4gICAgICAgICAgICBpZiAoaW5wdXRJbm5lci5jaGVja2VkICkge1xyXG4gICAgICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IGlucHV0LnBhcmVudEVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGhlYWRlckRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xyXG4gICAgICAgICAgICBkcm9wZG93bkxpc3RCb3guY2xhc3NMaXN0LnRvZ2dsZSgnaXNBY3RpdmUnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0PT57XHJcblxyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gaW5wdXQucGFyZW50RWxlbWVudC50ZXh0Q29udGVudC50cmltKClcclxuICAgICAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IHZhbHVlXHJcbiAgICAgICAgICAgIGRyb3Bkb3duTGlzdEJveC5jbGFzc0xpc3QucmVtb3ZlKCdpc0FjdGl2ZScpXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgfSlcclxufTtcclxuXHJcbi8vINCt0LrRgdC/0L7RgNGC0LjRgNGD0LXQvCDRhNGD0L3QutGG0LjRjiBndWVzdHNcclxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyUGFnaW5hdGlvbjtcclxuIiwiZnVuY3Rpb24gZmlsdGVyVGFicygpIHtcclxuICAgIGZ1bmN0aW9uIHRhYnMoc2VsZWN0b3IpIHtcclxuICAgICAgICBjb25zdCB0YWJzRGVzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7c2VsZWN0b3J9IC5tYWluX190YWItYnRuYCk7XHJcbiAgICAgICAgY29uc3QgaW5mb0JveERlc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke3NlbGVjdG9yfSAubWFpbl9fdGFiLXN0YXR1c2ApO1xyXG5cclxuXHJcbiAgICAgICAgdGFic0Rlc2suZm9yRWFjaCgodGFiLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIGluZm9Cb3hEZXNrLmZvckVhY2goKGlubmVySW5mb0JveCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaW5uZXJJbmZvQm94LnN0eWxlLnRyYW5zaXRpb24gPSAndmlzaWJpbGl0eSAwLjVzLCBvcGFjaXR5IDAuNXMnO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRhYnNEZXNrLmZvckVhY2goKGlubmVyVGFiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJUYWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBpbmZvQm94RGVzay5mb3JFYWNoKChpbm5lckluZm9Cb3gpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpbm5lckluZm9Cb3guY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpbmZvQm94RGVza1tpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0YWJzKGAubWFpbl9fdGFiLWl0ZW0tLTFgKSBcclxuICAgIHRhYnMoYC5tYWluX190YWItaXRlbS0tMmApIFxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZpbHRlclRhYnM7XHJcbiIsImZ1bmN0aW9uIHJldmlld01vZGFsKCkge1xyXG4gICAgZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XHJcbiAgICAgICAgY29uc3QgZ2V0U2Nyb2xsYmFyV2lkdGggPSAoKSA9PiB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgICBsZXQgc2Nyb2xsV2l0aCA9IGdldFNjcm9sbGJhcldpZHRoKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHtzY3JvbGxXaXRofXB4YDtcclxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdpc0FjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsKSB7XHJcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaXNBY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGBgO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgIH1cclxuICAgIGNvbnN0IHJldmlld0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mZWVkYmFjaycpO1xyXG4gICAgY29uc3QgcmV2aWV3TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmV2aWV3TW9kYWxfX3dyYXBwZXInKTtcclxuICAgIGNvbnN0IHJldmlld01vZGFsQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmV2aWV3TW9kYWxfX3JlamVjdCcpO1xyXG5cclxuICAgIGNvbnN0IHN1Y2Nlc3NSZXZpZXdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmV2aWV3TW9kYWxfX3N1Ym1pdCcpO1xyXG4gICAgY29uc3Qgc3VjY2Vzc1Jldmlldk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Y2Nlc3NSZXZpZXdNb2RhbF9fd3JhcHBlcicpO1xyXG5cclxuICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Y2Nlc3NNb2RhbF9fYnRuJyk7XHJcblxyXG4gICAgcmV2aWV3QnRuLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgb3Blbk1vZGFsKHJldmlld01vZGFsKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmlld01vZGFsQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjbG9zZU1vZGFsKHJldmlld01vZGFsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldmlld01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXZpZXdNb2RhbF9fd3JhcHBlcicpKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTW9kYWwocmV2aWV3TW9kYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHN1Y2Nlc3NSZXZpZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjbG9zZU1vZGFsKHJldmlld01vZGFsKTtcclxuICAgICAgICBvcGVuTW9kYWwoc3VjY2Vzc1Jldmlldk1vZGFsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHN1Y2Nlc3NSZXZpZXZNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3VjY2Vzc1Jldmlld01vZGFsX193cmFwcGVyJykpIHtcclxuICAgICAgICAgICAgY2xvc2VNb2RhbChzdWNjZXNzUmV2aWV2TW9kYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY2xvc2VNb2RhbChzdWNjZXNzUmV2aWV2TW9kYWwpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJldmlld01vZGFsO1xyXG4iLCJcclxuZnVuY3Rpb24gYWRkU21vb3RoKGl0ZW0pe1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtpdGVtfWApLmZvckVhY2goKGlubmVySW5mb0JveCkgPT4ge1xyXG4gICAgICAgIGlubmVySW5mb0JveC5zdHlsZS50cmFuc2l0aW9uID0gJ29wYWNpdHkgMC41cywgdmlzaWJpbGl0eSAwLjVzJ1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkU21vb3RoIiwiY29uc3QgYnVyZ2VyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcicpO1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2Jyk7XHJcblxyXG4gICAgY29uc3QgZ2V0U2Nyb2xsYmFyV2lkdGggPSAoKSA9PiB3aW5kb3cuaW5uZXJXaWR0aCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuQnVyZ2VyKCkge1xyXG4gICAgICAgIGxldCBzY3JvbGxXaXRoID0gZ2V0U2Nyb2xsYmFyV2lkdGgoKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7c2Nyb2xsV2l0aH1weGA7XHJcblxyXG4gICAgICAgIGJ1cmdlci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBidXJnZXIuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7c2Nyb2xsV2l0aH1weGA7XHJcblxyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZUJ1cmdlcigpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcclxuXHJcbiAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGJ1cmdlci5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgYDtcclxuXHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgPyBjbG9zZUJ1cmdlcigpIDogb3BlbkJ1cmdlcigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBvdmVybGF5KSB7XHJcbiAgICAgICAgICAgIGNsb3NlQnVyZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgbmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoZWFkZXItdG9wX19uYXYtbGluaycpKSB7XHJcbiAgICAgICAgICAgIGNsb3NlQnVyZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBidXJnZXI7XHJcbiIsImltcG9ydCAnLi9pbmRleC5zY3NzJztcbi8vIGltcG9ydCByZXNlcnZhdGlvblNlbGVjdCBmcm9tICcuL2pzL2NvbXBvbmVudHMvcmVzZXJ2YXRpb25TZWxlY3QnO1xuaW1wb3J0IG1haW5UYWJzIGZyb20gJy4vanMvY29tcG9uZW50cy9tYWluVGFicyc7XG5pbXBvcnQgZmlsdGVyTW9kYWwgZnJvbSAnLi9qcy9jb21wb25lbnRzL2ZpbHRlck1vZGFsJztcbmltcG9ydCB7bWFpbk1vZGFsVGFicyxtYWluTW9kYWxPcGVufSBmcm9tICcuL2pzL2NvbXBvbmVudHMvZmlsdGVyTWFpbk1vZGFsJztcbmltcG9ydCBmb290ZXJQYWdpbmF0aW9uIGZyb20gJy4vanMvY29tcG9uZW50cy9wYWdpbmF0aW9uJztcbmltcG9ydCBmaWx0ZXJUYWJzIGZyb20gJy4vanMvY29tcG9uZW50cy9maWx0ZXJUYWJzJztcbmltcG9ydCByZXZpZXdNb2RhbCBmcm9tICcuL2pzL2NvbXBvbmVudHMvcmV2aWV3TW9kYWwnO1xuaW1wb3J0IGFkZFNtb290aCBmcm9tICcuL2pzL2NvbXBvbmVudHMvaG92ZXJUcmFuc2l0aW9uJztcbmltcG9ydCBidXJnZXIgZnJvbSAnLi9qcy9jb21wb25lbnRzL2J1cmdlcic7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIHRyeXtcbiAgICAgICAgbWFpblRhYnMoKTtcbiAgICB9Y2F0Y2h7fVxuICAgIHRyeXtcbiAgICAgICAgZmlsdGVyTW9kYWwoKTtcbiAgICB9Y2F0Y2h7fVxuICAgIHRyeXtcbiAgICAgICAgbWFpbk1vZGFsVGFicygpO1xuICAgIH1jYXRjaHt9XG4gICAgdHJ5e1xuICAgICAgICBtYWluTW9kYWxPcGVuKCk7XG4gICAgfWNhdGNoe31cbiAgICB0cnl7XG4gICAgICAgIGZvb3RlclBhZ2luYXRpb24oKTtcbiAgICB9Y2F0Y2h7fVxuICAgIHRyeXtcbiAgICAgICAgZmlsdGVyVGFicygpO1xuICAgIH1jYXRjaHt9XG4gICAgdHJ5e1xuICAgICAgICBidXJnZXIoKTtcbiAgICB9Y2F0Y2h7fVxuICAgIHRyeXtcbiAgICAgICAgcmV2aWV3TW9kYWwoKTtcbiAgICB9Y2F0Y2h7fVxuICAgIHRyeXtcbiAgICAgICAgYWRkU21vb3RoKCcubWFpbl9fdGFiLWl0ZW0nKVxuICAgICAgICBhZGRTbW9vdGgoJy5tYWluX190YWItc3RhdHVzLXRpdGxlLXByb2R1Y3QtbGlzdC1pdGVtLWxpbmstaG92ZXInKVxuICAgIH1jYXRjaHt9XG59KTtcblxuXG5cbiJdLCJuYW1lcyI6WyJtYWluVGFicyIsInRhYnNEZXNrIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5mb0JveERlc2siLCJmb3JFYWNoIiwidGFiIiwiaSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbm5lclRhYiIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImlubmVySW5mb0JveCIsImZpbHRlck1vZGFsIiwiYnRucyIsIm1vZGFsIiwiY2xvc2VCdG4iLCJidG4iLCJ0b2dnbGUiLCJtYWluTW9kYWxPcGVuIiwiZmlsdGVyQnRuIiwiaXRlbSIsInBhcmVudEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWFpbk1vZGFsVGFicyIsImZpbHRlck9wdGlvbiIsImZvb3RlclBhZ2luYXRpb24iLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvblNlbGVjdG9yIiwidG90YWxQYWdlcyIsImN1cnJlbnRQYWdlIiwiZWxlbWVudCIsImNyZWF0ZVBhZ2luYXRpb24iLCJsaVRhZyIsImFjdGl2ZSIsInNpZGVOdW1iZXJzIiwiYmVmb3JlUGFnZSIsIk1hdGgiLCJtYXgiLCJhZnRlclBhZ2UiLCJtaW4iLCJwbGVuZ3RoIiwiaW5uZXJIVE1MIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJwYWdlTGlua3MiLCJsaW5rIiwicGFnZU51bWJlciIsInBhcnNlSW50IiwidGV4dENvbnRlbnQiLCJpc05hTiIsImNvbnRhaW5zIiwiZHJvcERvd25zIiwiZHJvcGRvd24iLCJ0ZXh0IiwiaW5wdXRzIiwiaGVhZGVyRHJvcGRvd24iLCJkcm9wZG93bkxpc3RCb3giLCJpbnB1dCIsImlucHV0SW5uZXIiLCJjaGVja2VkIiwidHJpbSIsInZhbHVlIiwiZmlsdGVyVGFicyIsInRhYnMiLCJzZWxlY3RvciIsInN0eWxlIiwidHJhbnNpdGlvbiIsInJldmlld01vZGFsIiwib3Blbk1vZGFsIiwiZ2V0U2Nyb2xsYmFyV2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJzY3JvbGxXaXRoIiwiYm9keSIsInBhZGRpbmdSaWdodCIsIm92ZXJmbG93IiwiY2xvc2VNb2RhbCIsInJldmlld0J0biIsInJldmlld01vZGFsQ2xvc2VCdG4iLCJzdWNjZXNzUmV2aWV3QnRuIiwic3VjY2Vzc1Jldmlldk1vZGFsIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiYWRkU21vb3RoIiwiYnVyZ2VyIiwibmF2Iiwib3BlbkJ1cmdlciIsImNsb3NlQnVyZ2VyIiwib3ZlcmxheSJdLCJzb3VyY2VSb290IjoiIn0=