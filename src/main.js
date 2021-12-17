import { objects } from './mock.js';
import { renderPosition } from './data.js';
import { templateRender } from './utils.js';
import { randomObject } from './utils.js';
import { newLocations } from './mock.js';
import { createSortTeamplate } from './view/sort-view.js';
import { createFilterTeamplate } from './view/filter-view';
import { createMenuTeamplate } from './view/menu-view.js';
import { createNewPointTeamplate } from './view/new-point-view.js';
import { createListPointTeamplate } from './view/list-point-view.js';
import { createInfoTemplate } from './view/main-info-view.js';

const mainTrip = document.querySelector('.trip-main');
const mainNavigation = mainTrip.querySelector('.trip-controls__navigation');
const mainFilter = mainTrip.querySelector('.trip-controls__filters');
const mainContentList = document.querySelector('.trip-events');

const CurrentObject = randomObject(objects);

templateRender(mainNavigation, createMenuTeamplate(), renderPosition.AFTERBEGIN);
templateRender(mainTrip, createInfoTemplate(newLocations) , renderPosition.AFTERBEGIN);
templateRender(mainFilter , createFilterTeamplate(), renderPosition.BEFOREEND);
templateRender(mainContentList, createSortTeamplate(),renderPosition.BEFOREBEGIN);

for (let i=0;i<objects.length;i++){
  templateRender(mainContentList, createListPointTeamplate(objects[i]),renderPosition.AFTERBEGIN);
}

templateRender(mainContentList, createNewPointTeamplate(CurrentObject),renderPosition.AFTERBEGIN);


