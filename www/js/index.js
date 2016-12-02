import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Navigator} from 'react-onsenui';
import Page1 from './Page1';

class App extends Component {
  constructor(props) {
    super(props);
    this.renderPage = this.renderPage.bind(this);
  }

  renderPage(route, navigator) {
    route.props = route.props || {};

    return (
      <route.comp key={route.key} navigator={navigator} {...route.props}/>
    );
  }

  render() {
    return (
      <Navigator
        initialRoute={{comp: Page1, key: 'Page1'}}
        renderPage={this.renderPage}
      />
    );
  }
}

ReactDOM.render(
  <App />
  , document.getElementById('app')
);
