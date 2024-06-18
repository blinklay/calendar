import { DivComponent } from "../../common/div-component";
import "./task-modal.css"

export class TaskModal extends DivComponent {
  #tasksKey = "tasks"
  constructor(date, appState) {
    super()
    this.date = date
    this.appState = appState
  }

  foramtDate(date) {
    const arr = date.split("/")

    let temp = arr[0]
    arr[0] = arr[1]
    arr[1] = temp

    return arr.join("/")
  }

  render() {
    this.el.classList.add("task-modal")
    this.el.innerHTML = `
    <div class="task-modal__wrapper">
      <p class="task-modal__title">Добавить новую задачу на <span>${this.date}</span>?</p>
      <form class="task-modal__form">
        <label class="task-modal__label">
          Введите заголовок:
          <input type="text" class="task-modal__input task-modal__input--title">
        </label>
        <label class="task-modal__label">
          Введите описание (макс. 100 символов):
          <input type="text" class="task-modal__input task-modal__input--descr">
        </label>
        <button class="task-modal__btn">Создать задачу</button>
      </form>
    </div>
    <button class="task-modal__btn-close"></button>
    `

    this.el.querySelector(".task-modal__btn-close").addEventListener('click', this.closeModal.bind(this))
    this.el.querySelector('.task-modal__form').addEventListener("submit", this.processingForm.bind(this))

    return this.el
  }

  processingForm(e) {
    e.preventDefault()

    const title = e.target.querySelector('.task-modal__input--title')
    const descr = e.target.querySelector('.task-modal__input--descr')

    if (title.value === "" || descr.value === "") {
      const message = document.createElement('div')
      message.classList.add("form-message")
      message.textContent = "Не заполнено обязательное поле!"

      setTimeout(() => {
        message.classList.add("form-message--show")
        title.classList.add("form-message--blink")
        descr.classList.add("form-message--blink")
      }, 300);

      setTimeout(() => {
        title.classList.remove("form-message--blink")
        descr.classList.remove("form-message--blink")
        message.classList.remove("form-message--show")
      }, 1300);

      e.target.after(message)

      setTimeout(() => {
        message.remove()
      }, 2000);

      return
    }

    const task = {
      title: title.value,
      descr: descr.value,
      date: new Date(this.foramtDate(this.date))
    }

    const tasksList = localStorage.getItem(this.#tasksKey) ? JSON.parse(localStorage.getItem(this.#tasksKey)) : []
    tasksList.push(task)
    this.appState.taskList = tasksList
    localStorage.setItem(this.#tasksKey, JSON.stringify(tasksList))

    this.closeModal()
  }

  closeModal() {
    this.el.classList.remove("task-modal--open")
    setTimeout(() => {
      this.el.remove()
    }, 300);
  }
}