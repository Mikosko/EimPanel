/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T14:12:58+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-06T15:05:07+01:00
*/

import React from 'react'

import Hints from '../Hints'
import WeatherForecast from '../WeatherForecast'
import HeatMonitor from '../HeatMonitor'

const Timer = 20

class InfoBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showBlock : 0
    }
  }

  changeComponent() {
      let { showBlock } = this.state
      this.setState({
        showBlock: showBlock !== 2 ? showBlock += 1 : showBlock = 0
      })
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeComponent(), 1000 * Timer);
  }

  componentWillUnmount() {
   clearInterval(this.interval);
  }

  render() {
    const { showBlock } = this.state
    return <span>
      {(() => {switch (showBlock){
        case 0:
          return <span><Hints /></span>
          break;
        case 1:
          return <span><HeatMonitor /></span>
          break;
        case 2:
          return <span><WeatherForecast /></span>
          break;
      }})()}
    </span>
  }
}

export default InfoBlock
