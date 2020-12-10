import React, { useState } from "react"
import moment from "moment"
import { Link } from "react-router-dom"

const DayDetail = (props) => {

  const [currentDay, setCurrentDay] = useState(props.match.params.day)
  const [currentDayMoment, setCurrentDayMoment] = useState(moment(props.match.params.day).format("dddd MM/DD/YYYY"))
  const [nextDay, setNextDay] = useState("")
  const [prevDay, setPrevDay] = useState("")

  const goToNextDay = () => {
    console.log("Next Day")
    setNextDay(currentDayMoment.clone().add(1, "day").format("MM-DD-YYYY"))
  }
  const goToPrevDay = () => {
    console.log("Previous Day")
    setPrevDay(currentDayMoment.clone().subtract(1, "day").format("MM-DD-YYYY"))
  }


  return (
    <>
      <h1>{currentDayMoment}</h1>
      <div>
        <Link to={`/${prevDay}`}>
          <span>Prev</span>
        </Link> -

        <Link to={`/${nextDay}`}>
          <span onClick={goToNextDay}>Next</span>
        </Link>
      </div>
    </>
  )
}

export default DayDetail