### Repo For Schedule Componenet

`npm i moment`

### Array Of Months In The Year

```js
const value = moment()
const firstDay = value.clone().startOf("year").startOf("day").startOf("week") 
const lastDay = value.clone().endOf("year")

const calendar = []

while (firstDay.isBefore(lastDay, "month")) {
  calendar.push(
    Array(12).fill(0)
      .map(() => firstDay.add(1, "month").clone().format("MM/YYYY"))
  )
}
```
`["01/2020", "02/2020", "03/2020", "04/2020", "05/2020", "06/2020", "07/2020", "08/2020", "09/2020", "10/2020", "11/2020", "12/2020"]`


### Array Of All Days In The Year 
```js
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
```