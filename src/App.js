import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';

class App extends Component {
  // renderHome = () => <h1> Home </h1>;
  renderCustomerContainer = () => <h1> Customer Container </h1>;
  renderCustomerListContainer = () => <h1> Customers List Container </h1>;
  renderCustomerNewContainer = () => <h1> Customer New Container </h1>;

  render() {
    return (
      <Router>
        <div className="App">
         {/* exact te permite limitar la ruta a la coincidencia exacta, switch nos permite seleccionar de manera mas especifica primero y menos especificas despues. */}
          <Route exact path = "/" component= {HomeContainer}/>
          <Route exact path = "/customers" component= {CustomersContainer}/>
          {/* :id significa cualquier valor sea numero o string lo tomara como una variable llamada :id */}
          <Switch>
              <Route path = "/customers/new" component= {this.renderCustomerContainer}/>
              <Route path = "/customers/:id" component= {this.renderCustomerContainer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
