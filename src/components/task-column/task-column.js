import { DivComponent } from "../../common/div-component";
import "./task-column.css"

export class TaskColumn extends DivComponent {
  constructor(appState) {
    super()
    this.appState = appState
  }

  render() {
    this.el.classList.add('task-column')

    this.el.innerHTML = `
    <span class="task-column__header">Текущие задачи:</span>
    <ul class="task-column__list"></ul>
    `

    const list = this.el.querySelector('.task-column__list')

    for (const { title, descr, date } of this.appState.taskList) {
      const item = `
      <li class="task-column__item">
       <div class="task-column__item-info">
         <span class="task-column__item-title">${title}</span>
        <p class="task-column__item-text">
          ${descr}
        </p>
        <div class="task-column__item-deadline">
          <span>${this.formatDate(date).day},</span>
          <span>${this.formatDate(date).month}</span>
          <span>${this.formatDate(date).date}</span>
        </div>
       </div>
       <div class="task-column__item-btns">
          <button class="task-column__item-btn task-column__item-btn--setting"></button>
          <button class="task-column__item-btn task-column__item-btn--important"></button>
       </div>
      </li>
      `

      list.innerHTML += item
    }

    return this.el
  }

  formatDate(dateString) {
    const date = new Date(dateString)

    const dayFormatter = new Intl.DateTimeFormat('ru-RU', { weekday: "short" })
    const monthFormatter = new Intl.DateTimeFormat("ru-RU", { month: "short" })

    const day = dayFormatter.format(date).charAt(0).toUpperCase() + dayFormatter.format(date).slice(1);
    const month = monthFormatter.format(date).charAt(0).toUpperCase() + monthFormatter.format(date).slice(1);
    const dayOfMonth = date.getDate();

    return {
      day: day,
      month: month,
      date: dayOfMonth
    };
  }
}