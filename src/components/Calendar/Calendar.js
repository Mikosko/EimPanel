/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T14:12:58+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-05T11:10:15+01:00
*/

import React from 'react'

import Day from '../Day'
import NameDay from '../NameDay'

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showNameDay : false
    }
  }

  tick() {
    this.setState({
      showNameDay: !this.state.showNameDay
    })
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 10000);
  }

  componentWillUnmount() {
   clearInterval(this.interval);
  }

  render() {
    const { showNameDay } = this.state
    return <span>{showNameDay ? <NameDay /> : <Day />}</span>
  }
}

export default Calendar
