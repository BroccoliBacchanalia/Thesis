import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';

class HeaderBlock extends Component {
  render() {
    const { nav, dispatch } = this.props;
    return (
      <Header as='h3' block className='nav-header' textAlign='center'>T O T E M
        <Button 
          className='menu-button'
          onClick={() => dispatch({type: 'toggle_menu'})}
          icon='content' />
      </Header>
    )
  }
}

export default connect((store) => {
  return {
    nav: store.nav
  };
})(HeaderBlock);
