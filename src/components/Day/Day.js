/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T14:12:58+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-10T13:44:31+01:00
*/

import React from 'react'
import style from './style.scss'
import currentDayName from './DayData.json'

import ComponentWrapper from '../ComponentWrapper'

class Day extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: 0,
      currentDay: 0
    };
  }

  componentDidMount() {
    let currentDate = new Date();
    this.setState({
      currentDate: currentDate.getDate(),
      currentDay: currentDayName[currentDate.getDay()]
    })
  }

  render() {
    const {currentDate, currentDay, showName} = this.state
    return <ComponentWrapper size={1} color="primary" className={"text-center"}>
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
