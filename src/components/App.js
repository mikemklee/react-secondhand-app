import React from 'react';
import 'normalize.css/normalize.css';
import { items } from "../static-data";
import '../styles/styles.scss';
import Nav from './Nav';
import ItemList from './ItemList';

class App extends React.Component {
  render() {
    return (
      <div className="App content-container">
        <div>
          <Nav />
        </div>
        <main>
          <ItemList items={items}/>
        </main>
      </div>
    );
  }
}

export default App;