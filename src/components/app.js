import React, { Component} from 'react';

import {connect} from 'react-redux';

import CommentBox from './comment-box';
import CommentList from './comment-list';

import * as actions from '../actions';


class App extends Component {

  componentDidMount() {
  
     this.props.fetchComments();
  }
   render() {
     return ( <div>
          <CommentBox />
          <CommentList  comments={this.props.comments} />
      </div>);
   
  } 
}

function mapStateToProps({comments}) {
  return  { comments };
}

export default connect(mapStateToProps, actions)(App);