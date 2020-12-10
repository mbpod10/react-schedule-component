import React from "react"
import moment from "moment"

const Calendar = () => {
  const value = moment()
  const firstDay = value.clone().startOf("year").startOf("day").subtract(1, "day")
  const lastDay = value.clone().endOf("year")

  const calendar = []

  while (firstDay.isBefore(lastDay, "day")) {
    calendar.push(
      Array(366).fill(0)
        .map(() => firstDay.add(1, "day").clone().format("MM/DD/YYYY"))
    )
  }

  console.log(calendar)



  return (
    <>
      {/* <div>{firstDayOfYear.format("MM/DD/YYYY")}</div>
      <div>{lastDayOfYear.format("MM/DD/YYYY")}</div>
      <div>{startDay.format("MM/DD")} - {endDay.format("MM/DD")}</div> */}
    </>
  )
}

export default Calendar




// const firstDayOfYear = value.clone().startOf("year").startOf("day").startOf("week") // 12/29/2019  
// const lastDayOfYear = value.clone().endOf("year").endOf("day").endOf("week") // 01/02/2021