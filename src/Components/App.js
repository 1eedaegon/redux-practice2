import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Routes/Home";
import Detail from "../Routes/Detail";

const App = () => {
  // State & Props
  // Components
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/:id" component={Detail}></Route>
    </Router>
  );
};

export default App;
