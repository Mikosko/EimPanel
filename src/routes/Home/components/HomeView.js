/**
* @Author: Miloš Kolčák
* @Date:   2017-01-06T16:35:55+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-06T17:30:13+01:00
*/

import React from 'react'
import './HomeView.scss'
import { browserHistory } from 'react-router'

class HomeView extends React.Component {

  componentDidMount() {
    setTimeout(()=> {
      browserHistory.push('/Dashboard')
    },1000)

  }
  render() {
    return <div>
      <h4>Welcome!</h4>
    </div>
  }

}

export default HomeView
