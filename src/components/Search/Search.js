import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }

    this.props.requestPhotos();
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
    this._input.blur();

    let searchValue = this.state.value;
    
    this.props.setSearchValue(searchValue);
    this.props.requestPhotos();
  }
  render() {
    let {
      value
    } = this.state;

    return (
      <form className='photo-form' onSubmit={ e => this.onSubmitSearch(e) }>
        <input className='photo-input' ref={ link => this._input = link } placeholder='Что будем искать?' value={value} onChange={ e => this.onChangeInput(e) } />
      </form>
    )
  }
}

export default Search;