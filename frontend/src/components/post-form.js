import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/post'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { createNewPost, editPostAsync } from '../actions';

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      title: '',
      body: '',
      author: '',
      placeholderTitle: 'Title',
      placeholderBody: 'Content',
      placeholderAuthor: 'Your name',
      warning: ''
    }
  }

  componentDidMount() {
    this.props.match && (
      this.setState({
        title: this.props.match.params.title,
        body: this.props.match.params.body,
        author: this.props.match.params.author
      })
    )
  }

  updateTitle(title) {this.setState({title: title})}

  updateBody(body) {this.setState({body: body})}

  updateAuthor(author) {this.setState({author: author})}

  clearForm() {this.setState({ title: '', body: '', author: '' })}

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.title === '' || this.state.body === '' || this.state.author === '' ) {
      this.setState({warning: 'All fields required'})
    }
    if (!this.props.match.params.id) {
      this.props.createNewPost({
        id: Math.random().toString(36).substring(5),
        timestamp: Date.now(),
        title: this.state.title,
        body: this.state.body,
        author: this.state.author,
        category: this.props.match.params.category
      })
      this.props.history.goBack()
    } else {
      this.props.editPostAsync(
        this.props.match.params.id,
        this.state.title,
        this.state.body
      )
      this.props.history.goBack()
    }
  }

  render() {
    return (
      <div className="new-post" style={{display: 'block', margin: '50px'}}>
        <form
          className="post-form"
          onSubmit={this.handleSubmit}
          style={{textAlign: 'center', display: 'block', margin: 'auto', maxWidth: '800px'}}
        >
          <TextField
            value={this.state.title}
            onChange={(e) => this.updateTitle(e.target.value)}
            placeholder={this.state.placeholderTitle}
            style={{display: 'block', width: '100%', margin: 'auto'}}
          />
          <TextField
            multiLine={true}
            value={this.state.body}
            onChange={(e) => this.updateBody(e.target.value)}
            placeholder={this.state.placeholderBody}
            style={{display: 'block', width: '100%', margin: 'auto'}}
          />
          {!this.props.match.params.id && (
            <TextField
              value={this.state.author}
              onChange={(e) => this.updateAuthor(e.target.value)}
              placeholder={this.state.placeholderAuthor}
              style={{display: 'block', width: '100%', margin: 'auto'}}
            />
          )}
          <FlatButton onClick={this.handleSubmit} label="Submit"/>
        </form>
        <h2>{this.state.warning}</h2>
      </div>
    );
  }
}

export default connect(null, { createNewPost, editPostAsync })(PostForm);
