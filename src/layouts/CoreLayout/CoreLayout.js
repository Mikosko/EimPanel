/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T11:00:20+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-12T15:07:49+01:00
*/

import React from 'react'
import style from './style.scss'
import '../../styles/core.scss'

import TopPanel from '../../components/TopPanel'
import Heating from '../../components/Heating'
import HeatSaving from '../../components/HeatSaving'
import Consuption from '../../components/Consuption'
import InfoBlock from '../../components/InfoBlock'
import InfoBlockSmall from '../../components/InfoBlockSmall'

import {Link} from 'react-router'

export const CoreLayout = ({ children }) => (
<div className={style.layout}>
  <TopPanel />
  <div className={style.container}>
    <div className={style.row}>
      <InfoBlockSmall />
      <InfoBlock />
    </div>
    <div className={style.row}>
      <Consuption />
      <HeatSaving />
      <Heating />
    </div>
    <div className={style.row}>
      {children}
    </div>
  </div>
</div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
