import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';

class App extends Component {
  // renderHome = () => <h1> Home </h1>;
 
  renderCustomerListContainer = () => <h1> Customers List Container </h1>;
  renderCustomerNewContainer = () => <h1> Customer New Container </h1>;

  render() {
    return (
      <Router>
        <div className="App">
         {/* exact te permite limitar la ruta a la coincidencia exacta, switch nos permite seleccionar de manera mas especifica primero y menos especificas despues. */}
          <Route exact path = "/" component= {HomeContainer}/>
          <Route exact path = "/customers" component= {CustomersContainer}/>
          <Switch>
              <Route path = "/customers/new" component= {this.renderCustomerContainer}/>
              <Route path = "/customers/:dni"
               render = {props => <CustomerContainer  dni = {props.match.params.dni}/>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
