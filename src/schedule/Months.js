import React from "react"
import moment from "moment"
import { Link } from "react-router-dom"

const Months = () => {
  const value = moment()
  const months = []

  const firstDay = value.clone().startOf("year").startOf("day").subtract(1, "day") //day before the first of the year
  const lastDay = value.clone().endOf("year").endOf("day") // last day of the year

  // console.log(firstDay.format("MM/DD/YYYY"))
  // console.log(lastDay.format("MM/DD/YYYY"))

  while (firstDay.isBefore(lastDay, "month")) {
    months.push(firstDay.add(1, "month").clone().format("MM-YYYY"))
  }

  // console.log(months)

  const monthArray = months.map((element, index) => {
    return (
      <div key={index}>
        <h3><Link to={`/month/${element}`}>{element}</Link></h3>
      </div>
    )
  })

  return (
    <>
      {monthArray}
    </>
  )
}

export default Months