import { CalendarList } from "./components/calendar-list/calendar-list"
import { Header } from "./components/header/header"
import { Modal } from "./components/modal/modal"
import { SettingsBar } from "./components/settings-bar/settings-bar"
import onChange from "on-change"
import { TaskColumn } from "./components/task-column/task-column"

class App {
  #themeKey = 'theme'
  #themeDefault = "light"
  #tasksKey = "tasks"
  constructor() {
    this.app = document.getElementById('root')
    this.appState = onChange(this.appState, this.appStateHook.bind(this))
    this.render()
  }

  appState = {
    theme: localStorage.getItem(this.#themeKey) ? JSON.parse(localStorage.getItem(this.#themeKey)) : this.#themeDefault,
    taskList: localStorage.getItem(this.#tasksKey) ? JSON.parse(localStorage.getItem(this.#tasksKey)) : []
  }

  modalMessage = {
    "taskList": 'Новая заадча добавлена!',
    "theme": 'Тема изменена!'
  }

  appStateHook(path) {
    if (path === "theme" || path === "taskList") {
      this.render()
      this.app.prepend(new Modal().render(this.modalMessage[path], "succes"))
    }
  }

  render() {
    this.app.innerHTML = ""
    const main = document.createElement('div')
    const mainWrapper = document.createElement('div')
    mainWrapper.classList.add('main-wrapper')
    this.appState.theme === 'dark' ? this.app.classList.add('dark-theme') : this.app.classList.remove('dark-theme')
    main.classList.add('main')
    this.renderHeader()
    main.append(new SettingsBar(this.appState).render())
    mainWrapper.append(new CalendarList(this.app, this.appState).render(new Date().getFullYear(), new Date().getMonth() + 1))
    mainWrapper.append(new TaskColumn(this.appState).render())
    main.append(mainWrapper)

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