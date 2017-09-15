import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }
  componentWillReceiveProps(nextProps) {
    let { searchValue } = nextProps.currentTab;
    
    if(this.state.value !== searchValue) {
      this.setState(() => {
        return {
          value: searchValue
        }
      })
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
    this._input.blur();

    let newSearchValue = this.state.value,
        currentSearchValue = this.props.currentTab.searchValue;
        
    if(newSearchValue !== currentSearchValue) {
      this.props.setSearchValue(newSearchValue);
      this.props.requestPhotos(); 
    }
  }
  render() {
    let {
      value
    } = this.state;

    return (
      <div>
        <form className='photo-form' onSubmit={ e => this.onSubmitSearch(e) }>
          <input 
            className='photo-input' 
            ref={ link => this._input = link } 
            placeholder='Что будем искать?' 
            value={value}
            onChange={ e => this.onChangeInput(e) } />
        </form>
      </div>
    )
  }
}

export default Search;