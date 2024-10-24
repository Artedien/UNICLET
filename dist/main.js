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
  const btn = document.querySelector('.main__tab-status-title-status-image');
  const modal = document.querySelector('.filter__modal-wrapper');
  const closeBtn = document.querySelector('.filter__modal-close-box');
  btn.addEventListener('click', () => {
    modal.classList.toggle('active');
  });
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b21wb25lbnRzL21haW5UYWJzLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9jb21wb25lbnRzL2ZpbHRlck1vZGFsLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9jb21wb25lbnRzL2ZpbHRlck1haW5Nb2RhbC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvanMvY29tcG9uZW50cy9wYWdpbmF0aW9uLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9jb21wb25lbnRzL2ZpbHRlclRhYnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2NvbXBvbmVudHMvcmV2aWV3TW9kYWwuanMiLCJ3ZWJwYWNrOi8vd2VicGFja19leGFtcGxlLy4vc3JjL2pzL2NvbXBvbmVudHMvaG92ZXJUcmFuc2l0aW9uLmpzIiwid2VicGFjazovL3dlYnBhY2tfZXhhbXBsZS8uL3NyYy9qcy9jb21wb25lbnRzL2J1cmdlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX2V4YW1wbGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbWFpblRhYnMoKSB7XHJcbiAgICBjb25zdCB0YWJzRGVzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluX190YWItdGl0bGUnKTtcclxuICAgIGNvbnN0IGluZm9Cb3hEZXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW5fX3RhYi1pdGVtJyk7XHJcbiAgICAvLyBpbmZvQm94RGVzay5mb3JFYWNoKChpbm5lckluZm9Cb3gpID0+IHtcclxuICAgIC8vICAgICBpbm5lckluZm9Cb3guc3R5bGUudHJhbnNpdGlvbiA9ICd2aXNpYmlsaXR5IDAuNXMsIG9wYWNpdHkgMC41cydcclxuICAgIC8vIH0pO1xyXG5cclxuXHJcbiAgICB0YWJzRGVzay5mb3JFYWNoKCh0YWIsIGkpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRhYnNEZXNrLmZvckVhY2goKGlubmVyVGFiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpbm5lclRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGluZm9Cb3hEZXNrLmZvckVhY2goKGlubmVySW5mb0JveCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaW5uZXJJbmZvQm94LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGluZm9Cb3hEZXNrW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW5UYWJzO1xyXG4iLCJmdW5jdGlvbiBmaWx0ZXJNb2RhbCgpIHtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX190YWItc3RhdHVzLXRpdGxlLXN0YXR1cy1pbWFnZScpO1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19tb2RhbC13cmFwcGVyJyk7XHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXJfX21vZGFsLWNsb3NlLWJveCcpXHJcblxyXG4gICAgXHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICBcclxuICAgIH0pO1xyXG5cclxuICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaWx0ZXJNb2RhbDtcclxuIiwiZnVuY3Rpb24gbWFpbk1vZGFsT3BlbigpIHtcclxuICAgIGNvbnN0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluX190YWItb3B0aW9uLWZpbHRlci1idG4nKTtcclxuXHJcbiAgICBmaWx0ZXJCdG4uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19tYWluLWJveCcpLmNsYXNzTGlzdC50b2dnbGUoJ2lzQWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFpbk1vZGFsVGFicygpIHtcclxuICAgIGNvbnN0IHRhYnNEZXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcl9fbWFpbi10YWItaXRlbScpO1xyXG4gICAgY29uc3QgaW5mb0JveERlc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19tYWluLXRhYi1pdGVtJyk7XHJcbiAgICBjb25zdCBmaWx0ZXJPcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19tYWluLW9wdGlvbicpO1xyXG5cclxuICAgIHRhYnNEZXNrLmZvckVhY2goKHRhYiwgaSkgPT4ge1xyXG4gICAgICAgIGluZm9Cb3hEZXNrLmZvckVhY2goKCkgPT4ge30pO1xyXG5cclxuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRhYnNEZXNrLmZvckVhY2goKGlubmVyVGFiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpbm5lclRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBmaWx0ZXJPcHRpb24uZm9yRWFjaCgoaW5uZXJUYWIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlubmVyVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2lzQWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBpbmZvQm94RGVzay5mb3JFYWNoKChpbm5lckluZm9Cb3gpID0+IHtcclxuICAgICAgICAgICAgICAgIGlubmVySW5mb0JveC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpbmZvQm94RGVza1tpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgZmlsdGVyT3B0aW9uW2ldLmNsYXNzTGlzdC5hZGQoJ2lzQWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgbWFpbk1vZGFsVGFicywgbWFpbk1vZGFsT3BlbiB9O1xyXG4iLCJjb25zdCBmb290ZXJQYWdpbmF0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcGFnaW5hdGlvbiA9IChwYWdpbmF0aW9uU2VsZWN0b3IsIHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlKSA9PiB7XHJcbiAgICAgICAgLy8g0JLRi9Cx0LjRgNCw0LXQvCDRjdC70LXQvNC10L3RgiDRgSDQutC70LDRgdGB0L7QvCAncGFnaW5hdGlvbiB1bCcg0LIgRE9NXHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFnaW5hdGlvblNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgLy8g0JfQsNC00LDQtdC8INC+0LHRidC10LUg0LrQvtC70LjRh9C10YHRgtCy0L4g0YHRgtGA0LDQvdC40YYg0Lgg0YLQtdC60YPRidGD0Y4g0YHRgtGA0LDQvdC40YbRg1xyXG5cclxuICAgICAgICAvLyDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0LPQtdC90LXRgNCw0YbQuNC4INGA0LDQt9C80LXRgtC60Lgg0L/QsNCz0LjQvdCw0YbQuNC4XHJcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUGFnaW5hdGlvbih0b3RhbFBhZ2VzLCBjdXJyZW50UGFnZSkge1xyXG4gICAgICAgICAgICAvLyDQmNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdC8INC/0YPRgdGC0YPRjiDRgdGC0YDQvtC60YMg0LTQu9GPINGA0LDQt9C80LXRgtC60LhcclxuICAgICAgICAgICAgbGV0IGxpVGFnID0gJyc7XHJcblxyXG4gICAgICAgICAgICAvLyDQn9C10YDQtdC80LXQvdC90LDRjyDQtNC70Y8g0L7RgtGB0LvQtdC20LjQstCw0L3QuNGPINCw0LrRgtC40LLQvdC+0Lkg0YHRgtGA0LDQvdC40YbRi1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZlO1xyXG5cclxuICAgICAgICAgICAgLy8g0J7Qv9GA0LXQtNC10LvRj9C10Lwg0YHQutC+0LvRjNC60L4g0YbQuNGE0YAg0L7RgtC+0LHRgNCw0LbQsNGC0Ywg0YEg0LrQsNC20LTQvtC5INGB0YLQvtGA0L7QvdGLXHJcbiAgICAgICAgICAgIGNvbnN0IHNpZGVOdW1iZXJzID0gMjtcclxuXHJcbiAgICAgICAgICAgIC8vINCS0YvRh9C40YHQu9GP0LXQvCDRgdGC0YDQsNC90LjRhtGLLCDQutC+0YLQvtGA0YvQtSDQsdGD0LTRg9GCINC+0YLQvtCx0YDQsNC20LXQvdGLINC/0LXRgNC10LQg0Lgg0L/QvtGB0LvQtSDRgtC10LrRg9GJ0LXQuSDRgdGC0YDQsNC90LjRhtGLXHJcbiAgICAgICAgICAgIGxldCBiZWZvcmVQYWdlID0gTWF0aC5tYXgoY3VycmVudFBhZ2UgLSBzaWRlTnVtYmVycywgMSk7XHJcbiAgICAgICAgICAgIGxldCBhZnRlclBhZ2UgPSBNYXRoLm1pbihjdXJyZW50UGFnZSArIHNpZGVOdW1iZXJzLCB0b3RhbFBhZ2VzKTtcclxuXHJcbiAgICAgICAgICAgIC8vINCV0YHQu9C4INGC0LXQutGD0YnQsNGPINGB0YLRgNCw0L3QuNGG0LAg0L3QtSDQv9C10YDQstCw0Y8sINC00L7QsdCw0LLQu9GP0LXQvCDQutC90L7Qv9C60YMgXCJQcmV2XCJcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlID4gMSkge1xyXG4gICAgICAgICAgICAgICAgbGlUYWcgKz0gYDxidXR0b24gY2xhc3M9XCJwYWdpbmF0aW9uX19wYWdpbmF0aW9uLWJ0biAgcGFnaW5hdGlvbl9fcGFnaW5hdGlvbi1idG4tLXByZXZcIj48c3BhbiBzdHlsZT0nZGlzcGxheTpmbGV4O2dhcDoxcmVtO2FsaWduLWl0ZW1zOmNlbnRlcjsnPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiB2aWV3Qm94PVwiMCAwIDEyIDEyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgPHBhdGggZD1cIk0xMC42NjY4IDYuMDAwMTZIMS4zMzM1TTEuMzMzNSA2LjAwMDE2TDYuMDAwMTYgMTAuNjY2OE0xLjMzMzUgNi4wMDAxNkw2LjAwMDE2IDEuMzMzNVwiIHN0cm9rZT1cIiMxRTFFMUVcIiBzdHJva2Utd2lkdGg9XCIxLjZcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiAvPlxyXG48L3N2Zz4gXHJcbtCf0YDQtdC00YvQtNGD0YnQsNGPPC9zcGFuPjwvYnV0dG9uPmA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsaVRhZyArPSBgPGJ1dHRvbiBkaXNhYmxlZCBjbGFzcz1cInBhZ2luYXRpb25fX3BhZ2luYXRpb24tYnRuICBwYWdpbmF0aW9uX19wYWdpbmF0aW9uLWJ0bi0tcHJldlwiPjxzcGFuIHN0eWxlPSdkaXNwbGF5OmZsZXg7Z2FwOjFyZW07YWxpZ24taXRlbXM6Y2VudGVyOyc+PHN2ZyB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiB2aWV3Qm94PVwiMCAwIDEyIDEyXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgPHBhdGggZD1cIk0xMC42NjY4IDYuMDAwMTZIMS4zMzM1TTEuMzMzNSA2LjAwMDE2TDYuMDAwMTYgMTAuNjY2OE0xLjMzMzUgNi4wMDAxNkw2LjAwMDE2IDEuMzMzNVwiIHN0cm9rZT1cIiMxRTFFMUVcIiBzdHJva2Utd2lkdGg9XCIxLjZcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiAvPlxyXG48L3N2Zz4g0J/RgNC10LTRi9C00YPRidCw0Y88L3NwYW4+PC9idXR0b24+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDQldGB0LvQuCDQtdGB0YLRjCDRgdGC0YDQsNC90LjRhtGLINC/0LXRgNC10LQg0YLQtdC60YPRidC10LksINC00L7QsdCw0LLQu9GP0LXQvCBcIi4uLlwiINC4INC/0LXRgNCy0YPRjiDRgdGC0YDQsNC90LjRhtGDXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA+IHNpZGVOdW1iZXJzICsgMSkge1xyXG4gICAgICAgICAgICAgICAgbGlUYWcgKz0gYDxsaSBjbGFzcz1cInBhZ2luYXRpb25fX3BhZ2luYXRpb24taXRlbSAgcGFnaW5hdGlvbl9fcGFnaW5hdGlvbi1pdGVtLS1udW1iXCI+PHNwYW4+MTwvc3Bhbj48L2xpPmA7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPiBzaWRlTnVtYmVycyArIDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaVRhZyArPSBgPGxpIGNsYXNzPVwicGFnaW5hdGlvbl9fcGFnaW5hdGlvbi1pdGVtICBwYWdpbmF0aW9uX19wYWdpbmF0aW9uLWl0ZW0tLWRvdHNcIj48c3Bhbj4uLi48L3NwYW4+PC9saT5gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDQk9C10L3QtdGA0LjRgNGD0LXQvCDRgNCw0LfQvNC10YLQutGDINC00LvRjyDRgdGC0YDQsNC90LjRhiwg0LrQvtGC0L7RgNGL0LUg0LHRg9C00YPRgiDQvtGC0L7QsdGA0LDQttC10L3RiyDQv9C10YDQtdC0INC4INC/0L7RgdC70LUg0YLQtdC60YPRidC10Lkg0YHRgtGA0LDQvdC40YbRi1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwbGVuZ3RoID0gYmVmb3JlUGFnZTsgcGxlbmd0aCA8PSBhZnRlclBhZ2U7IHBsZW5ndGgrKykge1xyXG4gICAgICAgICAgICAgICAgLy8g0J7Qv9GA0LXQtNC10LvRj9C10Lwg0LDQutGC0LjQstC90YPRjiDRgdGC0YDQsNC90LjRhtGDXHJcbiAgICAgICAgICAgICAgICBhY3RpdmUgPSBjdXJyZW50UGFnZSA9PT0gcGxlbmd0aCA/ICdpc0FjdGl2ZScgOiAnJztcclxuICAgICAgICAgICAgICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDRgtC10LMgPGxpPiDRgSDQvdC+0LzQtdGA0L7QvCDRgdGC0YDQsNC90LjRhtGLXHJcbiAgICAgICAgICAgICAgICBsaVRhZyArPSBgPGxpIGNsYXNzPVwicGFnaW5hdGlvbl9fcGFnaW5hdGlvbi1pdGVtICBwYWdpbmF0aW9uX19wYWdpbmF0aW9uLWl0ZW0tLW51bWIgJHthY3RpdmV9XCI+PHNwYW4+JHtwbGVuZ3RofTwvc3Bhbj48L2xpPmA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vINCV0YHQu9C4INC10YHRgtGMINGB0YLRgNCw0L3QuNGG0Ysg0L/QvtGB0LvQtSDRgtC10LrRg9GJ0LXQuSwg0LTQvtCx0LDQstC70Y/QtdC8IFwiLi4uXCIg0Lgg0L/QvtGB0LvQtdC00L3RjtGOINGB0YLRgNCw0L3QuNGG0YNcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgdG90YWxQYWdlcyAtIHNpZGVOdW1iZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPCB0b3RhbFBhZ2VzIC0gc2lkZU51bWJlcnMgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlUYWcgKz0gYDxsaSBjbGFzcz1cInBhZ2luYXRpb25fX3BhZ2luYXRpb24taXRlbSBwYWdpbmF0aW9uX19wYWdpbmF0aW9uLWl0ZW0tLWRvdHNcIj48c3Bhbj4uLi48L3NwYW4+PC9saT5gO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGlUYWcgKz0gYDxsaSBjbGFzcz1cInBhZ2luYXRpb25fX3BhZ2luYXRpb24taXRlbSAgcGFnaW5hdGlvbl9fcGFnaW5hdGlvbi1pdGVtLS1udW1iXCI+PHNwYW4+JHt0b3RhbFBhZ2VzfTwvc3Bhbj48L2xpPmA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vINCV0YHQu9C4INGC0LXQutGD0YnQsNGPINGB0YLRgNCw0L3QuNGG0LAg0L3QtSDQv9C+0YHQu9C10LTQvdGP0Y8sINC00L7QsdCw0LLQu9GP0LXQvCDQutC90L7Qv9C60YMgXCJOZXh0XCJcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRQYWdlIDwgdG90YWxQYWdlcykge1xyXG4gICAgICAgICAgICAgICAgbGlUYWcgKz0gYDxidXR0b24gY2xhc3M9XCJwYWdpbmF0aW9uX19wYWdpbmF0aW9uLWJ0biAgcGFnaW5hdGlvbl9fcGFnaW5hdGlvbi1idG4tLW5leHRcIj48c3BhbiBzdHlsZT0nZGlzcGxheTpmbGV4O2dhcDoxcmVtO2FsaWduLWl0ZW1zOmNlbnRlcjsnPtCh0LvQtdC00YPRjtGJ0LDRjyA8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTIgMTJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICA8cGF0aCBkPVwiTTEuMzMzNSA2LjAwMDE2SDEwLjY2NjhNMTAuNjY2OCA2LjAwMDE2TDYuMDAwMTYgMS4zMzM1TTEwLjY2NjggNi4wMDAxNkw2LjAwMDE2IDEwLjY2NjhcIiBzdHJva2U9XCIjMUUxRTFFXCIgc3Ryb2tlLXdpZHRoPVwiMS42XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgLz5cclxuPC9zdmc+PC9zcGFuPjwvYnV0dG9uPmA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsaVRhZyArPSBgPGJ1dHRvbiBkaXNhYmxlZCBjbGFzcz1cInBhZ2luYXRpb25fX3BhZ2luYXRpb24tYnRuICAgcGFnaW5hdGlvbl9fcGFnaW5hdGlvbi1idG4tLW5leHRcIj48c3BhbiBzdHlsZT0nZGlzcGxheTpmbGV4O2dhcDoxcmVtO2FsaWduLWl0ZW1zOmNlbnRlcjsnPtCh0LvQtdC00YPRjtGJ0LDRjyA8c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxMlwiIHZpZXdCb3g9XCIwIDAgMTIgMTJcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICA8cGF0aCBkPVwiTTEuMzMzNSA2LjAwMDE2SDEwLjY2NjhNMTAuNjY2OCA2LjAwMDE2TDYuMDAwMTYgMS4zMzM1TTEwLjY2NjggNi4wMDAxNkw2LjAwMDE2IDEwLjY2NjhcIiBzdHJva2U9XCIjMUUxRTFFXCIgc3Ryb2tlLXdpZHRoPVwiMS42XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgLz5cclxuPC9zdmc+PC9zcGFuPjwvYnV0dG9uPmA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INGB0LPQtdC90LXRgNC40YDQvtCy0LDQvdC90YPRjiDRgNCw0LfQvNC10YLQutGDINCy0L3Rg9GC0YDRjCDRjdC70LXQvNC10L3RgtCwINGBINC60LvQsNGB0YHQvtC8ICdwYWdpbmF0aW9uIHVsJ1xyXG5cclxuICAgICAgICAgICAgLy8gZWxlbWVudC5pbm5lckhUTUwgPSBsaVRhZztcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gbGlUYWc7XHJcblxyXG4gICAgICAgICAgICAvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDRgdC+0LHRi9GC0LjQuSDQv9C+0YHQu9C1INC+0LHQvdC+0LLQu9C10L3QuNGPIEhUTUxcclxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vINCk0YPQvdC60YbQuNGPINC00LvRjyDQtNC+0LHQsNCy0LvQtdC90LjRjyDQvtCx0YDQsNCx0L7RgtGH0LjQutC+0LIg0YHQvtCx0YvRgtC40Lkg0L3QsCDRjdC70LXQvNC10L3RgtGLINC/0LDQs9C40L3QsNGG0LjQuFxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgICAgICAvLyDQn9C+0LvRg9GH0LDQtdC8INCy0YHQtSDRjdC70LXQvNC10L3RgtGLINGBINC60LvQsNGB0YHQsNC80LggJ251bWInLCAncHJldicg0LggJ25leHQnXHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VMaW5rcyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgICAgICcucGFnaW5hdGlvbl9fcGFnaW5hdGlvbi1pdGVtLS1udW1iLCAucGFnaW5hdGlvbl9fcGFnaW5hdGlvbi1idG4tLXByZXYsIC5wYWdpbmF0aW9uX19wYWdpbmF0aW9uLWJ0bi0tbmV4dCdcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vINCU0LvRjyDQutCw0LbQtNC+0LPQviDRjdC70LXQvNC10L3RgtCwINC00L7QsdCw0LLQu9GP0LXQvCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDRgdC+0LHRi9GC0LjRjyDQv9GA0Lgg0LrQu9C40LrQtVxyXG4gICAgICAgICAgICBwYWdlTGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDQn9C+0LvRg9GH0LDQtdC8INC90L7QvNC10YAg0YHRgtGA0LDQvdC40YbRiyDQuNC3INGC0LXQutGB0YLQsCDRjdC70LXQvNC10L3RgtCwLCDQvdCwINC60L7RgtC+0YDRi9C5INC60LvQuNC60L3Rg9C70LhcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYWdlTnVtYmVyID0gcGFyc2VJbnQodGhpcy50ZXh0Q29udGVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vINCe0LHQvdC+0LLQu9GP0LXQvCDRgtC10LrRg9GJ0YPRjiDRgdGC0YDQsNC90LjRhtGDINCyINC30LDQstC40YHQuNC80L7RgdGC0Lgg0L7RgiDQtNC10LnRgdGC0LLQuNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4ocGFnZU51bWJlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2UgPSBwYWdlTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ3BhZ2luYXRpb25fX3BhZ2luYXRpb24tYnRuLS1wcmV2JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2UtLTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYWdpbmF0aW9uX19wYWdpbmF0aW9uLWJ0bi0tbmV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlKys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDQk9C10L3QtdGA0LjRgNGD0LXQvCDQv9Cw0LPQuNC90LDRhtC40Y4g0YEg0L7QsdC90L7QstC70LXQvdC90YvQvNC4INC30L3QsNGH0LXQvdC40Y/QvNC4XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlUGFnaW5hdGlvbih0b3RhbFBhZ2VzLCBjdXJyZW50UGFnZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDQktGL0LfRi9Cy0LDQtdC8INGE0YPQvdC60YbQuNGOINGB0L7Qt9C00LDQvdC40Y8g0L/QsNCz0LjQvdCw0YbQuNC4INC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1INGB0YLRgNCw0L3QuNGG0YtcclxuICAgICAgICBjcmVhdGVQYWdpbmF0aW9uKHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlKTtcclxuICAgIH07XHJcblxyXG4gICAgcGFnaW5hdGlvbignLnBhZ2luYXRpb25fX3BhZ2luYXRpb24tLTEnLCA2OCwgMSk7XHJcbiAgICBwYWdpbmF0aW9uKCcucGFnaW5hdGlvbl9fcGFnaW5hdGlvbi0tMicsIDE0LCA1KTtcclxuICAgIHBhZ2luYXRpb24oJy5wYWdpbmF0aW9uX19wYWdpbmF0aW9uLS0zJywgMjEsIDkpO1xyXG4gICAgcGFnaW5hdGlvbignLnBhZ2luYXRpb25fX3BhZ2luYXRpb24tLTQnLCAzMSwgMTUpO1xyXG4gICAgcGFnaW5hdGlvbignLnBhZ2luYXRpb25fX3BhZ2luYXRpb24tLTUnLCA2LCAxKTtcclxuICAgIHBhZ2luYXRpb24oJy5wYWdpbmF0aW9uX19wYWdpbmF0aW9uLS02JywgMjgsIDMpO1xyXG4gICAgcGFnaW5hdGlvbignLnBhZ2luYXRpb25fX3BhZ2luYXRpb24tLTcnLCA0NCwgMTUpO1xyXG4gICAgcGFnaW5hdGlvbignLnBhZ2luYXRpb25fX3BhZ2luYXRpb24tLTgnLCAyMiwgMyk7XHJcbiAgICBwYWdpbmF0aW9uKCcucGFnaW5hdGlvbl9fcGFnaW5hdGlvbi0tOScsIDYxLCAyNSk7XHJcbiAgICBwYWdpbmF0aW9uKCcucGFnaW5hdGlvbl9fcGFnaW5hdGlvbi0tMTAnLCAxNiwgMSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGRyb3BEb3ducyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdpbmF0aW9uX19vcmRlci1kcm9wZG93bicpO1xyXG4gICAgZHJvcERvd25zLmZvckVhY2goZHJvcGRvd249PntcclxuICAgICAgICBjb25zdCAgdGV4dCA9IGRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbmF0aW9uX19vcmRlci1kcm9wZG93bi1oZWFkZXItdGV4dCcpO1xyXG4gICAgICAgIGNvbnN0ICBpbnB1dHMgPSBkcm9wZG93bi5xdWVyeVNlbGVjdG9yQWxsKCcucGFnaW5hdGlvbl9fb3JkZXItZHJvcGRvd24taXRlbSBsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlckRyb3Bkb3duID0gZHJvcGRvd24ucXVlcnlTZWxlY3RvcignLnBhZ2luYXRpb25fX29yZGVyLWRyb3Bkb3duLWhlYWRlci1ib3gnKVxyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duTGlzdEJveCA9IGRyb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbmF0aW9uX19vcmRlci1kcm9wZG93bi1saXN0LWJveCcpXHJcblxyXG5cclxuICAgICAgICBpbnB1dHMuZm9yRWFjaChpbnB1dD0+e1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5wdXRJbm5lciA9IGlucHV0LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcclxuICAgICAgICAgICAgaWYgKGlucHV0SW5uZXIuY2hlY2tlZCApIHtcclxuICAgICAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBpbnB1dC5wYXJlbnRFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBoZWFkZXJEcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICAgICAgZHJvcGRvd25MaXN0Qm94LmNsYXNzTGlzdC50b2dnbGUoJ2lzQWN0aXZlJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpbnB1dHMuZm9yRWFjaChpbnB1dD0+e1xyXG5cclxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGlucHV0LnBhcmVudEVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpXHJcbiAgICAgICAgICAgIHRleHQudGV4dENvbnRlbnQgPSB2YWx1ZVxyXG4gICAgICAgICAgICBkcm9wZG93bkxpc3RCb3guY2xhc3NMaXN0LnJlbW92ZSgnaXNBY3RpdmUnKVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIH0pXHJcbn07XHJcblxyXG4vLyDQrdC60YHQv9C+0YDRgtC40YDRg9C10Lwg0YTRg9C90LrRhtC40Y4gZ3Vlc3RzXHJcbmV4cG9ydCBkZWZhdWx0IGZvb3RlclBhZ2luYXRpb247XHJcbiIsImZ1bmN0aW9uIGZpbHRlclRhYnMoKSB7XHJcbiAgICBmdW5jdGlvbiB0YWJzKHNlbGVjdG9yKSB7XHJcbiAgICAgICAgY29uc3QgdGFic0Rlc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke3NlbGVjdG9yfSAubWFpbl9fdGFiLWJ0bmApO1xyXG4gICAgICAgIGNvbnN0IGluZm9Cb3hEZXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHtzZWxlY3Rvcn0gLm1haW5fX3RhYi1zdGF0dXNgKTtcclxuXHJcblxyXG4gICAgICAgIHRhYnNEZXNrLmZvckVhY2goKHRhYiwgaSkgPT4ge1xyXG4gICAgICAgICAgICBpbmZvQm94RGVzay5mb3JFYWNoKChpbm5lckluZm9Cb3gpID0+IHtcclxuICAgICAgICAgICAgICAgIGlubmVySW5mb0JveC5zdHlsZS50cmFuc2l0aW9uID0gJ3Zpc2liaWxpdHkgMC41cywgb3BhY2l0eSAwLjVzJztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0YWJzRGVzay5mb3JFYWNoKChpbm5lclRhYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlubmVyVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgaW5mb0JveERlc2suZm9yRWFjaCgoaW5uZXJJbmZvQm94KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJJbmZvQm94LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaW5mb0JveERlc2tbaV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGFicyhgLm1haW5fX3RhYi1pdGVtLS0xYCkgXHJcbiAgICB0YWJzKGAubWFpbl9fdGFiLWl0ZW0tLTJgKSBcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmaWx0ZXJUYWJzO1xyXG4iLCJmdW5jdGlvbiByZXZpZXdNb2RhbCgpIHtcclxuICAgIGZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xyXG4gICAgICAgIGNvbnN0IGdldFNjcm9sbGJhcldpZHRoID0gKCkgPT4gd2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgbGV0IHNjcm9sbFdpdGggPSBnZXRTY3JvbGxiYXJXaWR0aCgpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYCR7c2Nyb2xsV2l0aH1weGA7XHJcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaXNBY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbCkge1xyXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzQWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgYDtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXZpZXdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmVlZGJhY2snKTtcclxuICAgIGNvbnN0IHJldmlld01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldmlld01vZGFsX193cmFwcGVyJyk7XHJcbiAgICBjb25zdCByZXZpZXdNb2RhbENsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldmlld01vZGFsX19yZWplY3QnKTtcclxuXHJcbiAgICBjb25zdCBzdWNjZXNzUmV2aWV3QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJldmlld01vZGFsX19zdWJtaXQnKTtcclxuICAgIGNvbnN0IHN1Y2Nlc3NSZXZpZXZNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWNjZXNzUmV2aWV3TW9kYWxfX3dyYXBwZXInKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWNjZXNzTW9kYWxfX2J0bicpO1xyXG5cclxuICAgIHJldmlld0J0bi5mb3JFYWNoKChidG4pID0+IHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIG9wZW5Nb2RhbChyZXZpZXdNb2RhbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZpZXdNb2RhbENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY2xvc2VNb2RhbChyZXZpZXdNb2RhbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXZpZXdNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmV2aWV3TW9kYWxfX3dyYXBwZXInKSkge1xyXG4gICAgICAgICAgICBjbG9zZU1vZGFsKHJldmlld01vZGFsKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzdWNjZXNzUmV2aWV3QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY2xvc2VNb2RhbChyZXZpZXdNb2RhbCk7XHJcbiAgICAgICAgb3Blbk1vZGFsKHN1Y2Nlc3NSZXZpZXZNb2RhbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzdWNjZXNzUmV2aWV2TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N1Y2Nlc3NSZXZpZXdNb2RhbF9fd3JhcHBlcicpKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTW9kYWwoc3VjY2Vzc1Jldmlldk1vZGFsKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNsb3NlTW9kYWwoc3VjY2Vzc1Jldmlldk1vZGFsKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXZpZXdNb2RhbDtcclxuIiwiXHJcbmZ1bmN0aW9uIGFkZFNtb290aChpdGVtKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7aXRlbX1gKS5mb3JFYWNoKChpbm5lckluZm9Cb3gpID0+IHtcclxuICAgICAgICBpbm5lckluZm9Cb3guc3R5bGUudHJhbnNpdGlvbiA9ICdvcGFjaXR5IDAuNXMsIHZpc2liaWxpdHkgMC41cydcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZFNtb290aCIsImNvbnN0IGJ1cmdlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKTtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdicpO1xyXG5cclxuICAgIGNvbnN0IGdldFNjcm9sbGJhcldpZHRoID0gKCkgPT4gd2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcblxyXG4gICAgZnVuY3Rpb24gb3BlbkJ1cmdlcigpIHtcclxuICAgICAgICBsZXQgc2Nyb2xsV2l0aCA9IGdldFNjcm9sbGJhcldpZHRoKCk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3Njcm9sbFdpdGh9cHhgO1xyXG5cclxuICAgICAgICBidXJnZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgYnVyZ2VyLnN0eWxlLnBhZGRpbmdSaWdodCA9IGAke3Njcm9sbFdpdGh9cHhgO1xyXG5cclxuICAgICAgICBuYXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VCdXJnZXIoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJyc7XHJcblxyXG4gICAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICBidXJnZXIuc3R5bGUucGFkZGluZ1JpZ2h0ID0gYGA7XHJcblxyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpID8gY2xvc2VCdXJnZXIoKSA6IG9wZW5CdXJnZXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheSkge1xyXG4gICAgICAgICAgICBjbG9zZUJ1cmdlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIG5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaGVhZGVyLXRvcF9fbmF2LWxpbmsnKSkge1xyXG4gICAgICAgICAgICBjbG9zZUJ1cmdlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYnVyZ2VyO1xyXG4iLCJpbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG4vLyBpbXBvcnQgcmVzZXJ2YXRpb25TZWxlY3QgZnJvbSAnLi9qcy9jb21wb25lbnRzL3Jlc2VydmF0aW9uU2VsZWN0JztcbmltcG9ydCBtYWluVGFicyBmcm9tICcuL2pzL2NvbXBvbmVudHMvbWFpblRhYnMnO1xuaW1wb3J0IGZpbHRlck1vZGFsIGZyb20gJy4vanMvY29tcG9uZW50cy9maWx0ZXJNb2RhbCc7XG5pbXBvcnQge21haW5Nb2RhbFRhYnMsbWFpbk1vZGFsT3Blbn0gZnJvbSAnLi9qcy9jb21wb25lbnRzL2ZpbHRlck1haW5Nb2RhbCc7XG5pbXBvcnQgZm9vdGVyUGFnaW5hdGlvbiBmcm9tICcuL2pzL2NvbXBvbmVudHMvcGFnaW5hdGlvbic7XG5pbXBvcnQgZmlsdGVyVGFicyBmcm9tICcuL2pzL2NvbXBvbmVudHMvZmlsdGVyVGFicyc7XG5pbXBvcnQgcmV2aWV3TW9kYWwgZnJvbSAnLi9qcy9jb21wb25lbnRzL3Jldmlld01vZGFsJztcbmltcG9ydCBhZGRTbW9vdGggZnJvbSAnLi9qcy9jb21wb25lbnRzL2hvdmVyVHJhbnNpdGlvbic7XG5pbXBvcnQgYnVyZ2VyIGZyb20gJy4vanMvY29tcG9uZW50cy9idXJnZXInO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICB0cnl7XG4gICAgICAgIG1haW5UYWJzKCk7XG4gICAgfWNhdGNoe31cbiAgICB0cnl7XG4gICAgICAgIGZpbHRlck1vZGFsKCk7XG4gICAgfWNhdGNoe31cbiAgICB0cnl7XG4gICAgICAgIG1haW5Nb2RhbFRhYnMoKTtcbiAgICB9Y2F0Y2h7fVxuICAgIHRyeXtcbiAgICAgICAgbWFpbk1vZGFsT3BlbigpO1xuICAgIH1jYXRjaHt9XG4gICAgdHJ5e1xuICAgICAgICBmb290ZXJQYWdpbmF0aW9uKCk7XG4gICAgfWNhdGNoe31cbiAgICB0cnl7XG4gICAgICAgIGZpbHRlclRhYnMoKTtcbiAgICB9Y2F0Y2h7fVxuICAgIHRyeXtcbiAgICAgICAgYnVyZ2VyKCk7XG4gICAgfWNhdGNoe31cbiAgICB0cnl7XG4gICAgICAgIHJldmlld01vZGFsKCk7XG4gICAgfWNhdGNoe31cbiAgICB0cnl7XG4gICAgICAgIGFkZFNtb290aCgnLm1haW5fX3RhYi1pdGVtJylcbiAgICAgICAgYWRkU21vb3RoKCcubWFpbl9fdGFiLXN0YXR1cy10aXRsZS1wcm9kdWN0LWxpc3QtaXRlbS1saW5rLWhvdmVyJylcbiAgICB9Y2F0Y2h7fVxufSk7XG5cblxuXG4iXSwibmFtZXMiOlsibWFpblRhYnMiLCJ0YWJzRGVzayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImluZm9Cb3hEZXNrIiwiZm9yRWFjaCIsInRhYiIsImkiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5uZXJUYWIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJpbm5lckluZm9Cb3giLCJmaWx0ZXJNb2RhbCIsImJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJtb2RhbCIsImNsb3NlQnRuIiwidG9nZ2xlIiwibWFpbk1vZGFsT3BlbiIsImZpbHRlckJ0biIsIml0ZW0iLCJwYXJlbnRFbGVtZW50IiwibWFpbk1vZGFsVGFicyIsImZpbHRlck9wdGlvbiIsImZvb3RlclBhZ2luYXRpb24iLCJwYWdpbmF0aW9uIiwicGFnaW5hdGlvblNlbGVjdG9yIiwidG90YWxQYWdlcyIsImN1cnJlbnRQYWdlIiwiZWxlbWVudCIsImNyZWF0ZVBhZ2luYXRpb24iLCJsaVRhZyIsImFjdGl2ZSIsInNpZGVOdW1iZXJzIiwiYmVmb3JlUGFnZSIsIk1hdGgiLCJtYXgiLCJhZnRlclBhZ2UiLCJtaW4iLCJwbGVuZ3RoIiwiaW5uZXJIVE1MIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJwYWdlTGlua3MiLCJsaW5rIiwicGFnZU51bWJlciIsInBhcnNlSW50IiwidGV4dENvbnRlbnQiLCJpc05hTiIsImNvbnRhaW5zIiwiZHJvcERvd25zIiwiZHJvcGRvd24iLCJ0ZXh0IiwiaW5wdXRzIiwiaGVhZGVyRHJvcGRvd24iLCJkcm9wZG93bkxpc3RCb3giLCJpbnB1dCIsImlucHV0SW5uZXIiLCJjaGVja2VkIiwidHJpbSIsInZhbHVlIiwiZmlsdGVyVGFicyIsInRhYnMiLCJzZWxlY3RvciIsInN0eWxlIiwidHJhbnNpdGlvbiIsInJldmlld01vZGFsIiwib3Blbk1vZGFsIiwiZ2V0U2Nyb2xsYmFyV2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJzY3JvbGxXaXRoIiwiYm9keSIsInBhZGRpbmdSaWdodCIsIm92ZXJmbG93IiwiY2xvc2VNb2RhbCIsInJldmlld0J0biIsInJldmlld01vZGFsQ2xvc2VCdG4iLCJzdWNjZXNzUmV2aWV3QnRuIiwic3VjY2Vzc1Jldmlldk1vZGFsIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiYWRkU21vb3RoIiwiYnVyZ2VyIiwibmF2Iiwib3BlbkJ1cmdlciIsImNsb3NlQnVyZ2VyIiwib3ZlcmxheSJdLCJzb3VyY2VSb290IjoiIn0=