/**
* @Author: Miloš Kolčák
* @Date:   2017-01-04T18:32:01+01:00
* @Email:  milos.kolcak@gmail.com
* @Last modified by:   Miloš Kolčák
* @Last modified time: 2017-01-10T13:42:15+01:00
*/

import React from 'react'
import style from './style.scss'

import ComponentWrapper from '../ComponentWrapper'
import HintsData from './HintsData.json'

const Timer = 10
var HintLevel = 0

class Hints extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      title : "",
      text  : ""
    }
  }
  getDataFromAPI() {
    this.setState({
      title : HintsData[HintLevel][0],
      text  : HintsData[HintLevel][1]
    });
    HintLevel = HintLevel !== HintsData.length-1 ? HintLevel += 1 : HintLevel = 0
  }

  componentDidMount() {
    this.getDataFromAPI();
    this.interval = setInterval(() => this.getDataFromAPI(), 1000 * Timer);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { title, text } = this.state
    return <ComponentWrapper size={2} color="primary" className="block-offset">
        <h3 className={style.title}>{title}</h3>
        <p className={style.text}>{text}</p>
    </ComponentWrapper>
  }
}

export default Hints
