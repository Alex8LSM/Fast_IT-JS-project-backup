import { onLogoClick } from './fetchTrendyMovie';
import { onWatchedBtnClick, onQueueBtnClick } from './myLibrary';
import { removePagination } from './paginationPages';

function headerJS() {
  const headerPage = document.getElementById('headerMainPage');
  const libraryLink = document.getElementById('userlibrary');
  const homeLink = document.getElementById('userHome');
  const headerBtn = document.getElementById('headerButtons');
  const headerSearch = document.getElementById('headerSearch');
  const logoEl = document.getElementById('logo-link');

  logoEl.addEventListener('click', onLogoClick);

function onClickLibrary(e) {
    e.preventDefault();
    headerPage.classList.remove('main-page-header');
    headerPage.classList.add('header-library');
    headerBtn.classList.remove('hidden');
    headerSearch.classList.add('hidden');
    homeLink.classList.remove('current');
    libraryLink.classList.add('current');

    const filmContainer = document.querySelector('.main-container-films');
    filmContainer.innerHTML = '';

    onWatchedBtnClick();
  }
  libraryLink.addEventListener('click', onClickLibrary);

   function emptyContainer() {
    const WatchedIds = JSON.parse(localStorage.getItem('watched'));
    const QueueIds = JSON.parse(localStorage.getItem('queue'));
    const emptyTitle = document.querySelector('.container-empty__title');
    const emptyImage = document.querySelector('.container-empty__image');

     if (WatchedIds === null || WatchedIds.length === 0) {
      removePagination();
      emptyTitle.classList.add('visible');
      emptyImage.classList.add('visible');
    } else {
      emptyTitle.classList.remove('visible');
      emptyImage.classList.remove('visible');
      onWatchedBtnClick();
    }

     if (QueueIds === null || QueueIds.length === 0) {
      removePagination();
      emptyTitle.classList.add('visible');
      emptyImage.classList.add('visible');
    } else {
      emptyTitle.classList.remove('visible');
      emptyImage.classList.remove('visible');
      onQueueBtnClick();
    }
  }


  function onClickHome(e) {
    headerPage.classList.remove('header-library');
    headerPage.classList.add('main-page-header');
    headerSearch.classList.remove('hidden');
    headerBtn.classList.add('hidden');
    libraryLink.classList.remove('current');
    homeLink.classList.add('current');
  }

  homeLink.addEventListener('click', onClickHome);
}
export { headerJS };