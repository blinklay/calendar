(function () {
  'use strict';

  class DivComponent {
    constructor() {
      this.el = document.createElement('div');
    }

    render() {
      return this.el
    }
  }

  class Header extends DivComponent {
    constructor(appState) {
      super();
      this.appState = appState;
      this.getDateInfo();
    }

    getDateInfo() {
      const date = new Date();
      const options = {
        month: "long"
      };

      const formatter = new Intl.DateTimeFormat('ru-RU', options);
      const month = formatter.format(date);

      return {
        date: new Date().getDate(),
        month: month,
        year: new Date().getFullYear()
      }
    }

    render() {
      this.el.classList.add('header');
      const date = this.getDateInfo();

      const logoSrc = this.appState.theme === 'dark' ? "./static/pictures/logo-light.svg" : "./static/pictures/logo.svg";

      this.el.innerHTML = `
    <div class="container">
    <div class="header__wrapper">
      <div class="header__logo">
        <img class="header__logo-image" alt="Логотип" src="${logoSrc}">
      </div>
      <div class="header__info">
        <span class="header__info--today">Сегодня</span>
        <div class="header__info-date">
          <span>${date.month}</span>
          <span>${date.date},</span>
          <span>${date.year}</span>
        </div>
      </div>
      <button class="header__settings-btn">
      
      </button>
      </div>
    </div>
    `;

      return this.el
    }
  }

  class SettingsBar extends DivComponent {
    constructor() {
      super();
    }

    render() {
      this.el.classList.add('settings-bar');

      this.el.innerHTML = `
    <div class="settings-bar__theme">
      <span>Тема: Светлая</span>
      <label class="switch">
        <input type="checkbox">
        <span class="slider"></span>
      </label>
    </div>
    `;

      return this.el
    }
  }

  class App {
    constructor() {
      this.app = document.getElementById('root');
      this.render();
    }

    appState = {
      theme: 'light'
    }

    render() {
      const main = document.createElement('div');
      this.appState.theme === 'dark' ? this.app.classList.add('dark-theme') : "";
      main.classList.add('main');
      this.renderHeader();
      main.append(new SettingsBar().render());
      this.app.append(main);
      this.openSettingsBar();
    }

    openSettingsBar() {
      const btn = this.app.querySelector('.header__settings-btn');
      const bar = this.app.querySelector('.settings-bar');

      btn.addEventListener('click', () => {
        bar.classList.toggle('settings-bar--open');
      });
    }

    renderHeader() {
      this.app.prepend(new Header(this.appState).render());
    }
  }

  new App();

})();
