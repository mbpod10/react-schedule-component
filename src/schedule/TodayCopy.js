import React, { useState, useEffect } from "react"
import "./styles.css"
import moment from "moment"
import * as RBS from "react-bootstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import axios from "axios"


const TodayCopy = () => {

  const [value, setValue] = useState(moment())
  const [selectedMonth, setSelectedMonth] = useState("")

  const startDay = value.clone().startOf("week").subtract(1, "day")
  const endDay = value.clone().endOf("week")

  const startMonth = moment().clone().startOf("month")
  const endMonth = value.clone().add(12, "month")

  const startTime = value.clone().startOf("day").add(5, "hour")
  const endTime = value.clone().startOf("day").add(22, "hour")

  let weekArray = []
  let timeArray = []
  let monthArray = []

  // let weekArrayAPI = []

  while (startDay.isBefore(endDay, "day")) {
    weekArray.push(startDay.add(1, "day").clone())
    // weekArrayAPI.push(startDay.add(1, "day").format(")
  }

  while (startTime.isBefore(endTime, "hour")) {
    timeArray.push(startTime.add(1, "hour").clone())
  }

  while (startMonth.isBefore(endMonth, "month")) {
    monthArray.push(startMonth.add(1, "month").clone())
  }

  const disMonthArray = monthArray.map((element, index) => {
    return (
      <>
        <option key={index}>
          {element.format("MMMM YYYY")}
        </option>
      </>
    )
  })

  // console.log(weekArrayAPI)

  const disWeekArray = weekArray.map((element, index) => {
    return (
      <>
        <th className="table-head" key={index}><Link to={`/detail/${element.format("YYYY-MM-DD")}`}>{element.format("ddd MM-DD-YYYY")}</Link></th>
      </>
    )
  })


  const disTimeArray = timeArray.map((element, index) => {
    return (
      <tr key={index}>
        <th className="table-head">{element.format("h:mm A")}</th>
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

  // console.log(value.clone().startOf("week").add(7, "day").format("dddd MM/DD/YYYY"))

  const nextWeek = () => {
    setValue(value.clone().startOf("week").add(7, "day"))
  }
  const previousWeek = () => {
    setValue(value.clone().startOf("week").subtract(7, "day"))
  }

  const changeMonth = (event) => {
    if (event.target.value === "Today") {
      setValue(moment())
    } else {
      setValue(moment(event.target.value))
    }
  }

  useEffect(() => {
    const makeAPICall = () => {
      weekArray.forEach((element, index) => {
        axios.get(`http://127.0.0.1:8000/days/${element.format("YYYY-MM-DD")}/appointments/`,
          {
            headers: {
              'Content-Type': 'application/json',
              // 'Authorization': 'Token 43e647722ff3daa8561ab96a60d57298fe23d45e'
            }
          })
          .then((response) => {
            // console.log(response.data)
            if (response.data.day) {
              console.log(response.data.day)
            }
            else if (response.data.no_day) {
              console.log(response.data)
            }
          })
          .catch((error) => {
            console.log(error)
          })
      })
    }
    makeAPICall()
  })




  return (
    <>
      <div className="month-div">
        <h1 className="month" >{value.clone().startOf("week").format("MMMM YYYY")}</h1>
      </div>

      <div className="header">
        <div onClick={() => previousWeek()}><FontAwesomeIcon icon={faArrowAltCircleLeft} /></div>
        <h5 className="weekly-header">{value.clone().startOf("week").format("ddd MM/DD/YY")} - {endDay.format("ddd MM/DD/YY")}</h5>
        <div onClick={() => nextWeek()}><FontAwesomeIcon icon={faArrowAltCircleRight} /></div>
      </div>

      <div className="form-div">
        <RBS.Form>
          <RBS.Form.Group as={RBS.Col} controlId="formGridState">
            <RBS.Form.Control as="select" defaultValue="Month..." onChange={changeMonth} value={selectedMonth}>
              <option>Month...</option>
              <option>Today</option>
              {disMonthArray}
            </RBS.Form.Control>
          </RBS.Form.Group>
        </RBS.Form>
      </div>

      <RBS.Table striped bordered hover variant="sm">
        <thead>
          <tr>
            <th className="table-head">Date</th>
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