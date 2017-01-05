/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T16:50:39+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-05T14:54:13+01:00
*/

import React from 'react'
import style from './style.scss'

class HeatMonitorBar extends React.Component {

  render() {
    const { width, value, symbol, height, label } = this.props
    return <div className={style.coll} style={{width: width+'%'}}>
        <div className={style.value}>{value}{symbol}</div>
        <div className={style.wrapper}>
          <div className={style.bar} style={{height : height}}></div>
        </div>
        <div className={style.label}>{label}</div>
      </div>
  }
}

export default HeatMonitorBar
