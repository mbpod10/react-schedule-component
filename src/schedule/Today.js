import React from "react"
import "./styles.css"
import moment from "moment"

const Today = () => {

  const value = moment()

  const startDay = value.clone().startOf("week").subtract(1, "day")
  const endDay = value.clone().endOf("week")

  const startTime = value.clone().startOf("day").add(5, "hour")
  const endTime = value.clone().startOf("day").add(22, "hour")

  console.log(startTime.format("h:mm A"))
  console.log(endTime.format("h:mm A"))

  let weekArray = []
  let timeArray = []

  while (startDay.isBefore(endDay, "day")) {
    weekArray.push(startDay.add(1, "day").clone())
  }

  while (startTime.isBefore(endTime, "hour")) {
    timeArray.push(startTime.add(1, "hour").clone())
  }

  const disWeekArray = weekArray.map((element, index) => {
    return (
      <>
        <div className="day-name">{element.format("ddd MM-DD-YYYY")}</div>
      </>
    )
  })

  const disTimeArray = timeArray.map((element, index) => {
    return (
      <>
        <div className="hour-name">{element.format("h:mm A")}</div>
      </>
    )
  })

  return (
    <>
      <h1>{startDay.add(1, "day").format("ddd MM/DD/YY")} - {endDay.format("ddd MM/DD/YY")}</h1>
      <div className="days">
        <h4>-</h4>
        {disWeekArray}
      </div>
      <div className="hours">
        {disTimeArray}
      </div>
    </>

  )
}

export default Today