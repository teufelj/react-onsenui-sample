import React, {Component} from 'react';
import {
  Page,
  Toolbar,
  Button
} from 'react-onsenui';
import Page2 from './Page2';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as Action from './action'

class Page1 extends Component {
  constructor(props) {
    super(props);
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className='center'>Page1</div>
      </Toolbar>
    );
  }

  handlePage2(e) {
    this.props.navigator.pushPage({comp: Page2, key: 'Page2', props: {count: this.props.count}});
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar.bind(this)}>
        <p>Page1</p>
          <div>{this.props.count}</div>
          <Button onClick={this.props.increment}>
            Count up
          </Button>
          <Button onClick={this.handlePage2.bind(this)}>
            Page2
          </Button>
      </Page>
    );
  }
}

function mapStateToProps(state) {
  return (state.count);
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Action, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Page1)
