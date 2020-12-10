import React, { useState } from "react"
import moment from "moment"
import { Link } from "react-router-dom"


const IndividualMonth = (props) => {

  const [tempMonth, setTempMonth] = useState(props.match.params.month.split("-")[0])
  const [tempYear, setTempYear] = useState(props.match.params.month.split("-")[1])

  const month = moment(tempMonth).clone().format("MMMM")
  const year = moment(tempYear).clone().format("YYYY")
  const agDate = month + " " + year
  const agDateParse = moment(month + "/01/" + year)

  const firstDay = agDateParse.clone().startOf("month").startOf("day").subtract(1, "day")
  const lastDay = agDateParse.clone().endOf("month").endOf("day")

  // console.log(firstDay.format("MM-DD-YYYY"))
  // console.log(lastDay.format("MM-DD-YYYY"))

  const dayList = []

  while (firstDay.isBefore(lastDay, "day")) {
    dayList.push(firstDay.add(1, "day").clone().format("ddd MM-DD-YYYY"))
  }

  // console.log(dayList)

  const dayArray = dayList.map((element, index) => {
    return (
      <Link to={`/detail/${element.split(" ")[1]}`}>
        <h4 key={index}>{element}</h4>
      </Link>
    )
  })

  return (
    <>
      <h1>{agDate}</h1>
      {dayArray}
    </>
  )
}

export default IndividualMonth