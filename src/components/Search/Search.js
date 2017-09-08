import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  onChangeInput({target: { value }}) {
    this.setState((state) => {
      return {
        value
      }
    })
  }
  render() {
    let {
      value
    } = this.state;

    return (
      <div>
        <input placeholder='Что будем искать?' value={value} onChange={ e => this.onChangeInput(e) } />
      </div>
    )
  }
}

export default Search;