import "./settings-bar.css"
import { DivComponent } from "../../common/div-component";


export class SettingsBar extends DivComponent {
  constructor(appState) {
    super()
    this.appState = appState
  }

  render() {
    this.el.classList.add('settings-bar')

    const themes = {
      "light": "Светлая",
      "dark": "Темная"
    }

    this.el.innerHTML = `
    <div class="settings-bar__theme">
      <span>Тема: ${themes[this.appState.theme]}</span>
      <label class="switch">
        <input type="checkbox" class="switch-theme__input" ${this.appState.theme === "dark" ? "checked" : ""}>
        <span class="slider"></span>
      </label>
    </div>
    `

    this.el.querySelector('.switch-theme__input').addEventListener('click', () => {
      if (this.appState.theme === "light") this.appState.theme = 'dark'
      else if (this.appState.theme === "dark") this.appState.theme = 'light'
    })

    return this.el
  }
}