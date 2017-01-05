/**
* @Author: Miloš Kolčák
* @Date:   2017-01-05T12:24:34+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-05T12:43:11+01:00
*/

import React from 'react'
import style from './style.scss'

import ComponentWrapper from '../ComponentWrapper'

class Consuption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      consuptionValue: 156
    }
  }
  render() {
    const { consuptionValue } = this.state
    return <ComponentWrapper size={1} color="primary" className="text-center">
      <div className={style.value}>{consuptionValue} GJ</div>
      <div className={style.text}>Roční spotřeba<br/>tepla</div>
    </ComponentWrapper>
  }

}

export default Consuption
