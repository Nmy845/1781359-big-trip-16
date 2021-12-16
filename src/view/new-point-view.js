export function createNewPointTeamplate(object){
  const type = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];
  return `<form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${object.TYPE.toLowerCase()}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${
  (() => {
    let typeText = '';
    for(let i=0;i<type.length;i++){

      typeText += `<div class="event__type-item">
                              <input id="event-type-${type[i].toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type[i].toLowerCase()}" ${type[i]===object.Vehicle ? 'checked' : ''}>
                              <label class="event__type-label  event__type-label--${type[i].toLowerCase()}" for="event-type-${type[i].toLowerCase()}-1">${type[i]}</label>
                            </div>`;
    }
    return typeText;
  })()
}

                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                  ${
  (() => {
    let typeText = '';
    typeText += `<label class="event__label  event__type-output" for="event-destination-1">
                      ${object.TYPE}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value=${object.Location[0]} list="destination-list-1">
                    <datalist id="destination-list-1">`;

    for(let i=0;i<object.Location.length;i++){
      typeText += `<option value="${object.Location[i]}"></option>`;
    }
    return typeText;
  })()
}

                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">
                  </div>
                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value=${object.Price}>
                  </div>
                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Cancel</button>
                </header>
                <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
                    <div class="event__available-offers">
                    ${
  (() => {
    let typeText = '';
    for (let i=0;i<object.Options.length;i++){
      typeText += `
                      <div class="event__offer-selector">
                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${object.Options[i].Name}-1" type="checkbox" name="event-offer-${object.Options[i].Name}" checked>
                        <label class="event__offer-label" for="event-offer-${object.Options[i].Name}-1">
                          <span class="event__offer-title">${object.Options[i].Name}</span>
                          &plus;&euro;&nbsp;
                          <span class="event__offer-price">${object.Options[i].Price}</span>
                        </label>
                      </div>`;
    }
    return typeText;
  })()
}
                    </div>
                  </section>

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    ${
  (() => {
    let typeText = '';
    for(let i=0;i<object.Destination.Info.length;i++){
      typeText += `<p class="event__destination-description">${object.Destination.Info[i]}</p>`;
    }
    return typeText;
  })()
}
                    <div class="event__photos-container">
                      <div class="event__photos-tape">
                        ${
  (() => {
    let images = '';
    for(let i=0;i<object.Destination.Photos.length;i++){
      images += `<img class="event__photo" src="${object.Destination.Photos[i]}" alt="Event photo">`;
    }
    return images;
  })()
}
                      </div>
                    </div>
                  </section>
                </section>
              </form>
`;}
