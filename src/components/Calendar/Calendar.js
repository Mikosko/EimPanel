/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T14:12:58+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-06T14:57:29+01:00
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
      progress    : 0,
      showNameDay : false
    }
  }

  changeComponent() {
    this.setState({
      progress : 0,
      showNameDay: !this.state.showNameDay
    })
  }

  animateProgress() {
    this.setState({
      progress  : this.state.progress += (100 / Timer)/100
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeComponent(), 1000 * Timer);
    this.progress = setInterval(() => this.animateProgress(), 10);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.progress);
  }
  render() {
    const { showNameDay, progress } = this.state
    return <span className={style.calendar}>
      {showNameDay ? <NameDay progress={progress}/> : <Day progress={progress}/>}
    </span>
  }
}

export default Calendar
