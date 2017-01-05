/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T14:12:58+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-05T11:17:02+01:00
*/

import React from 'react'
import style from './style.scss'
import DayData from './Daydata.json'

import ComponentWrapper from '../ComponentWrapper'

let currentDate = new Date();
const currentDayName = DayData;

class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: currentDate.getDate(),
      currentDay: currentDayName[currentDate.getDay()]
    };
  }

  componentDidMount() {
    currentDate = new Date();
    this.setState({
      currentDate: currentDate.getDate(),
      currentDay: currentDayName[currentDate.getDay()]
    })
  }

  componentWillUnmount() {
   clearInterval(this.interval);
  }

  render() {
    const {currentDate, currentDay, showName} = this.state

    return <ComponentWrapper size={1} color="primary" className="text-center">
        <div className={style.dateNumber}>
          {currentDate}.
        </div>
        <div className={style.dateText}>
          {currentDay}
        </div>
    </ComponentWrapper>
  }
}

export default Day
