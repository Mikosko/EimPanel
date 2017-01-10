/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T14:12:58+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-10T13:44:03+01:00
*/

import React from 'react'
import style from './style.scss'

import Day from '../Day'
import NameDay from '../NameDay'

const Timer = 10

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showNameDay : false
    }
  }

  changeComponent() {
    this.setState({
      showNameDay: !this.state.showNameDay
    })
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeComponent(), 1000 * Timer);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { showNameDay, progress } = this.state
    return <span className={style.calendar}>
      {showNameDay ? <NameDay /> : <Day />}
    </span>
  }
}

export default Calendar
