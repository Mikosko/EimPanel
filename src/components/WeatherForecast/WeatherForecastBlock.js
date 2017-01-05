/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T15:32:41+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-05T17:07:33+01:00
*/

import React from 'react'
import style from './style.scss'

class WeatherForecastBlock extends React.Component {
  render() {
    const { width, value, icon, symbol, label } = this.props
    return <div className={style.coll} style={{width: width+'%'}}>
      <div className={style.value}>{value}{symbol}</div>
      <div className={style.icon + " streamline " + icon}></div>
      <div className={style.label}>{label}</div>
    </div>
  }
}

export default WeatherForecastBlock
