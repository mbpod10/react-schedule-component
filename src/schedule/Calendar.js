import React from "react"
import moment from "moment"

const Calendar = () => {
  const value = moment()
  const firstDay = value.clone().startOf("year").startOf("day").subtract(1, "day")
  const lastDay = value.clone().endOf("year")

  const calendar = []

  while (firstDay.isBefore(lastDay, "day")) {
    calendar.push(firstDay.add(1, "day").clone().format("MM-DD-YYYY"))
  }

  console.log(calendar.length)

  const calendarArray = calendar.map((element, index) => {
    return (
      <div key={index}>
        {element}
      </div>
    )
  })

  return (
    <>
      {calendarArray}
    </>
  )
}

export default Calendar




// const firstDayOfYear = value.clone().startOf("year").startOf("day").startOf("week") // 12/29/2019  
// const lastDayOfYear = value.clone().endOf("year").endOf("day").endOf("week") // 01/02/2021