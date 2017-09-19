import React, { Component } from 'react';
import Title from '../Title';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }
  componentWillMount() {
    this._showTitle = true;
  }
  componentDidMount() {
    this._showTitle = false;
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
      <div className='form-wrap'>
        {
          this._showTitle
            ? <Title />
            : null
        }
        <form className='photo-form' onSubmit={ e => this.onSubmitSearch(e) }>
          <input 
            className='photo-form-input'
            ref={ link => this._input = link } 
            placeholder='Что будем искать?' 
            value={value}
            onChange={ e => this.onChangeInput(e) } />
          <button className='photo-form-button'>Найти</button>
        </form>
      </div>
    )
  }
}

export default Search;