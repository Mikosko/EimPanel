/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T11:00:20+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-09T13:34:47+01:00
*/

import React from 'react'
import style from './CoreLayout.scss'
import '../../styles/core.scss'

import TopPanelTime from '../../components/TopPanelTime'
import TopPanelHeadline from '../../components/TopPanelHeadline'

import Calendar from '../../components/Calendar'
import Heating from '../../components/Heating'
import HeatSaving from '../../components/HeatSaving'
import Consuption from '../../components/Consuption'
import InfoBlock from '../../components/InfoBlock'
import InfoBlockSmall from '../../components/InfoBlockSmall'

import {Link} from 'react-router'

export const CoreLayout = ({ children }) => (
<div>
  <div className="toppanel">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-6 text-left">
          <TopPanelHeadline />
        </div>
        <div className="col-xs-6 text-right">
          <TopPanelTime />
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <InfoBlockSmall />
      <InfoBlock />
    </div>
    <div className="row">
      <Consuption />
      <HeatSaving />
      <Heating />
    </div>
    <div className="row">
      <div className='core-layout__viewport'>
        {children}
      </div>
    </div>
  </div>
</div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
