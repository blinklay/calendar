import { Header } from "./components/header/header"
import { SettingsBar } from "./components/settings-bar/settings-bar"

class App {
  constructor() {
    this.app = document.getElementById('root')
    this.render()
  }

  appState = {
    theme: 'light'
  }

  render() {
    const main = document.createElement('div')
    this.appState.theme === 'dark' ? this.app.classList.add('dark-theme') : ""
    main.classList.add('main')
    this.renderHeader()
    main.append(new SettingsBar().render())
    this.app.append(main)
    this.openSettingsBar()
  }

  openSettingsBar() {
    const btn = this.app.querySelector('.header__settings-btn')
    const bar = this.app.querySelector('.settings-bar')

    btn.addEventListener('click', () => {
      bar.classList.toggle('settings-bar--open')
    })
  }

  renderHeader() {
    this.app.prepend(new Header(this.appState).render())
  }
}

new App()