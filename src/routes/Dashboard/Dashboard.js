/**
* @Author: Miloš Kolčák
* @Date:   2017-01-06T16:30:10+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-10T14:43:42+01:00
*/

import {connect} from 'react-redux'
import React from 'react'
import style from './Dashboardstyle.scss'

import Post from './components/Post'

class DashboardView extends React.Component {

  render() {
    return <div>
      <h2 className={style.headline}>Nástenka</h2>
      <Post />
    </div>
  }
}

export default DashboardView
