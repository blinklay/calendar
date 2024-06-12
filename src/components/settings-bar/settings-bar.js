import "./settings-bar.css"
import { DivComponent } from "../../common/div-component";


export class SettingsBar extends DivComponent {
  constructor() {
    super()
  }

  render() {
    this.el.classList.add('settings-bar')

    this.el.innerHTML = `
    <div class="settings-bar__theme">
      <span>Тема: Светлая</span>
      <label class="switch">
        <input type="checkbox">
        <span class="slider"></span>
      </label>
    </div>
    `

    return this.el
  }
}