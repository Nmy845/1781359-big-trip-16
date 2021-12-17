import dayjs from 'dayjs';
import {randomInt} from './utils.js';
import require from 'requirejs';
import {VEHICLE_TYPE, DESTINATION_LOCATION, DESTINATION_INFO, ADDITIONAL_OPTIONS} from './data.js';
const PHOTO_ARRAY = [];
const RelativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(RelativeTime);

function TimeString(timing)  {                     //Генерация времени,при True - генерирует с "задержкой"
  if(timing) {
    return dayjs().set('minutes', randomInt(30,60));
  }
  return dayjs().set('minutes', randomInt(1,30));
}

function generatePhotos (){          //Рандомизация ID фоток
  for(let i=0;i<5;i++){
    PHOTO_ARRAY.push(`http://picsum.photos/248/152?r=${randomInt(1,200)}`);
  }
}
generatePhotos();

function setTimeFromTo (object) {
  return object.map((dateForm)=>{
    const result = dayjs(dateForm.Time.TimeFrom).to(dateForm.Time.TimeTo, true);
    dateForm.Time.TimeFromTo = result ;
    return dateForm.Time.TimeFromTo ;
  });
}

export function generateObject (){ //Генерация объекта
  return {
    TYPE : VEHICLE_TYPE[randomInt(0,VEHICLE_TYPE.length - 1)],
    Location : DESTINATION_LOCATION[randomInt(0,DESTINATION_LOCATION.length -1)],
    Destination : {
      Photos : PHOTO_ARRAY.slice(0,randomInt(1,PHOTO_ARRAY.length)),
      Info : DESTINATION_INFO.slice(0,randomInt(1,DESTINATION_INFO.length)),
    },
    Options : ADDITIONAL_OPTIONS.slice(0,randomInt(1,ADDITIONAL_OPTIONS.length)),
    Price : randomInt(1,500),
    Time : {
      TimeFrom : TimeString(),
      TimeTo : TimeString(1),
    }
  };
}

export const objects = []; //массив объектов

function ArrayObjects() {    //Создание массива объектов
  for(let i=0; i < 20;i++){
    objects.push(generateObject());
  }
}
ArrayObjects();
setTimeFromTo (objects);

export const locations = []; //массив городов

function locationList(arrayObjects) {   //получение городов из массива объектов
  for (let i=0;i<arrayObjects.length;i++){
    locations.push(arrayObjects[i].Location);
  }
}
locationList(objects);

export const newLocations = Array.from(new Set(locations)); //перевод в Set и обратно в массив для удаления совпадений
