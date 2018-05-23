import React from 'react';
import 'normalize.css/normalize.css';
import { items } from "../static-data";
import '../styles/styles.scss';
import Header from './Header';
import ItemList from './ItemList';
import ItemActions from './ItemActions';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ItemActions />
        <main className="content-container">
          <h3 className="section__title">Recent Listings</h3>
          <ItemList items={items}/>
        </main>
      </div>
    );
  }
}

export default App;