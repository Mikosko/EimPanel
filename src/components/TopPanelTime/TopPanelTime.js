/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T11:00:20+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-04T14:05:09+01:00
*/

import React from 'react'

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
    return <div className="toppanel__time">
      {this.pad(this.state.currentDate.getHours(),2)} : {this.pad(this.state.currentDate.getMinutes(),2)} : {this.pad(this.state.currentDate.getSeconds(),2)}
    </div>
  }
}

export default TopPanelTime
