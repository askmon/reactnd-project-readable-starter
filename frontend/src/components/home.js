import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { fetchCategories } from '../actions';
import { connect } from 'react-redux';

class Home extends Component {

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    return (
      <div>
        <Drawer open={true}>
          {this.props.categories.map((category) =>
            <MenuItem>{category.name}</MenuItem>
          )}
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps ({ categoryReducer }) {
  return {
    categories: categoryReducer.categories,
  }
}

export default connect(mapStateToProps, { fetchCategories })(Home);