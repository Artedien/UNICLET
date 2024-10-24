import './index.scss';
// import reservationSelect from './js/components/reservationSelect';
import mainTabs from './js/components/mainTabs';
import filterModal from './js/components/filterModal';
import {mainModalTabs,mainModalOpen} from './js/components/filterMainModal';
import footerPagination from './js/components/pagination';
import filterTabs from './js/components/filterTabs';
import reviewModal from './js/components/reviewModal';
import addSmooth from './js/components/hoverTransition';
import burger from './js/components/burger';

window.addEventListener('DOMContentLoaded', () => {
    try{
        mainTabs();
    }catch{}
    try{
        filterModal();
    }catch{}
    try{
        mainModalTabs();
    }catch{}
    try{
        mainModalOpen();
    }catch{}
    try{
        footerPagination();
    }catch{}
    try{
        filterTabs();
    }catch{}
    try{
        burger();
    }catch{}
    try{
        reviewModal();
    }catch{}
    try{
        addSmooth('.main__tab-item')
        addSmooth('.main__tab-status-title-product-list-item-link-hover')
    }catch{}
});



