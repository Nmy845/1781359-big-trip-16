export const createInfoTemplate = (object) => (`
<section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__title">
              ${
  (() => {
    let typeText = '';
    for(let i=0;i<object.length;i++){
      typeText += `${object[i]} &mdash; `;
    }
    const Text = typeText.slice(0,-8);
    return Text;
  })()
  }
              </h1>
              <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
            </div>

            <p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">Цены пока нет</span>
            </p>
          </section>
`);
