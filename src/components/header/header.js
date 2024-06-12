import { DivComponent } from "../../common/div-component";
import "./header.css"

export class Header extends DivComponent {
  constructor(appState) {
    super()
    this.appState = appState
    this.getDateInfo()
  }

  getDateInfo() {
    const date = new Date()
    const options = {
      month: "long"
    }

    const formatter = new Intl.DateTimeFormat('ru-RU', options)
    const month = formatter.format(date)

    return {
      date: new Date().getDate(),
      month: month,
      year: new Date().getFullYear()
    }
  }

  render() {
    this.el.classList.add('header')
    const date = this.getDateInfo()

    const logoSrc = this.appState.theme === 'dark' ? "./static/pictures/logo-light.svg" : "./static/pictures/logo.svg"

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
    `

    return this.el
  }
}