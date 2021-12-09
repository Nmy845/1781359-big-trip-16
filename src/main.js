import { createSortTeamplate } from './view/sort-view.js';
import { createEditPointTeamplate } from './view/edit-point-view.js';
import { createFilterTeamplate } from './view/filter-view';
import { createMenuTeamplate } from './view/menu-view.js';
import { createNewPointTeamplate } from './view/new-point-view.js';
import { createListPointTeamplate } from './view/list-point-view.js';
import { createInfoTemplate } from './view/main-info-view.js';

const EVENTS_VALUE = 3;

const renderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

function templateRender(container, templateD, position) {
  return container.insertAdjacentHTML(position, templateD);
}

const mainHeader = document.querySelector('.trip-main');
const mainHeaderNavigation = mainHeader.querySelector('.trip-controls__navigation');
const mainHeaderFilter = mainHeader.querySelector('.trip-controls__filters');

templateRender(mainHeader, createInfoTemplate() , renderPosition.BEFOREEND);
templateRender(mainHeaderNavigation, createMenuTeamplate(), renderPosition.BEFOREEND );
templateRender(mainHeader , createFilterTeamplate(), renderPosition.BEFOREEND );

templateRender(mainHeaderFilter, createFilterTeamplate() , renderPosition.BEFOREBEGIN);

const mainContent = document.querySelector('.trip-events');

templateRender(mainContent, createSortTeamplate(),renderPosition.BEFOREEND);
for (let i = 0; i < EVENTS_VALUE; i++) {
  templateRender(mainContent, createListPointTeamplate(),renderPosition.BEFOREBEGIN);
}
templateRender(mainContent, createNewPointTeamplate(),renderPosition.BEFOREBEGIN);
templateRender(mainContent, createEditPointTeamplate().renderPosition.BEFOREBEGIN);
