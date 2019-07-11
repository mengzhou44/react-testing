import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommmentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.saveComment(this.state.comment);
          this.setState({ comment: '' });
        }}
      >
        <h4>Add a comment</h4>
        <textarea
          value={this.state.comment}
          onChange={e =>
            this.setState({
              comment: e.target.value
            })
          }
        />
        <div>
          <button>Submit a comment</button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  actions
)(CommmentBox);
