import React, {Component} from 'react';
import {
  Page,
  Toolbar,
  Button
} from 'react-onsenui';
import Page2 from './Page2';

export default class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Page1</div>
      </Toolbar>
    );
  }

  handlePage2(e) {
    this.props.navigator.pushPage({comp: Page2, key: 'Page2', props: {count: this.state.count}});
  }

  handleCountup(e) {
    const c = this.state.count + 1;
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar.bind(this)}>
        <p>Page1</p>
          <div>{this.state.count}</div>
          <Button onClick={this.handleCountup.bind(this)}>
            Count up
          </Button>
          <Button onClick={this.handlePage2.bind(this)}>
            Page2
          </Button>
      </Page>
    );
  }
}
