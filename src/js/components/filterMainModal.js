function mainModalOpen() {
    const filterBtn = document.querySelectorAll('.main__tab-option-filter-btn');

    filterBtn.forEach((item) => {
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
            tabsDesk.forEach((innerTab) => {
                innerTab.classList.remove('active');
            });

            filterOption.forEach((innerTab) => {
                innerTab.classList.remove('isActive');
            });

            tab.classList.add('active');
            infoBoxDesk.forEach((innerInfoBox) => {
                innerInfoBox.classList.remove('active');
            });

            infoBoxDesk[i].classList.add('active');
            filterOption[i].classList.add('isActive');
        });
    });
}

export { mainModalTabs, mainModalOpen };
