import { DivComponent } from "../../common/div-component";
import "./task-column.css"

export class TaskColumn extends DivComponent {
  constructor() {
    super()
  }

  render() {
    this.el.classList.add('task-column')

    this.el.innerHTML = `
    <span class="task-column__header">Текущие задачи:</span>
    <ul class="task-column__list">
      <li class="task-column__item">
       <div class="task-column__item-info">
         <span class="task-column__item-title">Wach a car</span>
        <p class="task-column__item-text">
          washing a car for my eyes to beaty
        </p>
        <div class="task-column__item-deadline">
          <span>Птн,</span>
          <span>Июнь</span>
          <span>28</span>
        </div>
       </div>
       <div class="task-column__item-btns">
          <button class="task-column__item-btn task-column__item-btn--setting"></button>
          <button class="task-column__item-btn task-column__item-btn--important"></button>
       </div>
      </li>
    </ul>
    `

    return this.el
  }
}