import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        Hello, World!
      </div>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    libraries: state.libraries
  };
}

export default connect(mapStateToProps)(LibraryList);
