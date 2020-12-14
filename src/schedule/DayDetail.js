import React, { useEffect, useState } from "react"
import moment from "moment"
import { Link } from "react-router-dom"
import axios from "axios"

const DayDetail = (props) => {

  // const [currentDay, setCurrentDay] = useState(props.match.params.day)
  const [currentDayMoment, setCurrentDayMoment] = useState(moment(props.match.params.day))
  const [alert, setAlert] = useState("")
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    const makeApiCall = () => {
      axios.get(`http://127.0.0.1:8000/days/${currentDayMoment.format("YYYY-MM-DD")}/appointments/`,
        {
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': 'Token 43e647722ff3daa8561ab96a60d57298fe23d45e'
          }
        })
        .then((response) => {
          // console.log(response.data.day.appointments)
          if (response.data.day.appointments.length === 0) {
            setAlert("There Are No Appointments Today")
          } else {
            setAlert(`${response.data.day.appointments.length} Appointment(s) Today`)
            setAppointments(response.data.day.appointments)
          }
        })
        .catch((error) => {
          setAlert("0 Appointments Today")
        })
    }
    makeApiCall()
  }, [])

  console.log(appointments)

  const appointmentArray = appointments.map((element, index) => {
    return (
      <div key={index}>
        <h4>Start Time: {element.start_time}</h4>
        <h4>End Time: {element.end_time}</h4>
        <h4>Client: {element.client}</h4>
        <h4>Trainer: {element.trainer}</h4>
      </div>

    )
  })

  return (
    <>
      <h1>{currentDayMoment.format("dddd MM/DD/YYYY")}</h1>
      {alert ? <h4>{alert}</h4> : null}
      {appointmentArray ? appointmentArray : null}

    </>
  )
}

export default DayDetail