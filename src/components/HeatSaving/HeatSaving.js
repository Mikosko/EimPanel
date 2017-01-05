/**
* @Author: Miloš Kolčák
* @Date:   2017-01-05T10:45:10+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-05T10:55:38+01:00
*/

import React from 'react'
import style from './style.scss'

import ComponentWrapper from '../ComponentWrapper'

class HeatSaving extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heatValue : -12
    }
  }
  render() {
    const { heatValue } = this.state
    return <ComponentWrapper size={1} color="primary" className="text-center">
        <div className={style.text}>dnešní úspora<br/>tepla</div>
        <div className={style.value}>{heatValue}%</div>
      </ComponentWrapper>
  }
}

export default HeatSaving
