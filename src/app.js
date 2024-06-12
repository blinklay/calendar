import { Header } from "./components/header/header"
import { SettingsBar } from "./components/settings-bar/settings-bar"
import onChange from "on-change"

class App {
  constructor() {
    this.app = document.getElementById('root')
    this.appState = onChange(this.appState, this.appStateHook.bind(this))
    this.render()
  }

  appState = {
    theme: 'light'
  }

  appStateHook(path) {
    if (path === "theme") {
      this.render()
    }
  }

  render() {
    this.app.innerHTML = ""
    const main = document.createElement('div')
    this.appState.theme === 'dark' ? this.app.classList.add('dark-theme') : this.app.classList.remove('dark-theme')
    main.classList.add('main')
    this.renderHeader()
    main.append(new SettingsBar(this.appState).render())
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