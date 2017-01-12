/**
* @Author: Miloš Kolčák
* @Date:   2017-01-10T12:19:14+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-12T14:34:44+01:00
*/

import React from 'react'
import style from './style.scss'

import TopPanelTime from './TopPanelTime'

class TopPanel extends React.Component {

  render() {
    return <div className={style.wrapper}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-6 text-left">
            <h1 className={style.headline}>eim <small>infopanel</small></h1>
          </div>
          <div className="col-xs-6 text-right">
            <TopPanelTime />
          </div>
        </div>
      </div>
    </div>
  }

}

export default TopPanel
