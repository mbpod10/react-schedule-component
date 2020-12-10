import './App.css';
// import Calendar from "./schedule/Calendar"
import { Route, Switch } from "react-router-dom"

import Months from "./schedule/Months"
import Individualmonth from "./schedule/IndividualMonth"
import DayDetail from "./schedule/DayDetail"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => (<Months {...props} />)} />
        <Route path="/month/:month" render={(props) => (<Individualmonth {...props} />)} />
        <Route path="/detail/:day" render={(props) => (<DayDetail {...props} />)} />
      </Switch>
    </div>
  );
}

export default App;
