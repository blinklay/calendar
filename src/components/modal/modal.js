import "./modal.css"
import { DivComponent } from "../../common/div-component";

export class Modal extends DivComponent {
  constructor() {
    super()
  }

  render(msg, modalType) {
    this.el.classList.add('modal')
    this.el.classList.add(`modal--${modalType}`)

    this.el.innerHTML = `
    <div class="modal__wrapper">
      <span class="modal__message">${msg}</span>
      <button class="modal__btn-close"></button>
    </div>
    <div class="modal-timeline"></div>
    `

    setTimeout(() => {
      this.el.classList.add('modal--open')
    }, 300);


    this.el.querySelector(".modal__btn-close").addEventListener('click', this.destroy.bind(this))
    this.el.querySelector('.modal__btn-close').classList.add('modal-timeline--end')
    setTimeout(() => {
      this.destroy()
    }, 3500);
    return this.el
  }

  destroy() {
    this.el.classList.remove("modal--open")
    setTimeout(() => {
      this.el.remove()
    }, 300);
  }
}