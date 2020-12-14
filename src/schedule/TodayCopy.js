import React, { useState } from "react"
import "./styles.css"
import moment from "moment"
import * as RBS from "react-bootstrap"
import { Link } from "react-router-dom"


const TodayCopy = () => {

  // let value = moment()

  const [value, setValue] = useState(moment())

  const startDay = value.clone().startOf("week").subtract(1, "day")
  const endDay = value.clone().endOf("week")

  const startTime = value.clone().startOf("day").add(5, "hour")
  const endTime = value.clone().startOf("day").add(22, "hour")

  // console.log(startDay.format("dddd DD-MM-YYYY"))
  // console.log(endDay.format("dddd DD-MM-YYYY"))

  // console.log(startTime.format("h:mm A"))
  // console.log(endTime.format("h:mm A"))

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
        <th key={index}><Link to={`/detail/${element.format("YYYY-MM-DD")}`}>{element.format("ddd MM-DD-YYYY")}</Link></th>
      </>
    )
  })


  const disTimeArray = timeArray.map((element, index) => {
    return (
      <tr key={index}>
        <th>{element.format("h:mm A")}</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    )
  })

  console.log(value.clone().startOf("week").add(7, "day").format("dddd MM/DD/YYYY"))

  const nextWeek = () => {
    // value = value.clone().startOf("week").add(7, "day")
    setValue(value.clone().startOf("week").add(7, "day"))
    console.log(value.format("dddd MM/DD/YYYY"))
  }
  const previousWeek = () => {
    // value = value.clone().startOf("week").add(7, "day")
    setValue(value.clone().startOf("week").subtract(7, "day"))
    console.log(value.format("dddd MM/DD/YYYY"))
  }

  return (
    <>
      <h1>{value.clone().startOf("week").format("MMMM YYYY")}</h1>
      <div class="header">
        <h5 className="weekly-header">{value.clone().startOf("week").format("ddd MM/DD/YY")} - {endDay.format("ddd MM/DD/YY")}</h5>
        <div onClick={() => previousWeek()}>Previous</div>
        <div onClick={() => nextWeek()}>Next</div>

      </div>

      <RBS.Table striped bordered hover variant="sm">
        <thead>
          <tr>
            <th>Date</th>
            {disWeekArray}
          </tr>
        </thead>
        <tbody>
          {disTimeArray}
        </tbody>
      </RBS.Table>
    </>
  )
}

export default TodayCopy