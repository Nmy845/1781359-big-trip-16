export function randomInt(from, to) {
  if (from < 0 || to < 0) {
    return 'Параметры диапазона должны быть неотрицательными';
  }
  if (from > to) {
    return Math.ceil(Math.random() * (from - to) + to);
  }
  return Math.ceil(Math.random() * (to - from) + from);
}

export function randomObject(array){                 //Случайный объект из массива объектов
  const object = array[Math.floor(Math.random()*array.length)];
  return object;
}

export function templateRender(container, content, position) {           //Функция рендера HTML
  return container.insertAdjacentHTML(position, content);
}
