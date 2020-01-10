import React from 'react';
import Balance from "./components/Balance";
import Operation from "./components/Operation";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {


  render() {
    return (
        <div>
          <Balance />
          <Operation/>
        </div>
    );
  }

}

export default App;
