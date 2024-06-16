import { DivComponent } from "../../common/div-component";
import "./calendar-list.css"

export class CalendarList extends DivComponent {
  constructor() {
    super()
  }

  // Function to change the order of the week
  getDay(date) {
    let day = date.getDay();
    if (day === 0) day = 7
    return day - 1
  }

  render(year, month) {
    this.el.classList.add('calendar-list')

    const calendarContainer = document.createElement('div')
    calendarContainer.classList.add('calendar-list__container')

    let mon = month - 1
    let d = new Date(year, mon)

    let table = `
    <table class="calendar-list__table calendar__table">
      <caption class="calendar-list__caption">${month}/${year}</caption>
      <tr class="calendar__table-row">
        <th class="calendar__table-head">пн</th>
        <th class="calendar__table-head">вт</th>
        <th class="calendar__table-head">ср</th>
        <th class="calendar__table-head">чт</th>
        <th class="calendar__table-head">пт</th>
        <th class="calendar__table-head">сб</th>
        <th class="calendar__table-head">вс</th>
      </tr>
      <tr>
    `

    for (let i = 0; i < this.getDay(d); i++) {
      table += `<td class="calendar__table-cell calendar__table-cell--empty"></td>`
    }

    while (d.getMonth() == mon) {
      table += `<td class="calendar__table-cell ${d.getDate() === new Date().getDate() ? "calendar__table-cell--now" : ""} ${d.getDate() < new Date().getDate() ? "calendar__table-cell--unavailable" : ""}">` + `<button>${d.getDate()}</button>` + "</td>"
      if (this.getDay(d) % 7 === 6) {
        table += "</tr><tr>"
      }
      d.setDate(d.getDate() + 1)
    }

    if (this.getDay(d) != 0) {
      for (let i = this.getDay(d); i < 7; i++) {
        table += "<td></td>"
      }
    }

    table += "</tr></table>"
    calendarContainer.innerHTML = table
    this.el.append(calendarContainer)
    return this.el
  }
}