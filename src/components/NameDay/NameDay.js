/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T15:32:41+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-05T17:24:23+01:00
*/

import React from 'react'
import style from './style.scss'
import NameData from './NameData.json'

import ComponentWrapper from '../ComponentWrapper'

let CurrentDate = new Date();
class NameDay extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentMonth: CurrentDate.getMonth(),
      currentDate: CurrentDate.getDate()
    };
  }

  componentDidMount() {
    CurrentDate = new Date();
    this.setState({
      currentMonth: CurrentDate.getMonth(),
      currentDate: CurrentDate.getDate()
    })
  }

  render() {
    const { currentMonth, currentDate } = this.state
    return <ComponentWrapper size={1} color="primary" className="text-center">
        <div className={"streamline " + style.icon}></div>
        <div className={style.text}>dnes má narozeniny</div>
        <div className={style.name}>{NameData[currentMonth][currentDate-1]}</div>
    </ComponentWrapper>
  }
}

export default NameDay
