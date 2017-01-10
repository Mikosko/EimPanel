/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T11:00:20+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-10T13:08:07+01:00
*/

import React from 'react'
import style from './style.scss'

class TopPanelTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date()
    };
  }

  tick() {
    this.setState({currentDate: new Date()});
  }

  pad(number, digits) {
    return (number).toLocaleString(undefined, {minimumIntegerDigits: digits, useGrouping:false})
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
   clearInterval(this.interval);
  }

  render() {
    const { currentDate } = this.state
    return <div className={style.time}>
      {this.pad(currentDate.getHours(),2)}:{this.pad(currentDate.getMinutes(),2)}
    </div>
  }
}

export default TopPanelTime
