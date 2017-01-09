/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T15:32:41+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-06T11:11:12+01:00
*/

import React from 'react'
import style from './style.scss'

import ComponentWrapper from '../ComponentWrapper'

const _icon = ['sun', 'clouds', 'sun-cloud', 'snow'];

class WeatherForecast extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      symbol: '',
      icon: '',
      night: 0,
      tomorrow: 0,
      value: 0
    }
  }

  getDataFromAPI() {
    this.setState({
      symbol: ' °C',
      icon: _icon[Math.floor((Math.random()*_icon.length))],
      night: Math.floor((Math.random()* 24)) - Math.floor((Math.random()* 24)),
      tomorrow: Math.floor((Math.random()* 24)) -Math.floor((Math.random()* 24)),
      value: Math.floor((Math.random()* 24)) - Math.floor((Math.random()* 24))
    })
  }

  componentDidMount() {
    this.getDataFromAPI();
    this.interval = setInterval(() => this.getDataFromAPI(), 5000);
  }

  componentWillUnmount() {
   clearInterval(this.interval);
  }

  render() {
    const { icon, symbol, night, tomorrow, value } = this.state
    return <ComponentWrapper size={1} color="primary">
        <div className={"streamline " + style.icon + " " + icon}></div>
        <div className={style.block}>
          <div className={style.text}>
            <span>noc</span><span className={style.textRight}>{night}{symbol}</span>
          </div>
          <div className={style.text}>
            <span>zítra</span><span className={style.textRight}>{tomorrow}{symbol}</span>
          </div>
        </div>
        <div className={style.value}>{value}{symbol}</div>
      </ComponentWrapper>
  }
}

export default WeatherForecast
