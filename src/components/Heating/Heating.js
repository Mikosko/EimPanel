/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T16:50:39+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-05T13:27:31+01:00
*/

import React from 'react'
import style from './style.scss'
import HeatingData from './HeatingData.json'

import ComponentWrapper from '../ComponentWrapper'

class Heating extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      stateIcon : '',
      state : '',
      color : ''
    }
  }

  getDataFromAPI() {
    let i = Math.floor(Math.random()*HeatingData.length);
    this.setState({
      stateIcon : HeatingData[i].stateIcon,
      state : HeatingData[i].state,
      color : HeatingData[i].color
    });
  }

  componentDidMount() {
    this.getDataFromAPI();
    this.interval = setInterval(() => this.getDataFromAPI(), 5000);
  }

  componentWillUnmount() {
   clearInterval(this.interval);
  }

  render() {
    const { stateIcon, state, color } = this.state;
    return <ComponentWrapper size={1} color={color} className="text-center">
      <div className={style.text}>vytápění je<br/>aktuálně</div>
      <div className={style.state}>{state}</div>
      <div className={style.icon + " " + style[stateIcon]}></div>
    </ComponentWrapper>
  }
}

export default Heating
