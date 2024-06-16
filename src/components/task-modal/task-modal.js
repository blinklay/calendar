import { DivComponent } from "../../common/div-component";
import "./task-modal.css"

export class TaskModal extends DivComponent {
  constructor() {
    super()
  }

  render(date) {
    this.el.classList.add("task-modal")

    this.el.innerHTML = `
    <div class="task-modal__wrapper">
      <p class="task-modal__title">Добавить новую задачу на <span>${date}</span>?</p>
      <form class="task-modal__form">
        <label class="task-modal__label">
          Введите заголовок:
          <input type="text" class="task-modal__input">
        </label>
        <label class="task-modal__label">
          Введите описание (макс. 100 символов):
          <input type="text" class="task-modal__input">
        </label>
        <button class="task-modal__btn">Создать задачу</button>
      </form>
    </div>
    <button class="task-modal__btn-close"></button>
    `

    this.el.querySelector(".task-modal__btn-close").addEventListener('click', this.closeModal.bind(this))

    return this.el
  }

  closeModal(e) {
    this.el.classList.remove("task-modal--open")
    setTimeout(() => {
      this.el.remove()
    }, 300);
  }
}