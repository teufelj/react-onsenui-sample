import React, {Component} from 'react';
import {
  Page,
  Toolbar,
  BackButton
} from 'react-onsenui';

export default class Page2 extends Component {
  constructor(props) {
    super(props);
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='left'>
          <BackButton>Back</BackButton>
        </div>
        <div className='center'>Page2</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar.bind(this)}>
        <p>Page2</p>
        <div>{this.props.count}</div>
      </Page>
    );
  }
}
