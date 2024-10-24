function filterTabs() {
    function tabs(selector) {
        const tabsDesk = document.querySelectorAll(`${selector} .main__tab-btn`);
        const infoBoxDesk = document.querySelectorAll(`${selector} .main__tab-status`);


        tabsDesk.forEach((tab, i) => {
            infoBoxDesk.forEach((innerInfoBox) => {
                innerInfoBox.style.transition = 'visibility 0.5s, opacity 0.5s';
            });

            tab.addEventListener('click', () => {
                tabsDesk.forEach((innerTab) => {
                    innerTab.classList.remove('active');
                });

                tab.classList.add('active');
                infoBoxDesk.forEach((innerInfoBox) => {
                    innerInfoBox.classList.remove('active');
                });

                infoBoxDesk[i].classList.add('active');
            });
        });
    }
    tabs(`.main__tab-item--1`) 
    tabs(`.main__tab-item--2`) 
}
export default filterTabs;
