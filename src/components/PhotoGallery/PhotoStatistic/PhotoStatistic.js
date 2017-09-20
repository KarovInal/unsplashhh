import React, { Component } from 'react';
import unsplash, { toJson } from '../../../config/unsplash.js';
import StatisticItem from './StatisticItem';

import loader from './img/loader.gif';
import './css/style.css';

class PhotoStatistic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetch: {
        isFetch: true,
        status: "success"
      },
      statistic: {}
    }
  }

  componentDidMount() {
    let { id } = this.props;
    
    this.requestStatistic(id);
  }

  componentWillReceiveProps(props) {
    let { id } = props;
    
    this.requestStatistic(id)
  }

  requestStatistic(id) {
    let { isFetch } = this.state.fetch;

    if(!isFetch) {
      this.setState({
        fetch: {
          ...this.fetch,
          isFetch: !isFetch
        }
      })
    }

    unsplash.photos.getPhoto(id)
      .then(toJson)
      .then(json => {
        if(id == this.props.id) {
          console.log(json);
          this.setState({
            fetch: {
              ...this.state.fetch,
              isFetch: false
            },
            statistic: json
          })
        } else {
          console.log('ID поменяли...')
        }
      })
  }
  render() {
    let { 
      fetch: {
        isFetch
      },
      statistic } = this.state;

    return (
      <div className='photo-statistics'>
        <StatisticItem type    = 'Просмотры'
                       value   = {statistic.views}
                       isFetch = {isFetch}/>

        <StatisticItem type    = 'Лайки'
                       value   = {statistic.likes}
                       isFetch = {isFetch}/>

        <StatisticItem type    = 'Скачивания'
                       value   = {statistic.downloads}
                       isFetch = {isFetch}/>
      </div>
    )
  }
}

export default PhotoStatistic;