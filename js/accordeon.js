class ItcAccordion {
  constructor(target, config) {
    this._el = typeof target === 'string' ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: true
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
    this.openFirstItem(); // Открываем первый элемент при инициализации
  }

  addEventListener() {
    this._el.addEventListener('click', (e) => {
      const elHeader = e.target.closest('.accordion__header');
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector('.accordion__item_show');
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement ? elOpenItem.classList.toggle('accordion__item_show') : null;
          elOpenItem.querySelector('.accordion__arrow').classList.toggle('arrow-active');
        }
      }
      elHeader.parentElement.classList.toggle('accordion__item_show');
      elHeader.querySelector('.accordion__arrow').classList.toggle('arrow-active');
    });
  }

  openFirstItem() {
    const firstItem = this._el.querySelector('.accordion__item');
    if (firstItem) {
      firstItem.classList.add('accordion__item_show');
      firstItem.querySelector('.accordion__arrow').classList.add('arrow-active');
    }
  }
}

// Создаем экземпляры аккордеона
const accordions = document.querySelectorAll('.accordion');
accordions.forEach((accordion, index) => new ItcAccordion(`#accordion-${index + 1}`));
