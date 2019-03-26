import React, { Component } from 'react';
import ReactDOM from "react-dom";
import  {createBrowserHistory} from "history";
import { Router, Route, Switch, Redirect } from 'react-router-dom';

// core components
import Admin from "./layouts/Admin.jsx";
import RTL from "./layouts/RTL.jsx";

import "assets/css/material-dashboard-react.css?v=1.6.0";

const hist = createBrowserHistory();
// // class App extends Component {
// render() {
//    return (
//     <Router history={hist}>
//       <Switch>
//         <Route path="/admin" component={Admin} />
//         <Route path="/rtl" component={RTL} />
//         <Redirect from="/" to="/admin/dashboard" />
//       </Switch>
//     </Router>,
//     document.getElementById("root")
//   );
// }

class App extends Component {
  render() {
    return (
      <Router history={hist}>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/rtl" component={RTL} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </Router>
    );
  }
}

export default App;



// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.tsx</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
