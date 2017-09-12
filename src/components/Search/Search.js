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
  onSubmitSearch(e) {
    e.preventDefault();

    let searchValue = this.state.value;
    
    this.props.setSearchValue(searchValue);
    this.props.requestPhotos();
  }
  render() {
    let {
      value
    } = this.state;
    this.props.requestPhotos();

    return (
      <form className='photo-form' onSubmit={ e => this.onSubmitSearch(e) }>
        <input className='photo-input' placeholder='Что будем искать?' value={value} onChange={ e => this.onChangeInput(e) } />
      </form>
    )
  }
}

export default Search;